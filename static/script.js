// Function to handle adding a new item to the wardrobe
document.getElementById("addItemForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const item = {
        type: document.getElementById("itemType").value,
        material: document.getElementById("itemMaterial").value,
        brand: document.getElementById("itemBrand").value
    };

    fetch("/add_item", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Item added:", data);
        // Call function to update the wardrobe list after adding a new item
        updateWardrobeList();
    })
    .catch(error => console.error("Error adding item:", error));
});

// Function to update the wardrobe list from the backend
function updateWardrobeList() {
    fetch("/get_wardrobe")
    .then(response => response.json())
    .then(data => {
        const wardrobeList = document.getElementById("wardrobeList");
        wardrobeList.innerHTML = ''; // Clear current list
        let totalFootprint = 0; // Total carbon footprint
        let totalItems = data.length; // Total number of items

        data.forEach(item => {
            const listItem = document.createElement("li");
            const itemDiv = document.createElement("div"); // Create a div to wrap the item and button
            itemDiv.classList.add("item-container");

            itemDiv.innerHTML = `Type: ${item.type}, Material: ${item.material}, Brand: ${item.brand}`;
            
            // Adding a remove button
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";

            // Apply a class to the button so we can style it
            removeButton.classList.add("remove-btn");

            // Add an event listener for removing the item when clicked
            removeButton.addEventListener("click", function() {
                removeItem(item.id); // Pass the item ID to remove it
            });

            // Append the remove button to the item div
            itemDiv.appendChild(removeButton);

            // Add the item div to the list
            listItem.appendChild(itemDiv);

            wardrobeList.appendChild(listItem);

            // Update carbon footprint for each item
            if (item.material in carbonFootprintByMaterial) {
                totalFootprint += carbonFootprintByMaterial[item.material];
            }
        });

        // Update the summary
        updateCarbonFootprintSummary(totalItems, totalFootprint);
    })
    .catch(error => console.error("Error fetching wardrobe:", error));
}

// Function to update carbon footprint summary
function updateCarbonFootprintSummary(totalItems, totalFootprint) {
    const averageFootprint = totalItems > 0 ? (totalFootprint / totalItems).toFixed(2) : 0;
    
    document.getElementById("totalItems").textContent = totalItems;
    document.getElementById("totalFootprint").textContent = totalFootprint.toFixed(2);
    document.getElementById("averageFootprint").textContent = averageFootprint;
}

// Function to handle removing an item from the wardrobe
function removeItem(itemId) {
    fetch(`/remove_item/${itemId}`, {
        method: "DELETE"
    })
    .then(() => {
        console.log(`Item with ID ${itemId} removed`);
        // Update the wardrobe list after removing an item
        updateWardrobeList();
    })
    .catch(error => console.error("Error removing item:", error));
}

// Carbon footprint data for each material (update with real data if needed)
const carbonFootprintByMaterial = {
    "cotton": 1.2,     // Example carbon footprint per kg for cotton
    "wool": 1.5,       // Example carbon footprint per kg for wool
    "silk": 2.0,       // Example carbon footprint per kg for silk
    "linen": 0.9,      // Example carbon footprint per kg for linen
    "polyester": 2.5,  // Example carbon footprint per kg for polyester
    "nylon": 3.0,      // Example carbon footprint per kg for nylon
    "spandex": 2.8,    // Example carbon footprint per kg for spandex
    "leather": 5.0,    // Example carbon footprint per kg for leather
    "vegan-leather": 4.0, // Example carbon footprint per kg for vegan leather
    "denim": 1.8,      // Example carbon footprint per kg for denim
    "corduroy": 1.3,   // Example carbon footprint per kg for corduroy
    "fleece": 2.2      // Example carbon footprint per kg for fleece
};

// Function to populate the wardrobe list when the page loads
document.addEventListener("DOMContentLoaded", function() {
    updateWardrobeList(); // Initial call to populate the wardrobe list
});

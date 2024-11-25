Project Topic: Carbon Footprint Tracker for Fashion

Video Demonstration
https://youtu.be/ovvlndcbUmc 

Description
Welcome to the Carbon Footprint Tracker for Fashion! This project empowers users to monitor the environmental impact of their wardrobe by calculating the carbon footprint of clothing items based on type, material, and brand.

The goal is to raise awareness about the environmental effects of fashion and encourage eco-friendly choices by offering valuable insights into a wardrobe’s carbon footprint. This tool promotes sustainability in the fashion industry, aligning with global efforts to mitigate greenhouse gas (GHG) emissions.

Key Features
Add New Wardrobe Items: Users can log clothing items by specifying type, material, and brand.
Track Carbon Footprint: Calculate the carbon footprint of each item based on its material and attributes.
Wardrobe Summary: View a consolidated overview of the wardrobe, including total items, total carbon footprint, and average carbon footprint per item.
Remove Items: Delete clothing items when they are no longer needed.

Technologies Used
Frontend
HTML: For webpage structure.
CSS: For styling and layout.
JavaScript: For interactivity and dynamic content updates.
Backend
Python (Flask): To handle backend logic and API requests.
JSON: For data storage and API communication.

Installation
Prerequisites
Ensure Python 3 is installed on your system.
Install project dependencies by running:
bash
Copy code
pip install -r requirements.txt
Clone the Repository
Clone the project from GitHub:
bash
Copy code
git clone https://github.com/Loisyy/CS50-s-Introduction-to-Computer-Science.git 
cd carbon-footprint-tracker  
Run the Application
Start the app using the command:
bash
Copy code
python app.py  
Access the app locally at: http://127.0.0.1:5000.

How It Works
Adding Items
Users can add items to their wardrobe by specifying:

Type: E.g., T-shirt, jeans, jacket.
Material: E.g., cotton, wool, polyester.
Brand: E.g., Nike, Levi’s, Zara.
Tracking Carbon Footprint
The app calculates the carbon footprint of items based on material. For example:

Synthetic materials like polyester typically have higher carbon footprints.
Natural materials like cotton or wool tend to have lower impacts.
Wardrobe Summary
Total Items: Displays the total number of clothing items logged.
Total Carbon Footprint: Aggregates the carbon footprint of all items.
Average Carbon Footprint: Provides the average impact per item.
API Endpoints
POST /add_item: Adds a new item to the wardrobe.
Request Body (JSON):

json
Copy code
{
  "type": "shirt",
  "material": "cotton",
  "brand": "Lois"
}
GET /get_wardrobe: Retrieves all items in the wardrobe.
Response (JSON):

json
Copy code
[
  {
    "id": 1,
    "type": "shirt",
    "material": "cotton",
    "brand": "Lois",
    "carbon_footprint": 2.5
  },
  ...
]
DELETE /remove_item/<item_id>: Removes an item from the wardrobe.
URL Parameter: item_id (ID of the item to be deleted).

Folder Structure
plaintext
Copy code
carbon-footprint-tracker/  
├── app.py                 # Main Flask application file  
├── static/  
│   ├── script.js          # JavaScript for frontend logic  
│   └── styles.css         # CSS for styling  
├── templates/  
│   └── index.html         # HTML template for the homepage  
├── requirements.txt       # Python dependencies  
└── README.md              # Project documentation (this file)  

How to Contribute
Fork the Repository: Create a personal copy of the project.
Clone the Forked Repository:
bash
Copy code
git clone <your-fork-url>
Create a New Branch:
bash
Copy code
git checkout -b new-feature
Make Changes and Test: Update the code and verify functionality.
Push Changes: Commit and push changes to your forked repository.
bash
Copy code
git push origin new-feature
Submit a Pull Request: Open a PR to the main repository.

Acknowledgments
This project was inspired by the need for more sustainable practices in the fashion industry.
A heartfelt thank you to the entire CS50x team for creating such an incredible learning experience,
Special appreciation for everyone promoting eco-friendly choices.
By helping individuals track and reduce their wardrobe's carbon footprint, we contribute to a greener planet. Let’s make sustainability fashionable!
from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)

# In-memory storage for demonstration purposes
wardrobe = []

# Simple carbon footprint calculation based on material
def calculate_carbon_footprint(material):
    if material == "Cotton":
        return 2  # kg CO2
    elif material == "Polyester":
        return 5  # kg CO2
    elif material == "Leather":
        return 7  # kg CO2
    else:
        return 0  # Default to 0 for unspecified materials

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add_item', methods=['POST'])
def add_item():
    item = request.json
    # Calculate carbon footprint based on material
    item['carbon_footprint'] = calculate_carbon_footprint(item['material'])
    item['id'] = len(wardrobe)  # Simple ID assignment
    wardrobe.append(item)
    return jsonify(item), 201

@app.route('/get_wardrobe')
def get_wardrobe():
    return jsonify(wardrobe)

@app.route('/remove_item/<int:item_id>', methods=['DELETE'])
def remove_item(item_id):
    global wardrobe
    wardrobe = [item for item in wardrobe if item['id'] != item_id]
    return '', 204

if __name__ == '__main__':
    app.run(debug=True)

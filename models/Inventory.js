// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// make InventorySchema a Schema
var InventorySchema = new Schema({
  // name: just a string
  name: {
    type: String,
	required: "Name is required",
	trim: true
  },
  // image: just a string
  image: {
    type: String,
	trim: true,
	default: ""
  },

  quantity:{
	type: Number,
	default: 0
  }
},=
{
	collection: 'inventory'
}
);

// Create the Inventory model with the InventorySchema
var Inventory = mongoose.model("Inventory", InventorySchema);

// Export the model so we can use it on our server file.
module.exports = Inventory;

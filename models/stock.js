var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stockSchema = new Schema({
id: String,
itemType: {type:String, required: true},
name: {type:String, required: true}, //unique: true}, //what i consider name should be itemType
Category:{type:String}, //required: true
Description: {type:String, required: true},
Price: {type:Number, required: true},
Capacity: Number,
Stackable: {type: String, default: false},
SteamFunction: {type: String, default: false},
Width: Number,
Depth: Number,
Quantity: {type: Number, default: 0},
Brand: String,
Rating: {type: Number, default: 1, min: 1, max: 5},
img: {type: String, default: "placeholder.jpg"},
imgSmall: {type: String, default: "placeholder.jpg"} //default question mark image load
},
{
collection: 'stock' //Note: You need to have a collection named stock, not stocks.
});

var Stock = mongoose.model('Stock', stockSchema);
module.exports = Stock;

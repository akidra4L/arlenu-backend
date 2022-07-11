const mongoose = require("mongoose");

const { Schema } = mongoose;

const itemSchema = new Schema({
  title: { type: String, default: null },
  description: { type: String, default: null },
  image: { type: String, default: null },
  likes: { type: Number, default: 0 },
}, { timestamps: true });

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;

const mongoose = require("mongoose");

const { Schema } = mongoose;

const itemSchema = new Schema({
  nickname: { type: String, default: null, required: true },
  title: { type: String, default: null },
  design: { type: Buffer, default: null },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;

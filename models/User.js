const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  nickname: { type: String, default: null, required: true },
  password: { type: String, required: true },
  avatar: { type: Buffer, default: null },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

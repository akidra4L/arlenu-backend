const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, default: null, required: true },
    nickname: { type: String, default: null, required: true },
    password: { type: String, required: true },
    quote: { type: String },
    token: { type: String },
  },
  { collection: "user-registered" }
);

const toUserDTO = (model) => {
  return {
    name: model.name,
    nickname: model.nickname,
    token: model.token,
  };
};

module.exports = {
  User: mongoose.model("User", userSchema),
  toUserDTO,
  UserSchema: userSchema,
};

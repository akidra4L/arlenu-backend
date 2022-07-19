const { Router } = require("express");
const { User, toUserDTO } = require("../models/User");
const bcrypt = require("bcryptjs");

const routes = new Router();

const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});
    const allUsers = users.map((user) => {
      return {
        name: user.name,
        nickname: user.nickname,
      };
    });
    return res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
  }
};

routes.get("/users", getAllUser);

module.exports = routes;

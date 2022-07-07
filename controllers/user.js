const { Router } = require("express");
const app = require("../App");
const User = require("../models/User");

const routes = new Router();

routes.get("/", async (req, res) => {
  const items = await User.find({});
  res.status(200).json(items);
});

routes.post("/", async (req, res) => {
  const user = req.body;
  const createUser = await User.create(user);
  res.status(200).json(createUser);
});

module.exports = routes;

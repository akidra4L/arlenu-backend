const { Router } = require("express");
const app = require("../App");
const Item = require("../models/Item");

const routes = new Router();

routes.get("/", async (req, res) => {
  const items = await Item.find({});
  res.status(200).json(items);
});

routes.post("/", async (req, res) => {
  const item = req.body;
  const createItem = await Item.create(item);
  res.status(200).json(createItem);
});

module.exports = routes;

const express = require("express");
const cors = require("cors");

const userController = require("./controllers/user");
const itemController = require("./controllers/item");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userController);
app.use("/item", itemController);

module.exports = app;

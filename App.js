require("dotenv").config(); // import, type module

const express = require("express");
const cors = require("cors");

const userRegisterController = require("./controllers/userRegister");
const userLoginController = require("./controllers/userLogin");
const itemController = require("./controllers/item");

const app = express();

app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb" }));

app.use("/", itemController);
app.use("/sign-up", userRegisterController);
app.use("/sign-in", userLoginController);

module.exports = app;

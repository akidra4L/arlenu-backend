const express = require("express");
const cors = require("cors");
const userController = require("./controllers/user");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/user", userController);

module.exports = app;

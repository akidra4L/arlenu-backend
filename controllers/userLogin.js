const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { User, toUserDTO } = require("../models/User");
const bcrypt = require("bcryptjs");

const routes = new Router();

routes.post("/", async (req, res) => {
  const { nickname, password } = req.body;

  if (!(nickname && password)) {
    res.status(400).json({ message: "All input is required" });
  }

  const user = await User.findOne({ nickname });
  if (!user) {
    return res.status(400).json({ message: "User is not exists." });
  }

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ id: user._id, nickname }, process.env.TOKEN_KEY, {
      expiresIn: 5 * 60 * 60,
    });

    const updated = await User.findByIdAndUpdate(
      user._id,
      { token },
      { new: true }
    );

    return res.status(200).json(toUserDTO(updated));
  } else {
    return res.status(400).json({ message: "Invalid credentials." });
  }
});

routes.get("/", async (req, res) => {
  const { nickname } = req.body;
  const user = await User.findOne({ nickname });
  res.status(200).json(user);
});

module.exports = routes;

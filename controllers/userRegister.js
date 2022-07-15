const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User, toUserDTO } = require("../models/User");

const routes = new Router();

routes.post("/", async (req, res) => {
  try {
    const { name, nickname, password } = req.body;

    if (!(name && nickname && password)) {
      console.log("all input", req.body);
      return res.status(400).json({ message: "All input is required" });
    }

    const oldUser = await User.findOne({ nickname });
    if (oldUser) {
      return res
        .status(409)
        .json({ message: "User already exists. Please Login." });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const createUser = await User.create({
      name,
      nickname,
      password: encryptedPassword,
    });
    // res.status(200).json(createUser);

    const token = jwt.sign(
      { id: createUser._id, nickname },
      process.env.TOKEN_KEY,
      {
        expiresIn: 5 * 60 * 60,
      }
    );

    const userWithToken = await User.findByIdAndUpdate(
      createUser._id,
      { token },
      { new: true }
    );
    // console.log("User with Token:", userWithToken);

    res.status(201).json(toUserDTO(userWithToken));
  } catch (error) {
    console.log(error);
  }
});

module.exports = routes;

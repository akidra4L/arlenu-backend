const mongoose = require("mongoose");
const password = require("./password");

const connectToDataBase = () => {
  mongoose
    .connect(
      `mongodb+srv://akidra4L:${password}@cluster0.8tuyd.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log("Succesfully connected.");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectToDataBase;

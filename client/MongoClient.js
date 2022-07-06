import { MongoClient } from "mongodb";
import config from "../config/Config.js";

const client = new MongoClient(config.url);

client
  .connect()
  .then(() => {
    console.log("Connected!");
  })
  .catch((error) => {
    console.log(error);
  });

export default client;
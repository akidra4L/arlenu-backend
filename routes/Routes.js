const express = require("express");
const cors = require("cors");

import client from "../client/MongoClient.js";

const database = client.db("arlenu");
const collection = database.collection("arlenu");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  const items = await collection.find({}).toArray();
  res.send(items);
});

export default app;

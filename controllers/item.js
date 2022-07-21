const { Router } = require("express");
const Item = require("../models/Item");
const { User } = require("../models/User");

const routes = new Router();

// routes.get("/", async (req, res) => {
//   const items = await Item.find({});
//   res.status(200).json(items);
// });

// routes.post("/", async (req, res) => {
//   const item = req.body;
//   const createItem = await Item.create(item);
//   res.status(200).json(createItem);
// });

const createProject = async (req, res) => {
  try {
    const { title, description, image } = req.body;

    if (!(title && description && image)) {
      return res.status(400).send({ message: "All field are required!" });
    }
    const userID = req.auth.id;
    const user = await User.findById(userID);

    const project = await Item.create({
      title,
      description,
      image,
      nickname: user.nickname,
    });
    return res.status(200).json(project);
  } catch (error) {
    return res.status(502).json({ message: "Create Project error" });
  }
};

const getAllProjects = async (req, res) => {
  try {
    const projects = await Item.find({});
    return res.status(200).json(projects);
  } catch (error) {
    console.log(error);
  }
};

routes.post("/", createProject);
routes.get("/", getAllProjects);

module.exports = routes;

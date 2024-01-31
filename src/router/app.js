const express = require("express");
const Usermodel = require("../models/mongoSchema");

const app = express.Router();

app.get("/views", (req, res) => {
  res.render("index");
});

app.get("/views/showUser", async (req, res) => {
  const users = await Usermodel.find({});
  res.render("showUser", { users });
});

app.get("/views/newUser", (req, res) => {
  try {
    let users = new Usermodel();
    res.status(200).render("newUser", { users: users });
  } catch (error) {
    res.status(500).render(error.message);
  }
});
app.get("/views/:id/edit", async (req, res) => {
  try {
    let users = await Usermodel.findById(req.params.id);
    res.status(200).render("edit", { users: users });
  } catch (error) {
    res.status(500).render(error.message);
  }
});
app.post("/views", async (req, res) => {
  let user = req.body.users;
  let users = new Usermodel(user);
  try {
    await users.save();

    res.redirect("./views/showUser");
  } catch (error) {
    res.status(500).render("index", error.message);
  }
});

app.put("/views/:id", async (req, res) => {
  let user = req.body.users;
  let users = await Usermodel.findById(req.params.id);
  try {
    await users.update(user);
    console.log("usúario alterado com sucesso!");
    res.status(200).render("index");
  } catch (error) {
    res.status(402).render(error.message);
  }
});
app.delete("/views/:id", async (req, res) => {
  try {
    let user = await Usermodel.findByIdAndRemove(req.params.id);
    res.status(200).redirect("/views/showUser");
  } catch (error) {
    res.status(500).render(error.message);
  }
});
module.exports = app;

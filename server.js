//initialize app
const express = require("express");
const app = express();
const port = 3000;

const jsxEngine = require("jsx-view-engine"); //require view engine
const mongoose = require("mongoose"); //require mongoose db

//templating engine for views
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

//app.use invocations(middleware)
app.use(express.urlencoded({ extended: false }));

//models
const pokemon = require("./models/pokemon.js");

//routes
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

//INDEX
app.get("/pokemon", (req, res) => {
  // res.send(pokemon);
  res.render("Index", { pokemon: pokemon });
});

//SHOW
app.get("/pokemon/:id", (req, res) => {
  //res.send(req.params.id);
  res.render("Show", { id: req.params.id, pokemon: pokemon[req.params.id] });
});
//listen on port 3000
app.listen(port, () => {
  console.log("listening");
});

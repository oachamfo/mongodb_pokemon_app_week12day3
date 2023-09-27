//initialize app
const express = require("express");
const app = express();
const port = 3000;

const jsxEngine = require("jsx-view-engine"); //require view engine
const mongoose = require("mongoose"); //require mongoose db

//method-override package: for spoofing HTTP methods
const methodOverride = require("method-override");

//templating engine for views
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

//app.use invocations(middleware)
app.use(express.urlencoded({ extended: false }));

//use methodOverride package for adding a query parameter to the delete form named _method
app.use(methodOverride("_method"));

//db connection
//require .env file, without dotenv the syntax process.env.MONGO_URI will not work
require("dotenv").config();

//connect to db
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

//models

//destructuring of exports from pokemon.js
const { Pokemon, pokemonArray } = require("./models/pokemon.js");

//routes

//seed route
app.get("/pokemon/seed", (req, res) => {
  Pokemon.create(pokemonArray)
    .then(res.redirect("/pokemon"))
    .catch((error) => {
      console.log(error);
    });
});

//homepage route
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

//INDEX
app.get("/pokemon/", async (req, res) => {
  try {
    const pokemon = await Pokemon.find();
    res.render("Index", { pokemon: pokemon });
  } catch (error) {
    console.error(error);
  }
});

//NEW
app.get("/pokemon/new", (req, res) => {
  try {
    res.render("New");
  } catch {
    console.log("Something went wrong showing New.jsx page");
  }
});

//DELETE
app.delete("/pokemon/:id", async (req, res) => {
  try {
    await Pokemon.findByIdAndRemove(req.params.id);
    res.redirect("/pokemon"); //redirect back to pokemon index
  } catch (error) {
    console.log(error);
  }
});

//CREATE
app.post("/pokemon", async (req, res) => {
  try {
    //data correction
    req.body.img =
      "https://img.pokemondb.net/artwork/" + req.body.name.toLowerCase();
    //store new pokemon in cloud db
    await Pokemon.create(req.body);
    res.redirect("/pokemon");
  } catch (error) {
    console.log(error);
  }
});

//SHOW
app.get("/pokemon/:id", async (req, res) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id);
    res.render("Show", { pokemon: pokemon });
  } catch (error) {
    console.log(error);
  }
});

//listen on port 3000
app.listen(port, () => {
  console.log("listening");
});

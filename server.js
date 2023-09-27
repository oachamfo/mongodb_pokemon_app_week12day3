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
  Pokemon.create([
    { name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur" },
    { name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur" },
    { name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur" },
    { name: "charmander", img: "http://img.pokemondb.net/artwork/charmander" },
    { name: "charizard", img: "http://img.pokemondb.net/artwork/charizard" },
    { name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle" },
    { name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle" },
  ])
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
  res.render("New");
});

//CREATE
app.post("/pokemon", async (req, res) => {
  try {
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

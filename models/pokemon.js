exports.pokemonArray = [
  { name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur" },
  { name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur" },
  { name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur" },
  { name: "charmander", img: "http://img.pokemondb.net/artwork/charmander" },
  { name: "charizard", img: "http://img.pokemondb.net/artwork/charizard" },
  { name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle" },
  { name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle" },
];

//import Mongoose db
const mongoose = require("mongoose");

//create Schema
const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
});

//create model based on Schema
exports.Pokemon = mongoose.model("Pokemon", pokemonSchema);

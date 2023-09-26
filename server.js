//initialize app
const express = require("express");
const app = express();
const port = 3000;

const jsxEngine = require("jsx-view-engine"); //require view engine
const mongoose = require("mongoose"); //require mongoose db
require("dotenv").config(); //require .env file

//templating engine for views
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

//app.use
app.use(methodOverride("_method"));

//routes
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

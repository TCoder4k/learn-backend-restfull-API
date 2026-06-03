// import express module
const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3001;
const hostname = process.env.HOST_NAME;

// config template engine
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

//config static files
app.use("/static", express.static(path.join(__dirname, "public")));

//define route
app.get("/", (req, res) => {
  res.send("<h1>Hello World! & TCODER4K <h1>");
});
app.get("/about", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

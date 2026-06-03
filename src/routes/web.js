const express = require("express");

const router = express.Router();

//define route
router.get("/", (req, res) => {
  res.send("<h1>Hello World! & TCODER4K <h1>");
});
router.get("/about", (req, res) => {
  res.render("sample.ejs");
});

module.exports = router; //export default(this file has exported only 1 variable )

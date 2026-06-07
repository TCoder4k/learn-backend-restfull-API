const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};
const getAboutPage = (req, res) => {
  res.render("sample.ejs");
};
const postCreateUser = (req, res) => {
  console.log(">>>Check req.body", req.body);
  res.send("Create new user");
};

module.exports = {
  getHomePage,
  getAboutPage,
  postCreateUser,
};

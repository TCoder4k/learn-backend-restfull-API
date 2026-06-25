const express = require("express");
const {
  getHomePage,
  getAboutPage,
  postCreateUser,
  getCreateUsertPage,
} = require("../controllers/homeController");

const router = express.Router();

//define route
//router.Method('/router', handler)
router.get("/", getHomePage);
router.get("/about", getAboutPage);
router.get("/create-user", getCreateUsertPage);
router.post("/create-user", postCreateUser);

module.exports = router; //export default(this file has exported only 1 variable )

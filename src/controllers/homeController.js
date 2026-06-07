const connection = require("../config/database");

const getHomePage = (req, res) => {
  //process data
  //call model
  let users = [];

  connection.query("SELECT * FROM Users ", function (err, results, fields) {
    if (err) {
      console.log(err);
      return;
    }
    users = results;
    console.log("checkUserHomePage: ", results);
    res.send(JSON.stringify(users));
    console.log("users:", users);
  });
};
const getAboutPage = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  getAboutPage,
};

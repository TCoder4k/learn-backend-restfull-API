require("dotenv").config();
const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const connection = require("./config/database");
const webRoutes = require("./routes/web");

const app = express();
const port = process.env.PORT || 3001;

// config template engine
configViewEngine(app);

//connection db

//querry db
connection.query("SELECT * FROM Users ", function (err, results, fields) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("results: ", results);
});

//define route
app.use("/", webRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

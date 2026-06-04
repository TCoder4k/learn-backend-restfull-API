require("dotenv").config();
const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const mysql = require("mysql2");

const webRoutes = require("./routes/web");
const app = express();
const port = process.env.PORT || 3001;
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

//connection db
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "123456",
  database: "tcoder4k",
});

//querry db
connection.query("SELECT * FROM Users ", function (err, results, fields) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("results: ", results);
  console.log("fields: ", fields);
});

//define route
app.use("/", webRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

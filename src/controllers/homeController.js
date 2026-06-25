const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};
const getAboutPage = (req, res) => {
  res.render("sample.ejs");
};
const getCreateUsertPage = (req, res) => {
  res.render("createUser.ejs");
};
const postCreateUser = (req, res) => {
  let { email, name, city } = req.body;
  console.log(">>>Check req.body", "name", name, "email", email, "city", city);

  //  INSERT INTO Users (email, name , city)
  // VALUES ('khuonglieu@gmail.com', 'khuong', 'Nghe An');
  connection.query(
    "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)",
    [email, name, city],
    (err, results) => {
      if (err) {
        console.error("Lỗi khi tạo user:", err);
        return res.status(500).send("Tạo user thất bại!");
      }
      res.send(`Tạo user thành công với ID: ${results.insertId}`);
    },
  );
};

module.exports = {
  getHomePage,
  getAboutPage,
  postCreateUser,
  getCreateUsertPage,
};

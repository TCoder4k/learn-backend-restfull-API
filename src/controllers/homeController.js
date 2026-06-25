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
const postCreateUser = async (req, res) => {
  try {
    const { email, name, city } = req.body;
    console.log(">>>Check req.body", name, email, city);

    // destructuring
    const [results] = await connection.query(
      "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)",
      [email, name, city],
    );
    res.send(`Tạo user thành công với ID: ${results.insertId}`);
  } catch (err) {
    console.error("Lỗi khi tạo user:", err);
    res.status(500).send("Tạo user thất bại!");
  }
};

module.exports = {
  getHomePage,
  getAboutPage,
  postCreateUser,
  getCreateUsertPage,
};

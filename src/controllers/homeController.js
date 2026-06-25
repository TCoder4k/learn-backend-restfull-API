const connection = require("../config/database");
//Display View Home and passing data
const getHomePage = async (req, res) => {
  try {
    const [rows] = await connection.query("SELECT * FROM Users");
    res.render("home.ejs", { users: rows });
  } catch (error) {
    console.error("Lỗi khi lấy danh sách:", error);
    res.status(500).send("Không thể lấy danh sách người dùng");
  }
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

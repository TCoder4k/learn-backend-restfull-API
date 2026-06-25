const connection = require("../config/database");
//Display View Home and passing data
const userService = require("../services/userService");

const getHomePage = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.render("home.ejs", { users });
  } catch (error) {
    console.error("Lỗi khi lấy danh sách:", error);
    res.status(500).send("Không thể lấy danh sách người dùng");
  }
};

const getCreateUsertPage = (req, res) => {
  res.render("createUser.ejs");
};

const postCreateUser = async (req, res) => {
  try {
    const { email, name, city } = req.body;
    console.log(">>>Check req.body", name, email, city);

    // destructuring
    const id = await userService.createUser(email, name, city);
    res.send(`Tạo user thành công với ID: ${id}`);
  } catch (err) {
    console.error("Lỗi khi tạo user:", err);
    res.status(500).send("Tạo user thất bại!");
  }
};

module.exports = {
  getHomePage,
  postCreateUser,
  getCreateUsertPage,
};

const connection = require("../config/database");
//Display View Home and passing data
const userService = require("../services/userService");

//get Home Page
const getHomePage = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.render("home.ejs", { users });
  } catch (error) {
    console.error("Lỗi khi lấy danh sách:", error);
    res.status(500).send("Không thể lấy danh sách người dùng");
  }
};

//get Add User Page
const getCreateUsertPage = (req, res) => {
  res.render("createUser.ejs");
};

//
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

//edit  user
const getEditUserPage = async (req, res) => {
  try {
    const userId = req.params.id;
    //Notify to service to get user has id = userId
    const user = await userService.getUserById(userId);
    res.render("editUser.ejs", { user });
  } catch (err) {
    console.error("Lỗi khi lấy user:", err);
    res.status(500).send("Không thể lấy thông tin user");
  }
};

// Xử lý update user
const postUpdateUser = async (req, res) => {
  try {
    const { id, email, name, city } = req.body;
    await userService.updateUser(id, email, name, city);
    res.redirect("/"); // quay lại danh sách
  } catch (err) {
    console.error("Lỗi khi update:", err);
    res.status(500).send("Update thất bại!");
  }
};

//delete user
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await userService.deleteUser(userId);
    res.redirect("/"); // quay lại danh sách sau khi xóa
  } catch (err) {
    console.error("Lỗi khi xóa:", err);
    res.status(500).send("Xóa thất bại!");
  }
};

//xuat module cho các file khác dùng
module.exports = {
  getHomePage,
  postCreateUser,
  getCreateUsertPage,
  getEditUserPage,
  postUpdateUser,
  deleteUser,
};

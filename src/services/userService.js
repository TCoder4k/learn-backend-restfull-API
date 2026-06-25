const connection = require("../config/database");
//get all user
const getAllUsers = async () => {
  const [rows] = await connection.query("SELECT * FROM Users");
  return rows;
};

//add user
const createUser = async (email, name, city) => {
  const [result] = await connection.query(
    "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)",
    [email, name, city],
  );
  return result.insertId;
};

//edit user
const updateUser = async (id, name, city) => {
  const [result] = await connection.query(
    "UPDATE Users SET name = ?, city = ? WHERE id = ?",
    [name, city, id],
  );
  return result.affectedRows;
};

//delete user
const deleteUser = async (id) => {
  const [result] = await connection.query("DELETE FROM Users WHERE id = ?", [
    id,
  ]);
  return result.affectedRows;
};

module.exports = { getAllUsers, createUser, updateUser, deleteUser };

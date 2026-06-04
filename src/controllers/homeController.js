const getHomePage = (req, res) => {
  //process data
  //call model
  res.send("<h1>Hello World! & TCODER4K <h1>");
};
const getAboutPage = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  getAboutPage,
};

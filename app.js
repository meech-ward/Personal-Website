const express = require("express");

const app = express();
const port = process.env.PORT || 8080; // default port 8080

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/projects", (req, res) => {
  res.render("projects");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post("/contact", (req, res) => {
  console.log("Submit Contact Form");
  res.render("contact");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
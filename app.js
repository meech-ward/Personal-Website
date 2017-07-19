const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080; // default port 8080

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
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
  console.log(req.body);
  res.render("contact");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
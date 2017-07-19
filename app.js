const express = require("express");
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');

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
  const transporter = nodeMailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'samsemailhelper@gmail.com', // Your email id
      pass: process.env.EMAIL_PASSWORD // Your password
    }
  });

  const mailOptions = {
    from: req.body.email, // sender address
    to: 'sam@meech-ward.me', // list of receivers
    subject: req.body.subject, // Subject line
    text: `from:\n${req.body.first_name} ${req.body.last_name}\n\n\nmessage:\n${req.body.message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.render("contact-message", {message: "Error sending email"});
    } else {
      console.log('Message sent: ' + info.response);
      res.render("contact-message", {message: "Your message was sent"});
    };
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
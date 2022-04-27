//jshint esversion 6 
const express = require("express");

const app = express();
//what should happend when brower get touched with my server
//request and respond(what I will get rendered on my browser)
app.get("/", (req, res) => {
  res.send("<h1>Hello, world</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact me at: minapark.com</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>It's about me</h1>");
});

app.get("/unternehmen", (req, res) => {
  res.send("<h1>Here is my unternehmen</h1>");
});

//server tuend to 3000 port
app.listen(3000, function(){
  console.log("Server started on Port 3000");
});

//installed NODEMON for reloading server automatically
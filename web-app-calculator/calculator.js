//jshint esversion 6 
const express = require("express");
//Parser from html
const bodyParser = require("body-parser");
const app = express();

//to parse data from html {extended: true} for post nested object
app.use(bodyParser.urlencoded({extended: true}));

//sendFile("index.html")-> relevant path is not valuable for cloud server, etc. 
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//to handle post request
app.post("/", (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  
  const result = num1 + num2;

  res.send("The result of the calcuation is " + result);
  
});

//BMI Calculate
app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", (req, res) => {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);
  const result = (weight/(height)^2);

  res.send("The result of the BMI is " + result);
});

//server tuend to 3000 port
app.listen(3000, function(){
  console.log("Server started on Port 3000");
});

//installed NODEMON for reloading server automatically
# Intro-to-backend
Node.js

<h2>Guild Line</h2>

Make a new folder called Calculator on your Desktop

Change Directory to this new folder

Inside the Calculator folder, create a new file called calculator.js

Set up a new NPM package
<code>$ npm init</code>

Open the project folder in VSC 

Using NPM install the express module
<code>$ npm install express</code>
Require express in projcect.js

Setup express

<code>
//jshint esversion 6 
const express = require("express");

const app = express();
//what should happend when brower get touched with my server
//request and respond(what I will get rendered on my browser)
app.get("/", (req, res) => {
  res.send("Hello, world");
});

//server tuend to 3000 port
app.listen(3000, function(){
  console.log("Server started on Port 3000");
});

</code>
Create a root route get method with app.get()

Send the words Hello World from the root route as the response

Spin up our server on port 3000 with app.listen

Run server with nodemon
<code>nodemon project.js</code>

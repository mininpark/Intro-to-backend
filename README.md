# Intro-to-backend

<h2>Web App Aplication - Calculator</h2>
1. Create a new file called bmiCalculator.html inside the Calculator folder

2. Add the HTML boilerplate and set the page title to BMI Calculator

3. Add an HTML form, this form will make a post request to our server at the route /bmicalculator. 
The form will have 2 inputs, weight and height with placeholder text that tell the user what they should type into which text box. 

4. Add a button which says “Caculate BMI”

5. Add the get and post methods for the /bmicalculator route into the same server.js file we've been using

6. Use sendFile() to send the bmiCalculator.html page as a response inside the get method.

6. Add an h1 that says BMI Calculator

7. Inside server.js , create 2 variables, one for weight and one for height. 

8. Use the BMI calculator code that wrote previously 
e.g., "Your BMI is n" where n is equal to the calculated BMI based on their weight and height inputs.

<h2>Guild Line for setting Node JS and Express JS</h2>

- Make a new folder called Calculator on your Desktop
- Change Directory to this new folder
- Inside the Calculator folder, create a new file called calculator.js
- Set up a new NPM package
    
     `$ npm init`
    
- Open the project folder in VSC
- Using NPM install the express module `$ npm install express`
- Require express in projcect.js
- Setup express

```json
//jshint esversion 6 
const express = require("express");
const app = express(); 
```

- Create a root route get method with app.get()
- Send the words Hello World from the root route as the response

```json
//what should happend when brower get touched with my server 
//request and respond(what I will get rendered on my browser) 
app.get("/", (req, res) => 
{ res.send("Hello, world"); 
});
```

- Spin up our server on port 3000 with app.listen

```json

//server tuend to 3000 port 
app.listen(3000, () => {
console.log("Server started on Port 3000"); 
});
```

- Run server with nodemon `$nodemon project.js`
Run server with nodemon
<code>nodemon project.js</code>


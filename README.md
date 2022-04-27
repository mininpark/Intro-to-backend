# Intro-to-backend
Node.js

<h2>Guild Line</h2>

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

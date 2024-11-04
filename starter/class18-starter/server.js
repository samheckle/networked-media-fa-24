// how do we know this is a npm project?
// A: 

// what command do we run to start an npm project?
// A:

// what does the below chunk of code do?
// A: 
const express = require("express"); // 
const multer = require("multer");   // 
const bodyParser = require("body-parser");  // 

// 
const urlEncodedParser = bodyParser.urlencoded({ extended: true }); 

// what is app?
// A: 
const app = express();

// what is this configuring?
// A: 
const upload = multer({
  dest: "public/uploads",
});

// what do each of these statements do?
app.use(express.static("public"));  // 
app.use(urlEncodedParser);        // 
app.set("view engine", "ejs"); // 

// what is this?
// A:
app.get("/", (request, response) => {
  response.send("server working");

  // what steps do we need in order to use a template ejs file?
  // 
  
  // make sure to comment out the res.send() code above
});

// what does the number signify?
// A: 
// how do we access this on the web?
// A: 
app.listen(6001, () => {
  console.log("server started on port 6001");
});

// secret comment for later in the demo:
// @seald-io/nedb

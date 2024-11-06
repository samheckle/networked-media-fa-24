// how do we know this is a npm project?
// A: package.json!

// what command do we run to start an npm project?
// A: npm init

// what does the below chunk of code do?
// A: imports libraries
const express = require("express"); // imports express
const multer = require("multer");   // imports multer -- handles file upload
const bodyParser = require("body-parser");  // imports body parser -- allows us to have a body in server request
const nedb = require("@seald-io/nedb")

// translates bits and bytes (literal memory and data) to something readable by the server
const urlEncodedParser = bodyParser.urlencoded({ extended: true }); 

// what is app?
// A: instance of express
const app = express();

// what is this configuring?
// A: destination for where files should be uploaded
const upload = multer({
  dest: "public/uploads",
});

let database = new nedb({
  filename: "database.txt",
  autoload: true
})

// what do each of these statements do?
app.use(express.static("public"));  // set the default folder for any static files such as assets, css, html
app.use(urlEncodedParser);        // middleware to make sure the bits and bytes can be understood by the app
app.set("view engine", "ejs"); // allows us to use ejs

// what is this?
// A: route that handles when the client makes a request to /
app.get("/", (request, response) => {
  // response.send("server working");

  // what steps do we need in order to use a template ejs file?
  // 

  let query = {}
  let sortQuery = {
    timestamp: -1 // sort in reverse chronological order
  }

  database.find(query).sort(sortQuery).exec( (err, retreivedData)=>{
    response.render('index.ejs', {posts: retreivedData})
  })

  // response.render('index.ejs', {})
  // make sure to comment out the res.send() code above
});

app.post('/upload', upload.single('theimage'), (req, res)=>{
  let currDate = new Date()
  let data = {
    text: req.body.text,
    date: currDate.toLocaleString(),
    timestamp: currDate.getTime()
  }
  if(req.file){
    data.image = "/uploads/" + req.file.filename
  }

  database.insert(data, (err, newData)=>{
    console.log(newData)
    res.redirect('/')
  })
})

// what does the number signify?
// A: port number!
// how do we access this on the web?
// A: ip address:port ex. localhost:6001 
app.listen(6001, () => {
  console.log("server started on port 6001");
});

// secret comment for later in the demo:
// @seald-io/nedb

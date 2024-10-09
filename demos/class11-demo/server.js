// express variables
const express = require("express");
const app = express();
// library variables
const parser = require("body-parser");
const encodedParser = parser.urlencoded({ extended: true });
// add multer library
const multer = require("multer");
const uploadProcessor = multer({ dest: "public/upload" });

app.use(express.static("public"));
app.use(encodedParser);

app.set("view engine", "ejs");

app.get("/", (request, response) => {
  let dataContainer = {
    posts: allPosts,
  };
  response.render("index.ejs", dataContainer);
});

let allPosts = [];
app.post("/upload", uploadProcessor.single("myImage"), (request, response) => {
  // console.log(request.body)
  // console.log(request.file.filename)

  let now = new Date();
  let post = {
    cap: request.body.caption,
    date: now.toLocaleString(),
  };
  if (request.file) {
    console.log(request.file.filename);
  }

  allPosts.push(post);

  response.redirect("/");
});

app.listen(8080, () => {
  console.log("server is running on port 8080");
});

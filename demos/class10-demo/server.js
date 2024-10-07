// added express library
const express = require("express");

const app = express();

app.set("view engine", "ejs");

// tell the express app to look at this location for public files
app.use(express.static("public"));

// route handler for the location:
// localhost:8080/
app.get("/", (request, response) => {
  response.send("test server is working");
});

app.get("/random", random);
function random(req, res) {
  res.sendFile("img.png", { root: "public" });
}

let notes = [];
app.get("/submit", (req, res) => {
  console.log(req.query.user);
  res.send(
    "thank you for submitting " +
      req.query.user +
      " <br /><a href='/guestbook.html'>back to guestbook</a>"
  );

  notes.push({
    username: req.query.user,
    message: req.query.note,
  });
});

app.get("/notes", (req, res) => {
  let allnotes = "";

  for (let i = 0; i < notes.length; i++) {
    allnotes += notes[i].username + " says " + notes[i].message + "<br />";
  }
  res.send(allnotes);
});

app.get('/template', (req, res)=>{
    const data = {
        message: [
            {visible: true, note: "hello this is data from my server"},
            {visible: true, note: "🫡"},
            {visible: false, note: "🙇🏻‍♀️"},
            {visible: true, note: "🙇🏻💖"},
        ]
    }
    // res.render("template.ejs", {})
    res.render("template.ejs", data)
})

app.listen(8080, () => {
  console.log("server has started on port 8080");
});

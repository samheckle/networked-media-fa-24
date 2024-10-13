// imports express library
const express = require('express')
// include body parser library
const parser = require('body-parser')
const encodedParser = parser.urlencoded({extended: true})
// include multer library
const multer = require('multer')
const uploadProcessor = multer({dest:'public/upload'})

// initialize express
const app = express()

// initialize public folder for assets
app.use(express.static('public'))
// initialize body parser with the app
app.use(encodedParser)

// initialize template engine to look at views folder for rendering
app.set('view engine', 'ejs')

// TODO INCLASS: SET UP ROUTES!
app.get('/', (req, res)=>{
    res.render("index.ejs", {})
})

// render the post page
app.get('/posts', (req, res)=>{

    // pass data that contains all of the posts in the server 
    // to the posts page
    let dataContainer = {
        arrayToBeSent: data
    }

    res.render('posts.ejs', dataContainer)
})

// array that stores all of the data on the server
let data = []
let postNum = 0

// new route to handle uploaded data
app.post('/upload', uploadProcessor.single('theimage'), (req, res)=>{
    
    let now = new Date()
    
    // message object that holds the data from the form
    let message = {
        text: req.body.text,
        date: now.toLocaleString(),
        postNumber: postNum
    }

    // checks to see if a file has been uplaoded
    if(req.file){
        message.imgSrc = 'upload/'+req.file.filename
    }

    postNum++

    // adding the most recent message to the top of the array
    data.unshift(message)

    res.redirect('/')
})

app.get('/delete', (req, res)=>{
    // splice
    // removes an element based on its index
    // second param of how many things to remove
    // data.splice(req.query.postId, 1)
    // console.log(req.query.postId)
    data.forEach( (d)=>{
        console.log(d.postNumber)
        console.log(req.query.postId)
        if(d.postNumber == req.query.postId){
            data.splice(req.query.postId, 1)
        }
    })
    

    res.redirect('/posts')
})

// setting up the server to start
// LAST PIECE OF CODE
// for projects going forward, it CANNOT be 80
app.listen(5555, ()=> {
    console.log('server starts')
})


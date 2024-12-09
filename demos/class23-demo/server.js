// imports express library
const express = require('express')

// initialize express
const app = express()

// initialize public folder for assets
app.use(express.static('public'))
app.set('view engine', 'ejs')

// TODO INCLASS: SET UP ROUTES!
app.get('/test', (res, req)=>{
    req.render('index.ejs')
})
// setting up the server to start
// LAST PIECE OF CODE
// for projects going forward, it CANNOT be 80
app.listen(5555, ()=> {
    console.log('server starts')
})


// import the .env file so that we can keep our password outside of our script
require("dotenv").config()

// importing the masto library to interface with our mastodon server
const m = require("masto")

const masto = m.createRestAPIClient({
    url: "https://networked-media.itp.io/", // this is our mastodon server
    accessToken: process.env.TOKEN,
})

async function makeStatus(text){

    const status = await masto.v1.statuses.create({
        status: text,
        visibility: "public"
    })

    console.log(status.url)
}

// makeStatus("hello my second status!")

function multipleStatuses(){
    // if you want to make an external req, do it here
    let emojis = ["💖!", "🫡!", "👏!"]

    let rand = Math.floor(Math.random()*emojis.length)
    
    let post = emojis[rand]

    makeStatus(post)
}
setInterval(multipleStatuses, 1000)

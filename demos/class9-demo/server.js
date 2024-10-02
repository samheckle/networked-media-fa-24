const express = require('express')

const app = express()

app.get('/', (request, response)=>{
    response.send('test server is working')
})

app.listen(6667, () => {
    console.log('server has started on port 8080')
})
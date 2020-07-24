const express = require("express")
const server = express()

// public folder
server.use(express.static("public"))


// routes

// homepage
server.get('/', (req, res) =>{
   res.sendFile(__dirname + "/views/index.html")
})
// create point
server.get('/create-point', (req, res) =>{
   res.sendFile(__dirname + "/views/create-point.html")
})
// search results
server.get('/search-results', (req, res) =>{
   res.sendFile(__dirname + "/views/search-results.html")
})




// turn on server
server.listen(3000)
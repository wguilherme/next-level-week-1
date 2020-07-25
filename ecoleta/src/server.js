const express = require("express")
const server = express()

// public folder
server.use(express.static("public"))

//template engine nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
   express: server,
   noCache: true
})


// routes

// homepage
server.get('/', (req, res) =>{
   res.render("index.html")
})
// create point
server.get('/create-point', (req, res) =>{
   res.render("create-point.html")
})
// search results
server.get('/search-results', (req, res) =>{
   res.render("search-results.html")
})




// turn on server
server.listen(3000)
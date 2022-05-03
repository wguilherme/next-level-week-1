const express = require("express")
const server = express()

// get db
const db  = require("./database/db")


// public folder
server.use(express.static("public"))

// support req.body
server.use(express.urlencoded({extended: true}))

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

// POST create points
server.post("/savepoint", (req, res) =>{

   console.log(req.body)

   // insert data into db
   const query = `
      INSERT INTO places (
         image,
         name,
         address,
         address2,
         state,
         city,
         items

      ) VALUES (?,?,?,?,?,?,?)
   `;

  const values = [
     req.body.image,
     req.body.name,
     req.body.address,
     req.body.address2,
     req.body.state,
     req.body.city,
     req.body.items
  ]

  function afterInsertData(err) {
    if (err) {
      console.log(err);

      return res.send("Erro no cadastro!")

    }

    console.log("cadastrado com sucesso");
    console.log(this);
    
    return res.render("create-point.html", {saved: true})
  }

  db.run(query, values, afterInsertData);


})


// search results
server.get('/search-results', (req, res) =>{


   db.all(`SELECT * FROM places`, function(err, row){
          if(err){
            return console.log(err)
          }
      
          console.log('Aqui estão seus registros')
          console.log(this)

          const total = row.length;

          //show html with db data
          res.render("search-results.html", {places: row, total: total})
        })


})




// turn on server
server.listen(3000)
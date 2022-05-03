// import sqlite3
const sqlite3 = require("sqlite3").verbose();

// init db object
const db = new sqlite3.Database("./src/database/database.db");

// // use db object for our operations
// db.serialize(() => {
//   // with vanilla SQL

//   // create table
//   db.run(`
//       CREATE TABLE IF NOT EXISTS places (
//          id INTEGER PRIMARY KEY AUTOINCREMENT,
//          image TEXT,
//          name TEXT,
//          address TEXT,
//          address2 TEXT,
//          state TEXT,
//          city TEXT,
//          items TEXT 
//       );
//    `);

//   // insert data

//   const query = `
//    INSERT INTO places (
//       image,
//       name,
//       address,
//       address2,
//       state,
//       city,
//       items

//    ) VALUES (?,?,?,?,?,?,?)
// `;

//   const values = [
//     "https://www.ciaresiduos.com.br/wp-content/uploads/2016/03/images-4.jpg",
//     "Colectoria",
//     "Guilherme Gemballa, Jardim América",
//     "Número 233",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Resíduos Eletrônicos, Lâmpadas",
//   ];

//   function afterInsertData(err) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("cadastrado com sucesso");
//     console.log(this);
//   }

//   db.run(query, values, afterInsertData);

//   // view data
//   db.all(`SELECT * FROM places`, function(err, row){
//     if(err){
//       return console.log(err)
//     }

//     console.log('Aqui estão seus registros')
//     console.log(this)
//   })


//   // delete data

//   db.run(`DELETE FROM places WHERE id = ?`, [?], function(err){
//     if(err){
//       return console.log(err)
//     }
//   })
// });

module.exports = db;
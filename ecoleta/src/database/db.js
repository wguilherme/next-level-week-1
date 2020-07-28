// import sqlite3
const sqlite3 = require("sqlite3").verbose();

// init db object
const db = new sqlite3.Database("./src/database/database.db");

// use db object for our operations
db.serialize(() => {
  // with vanilla SQL

  // create table
  db.run(`
      CREATE TABLE IF NOT EXISTS places (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         image TEXT,
         name TEXT,
         address TEXT,
         address2 TEXT,
         state TEXT,
         city TEXT,
         items TEXT 
      );
   `);

  // insert data

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
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fblog.castellmaq.com.br%2Fwp-content%2Fuploads%2F2018%2F04%2F184429-5-dicas-para-reaproveitar-reciclar-embalagens-e-reduzir-perdas-1280x640.jpg&imgrefurl=https%3A%2F%2Fblog.castellmaq.com.br%2F5-dicas-para-reaproveitar-reciclar-embalagens-e-reduzir-perdas%2F&tbnid=Sy8_K7odN6P4uM&vet=12ahUKEwi-xZHd3e7qAhX8BbkGHT7fAzIQMygGegUIARDeAQ..i&docid=KvBOy9wcjhs3PM&w=1280&h=640&q=recicilclar&ved=2ahUKEwi-xZHd3e7qAhX8BbkGHT7fAzIQMygGegUIARDeAQ",
    "Colectoria",
    "Guilherme Gemballa, Jardim América",
    "Número 233",
    "Santa Catarina",
    "Rio do Sul",
    "Resíduos Eletrônicos, Lâmpadas",
  ];

  function afterInsertData(err) {
    if (err) {
      return console.log(err);
    }
    console.log("cadastrado com sucesso");
    console.log(this);
  }

  db.run(query, values, afterInsertData);

  // view data

  // delete data
});

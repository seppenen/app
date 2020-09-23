const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data.db');

db.serialize( () => {


  

  sql = "CREATE TABLE hotels (" +
   "id integer PRIMARY KEY NOT NULL, " +
   "nimi text NOT NULL)" ;

   sql = "CREATE TABLE data (" +
   "id integer PRIMARY KEY NOT NULL, " +
   "mista text NOT NULL,"+
   "mihin text NOT NULL,"+
   "paiva text NOT NULL,"+
   "aika text NOT NULL,"+
   "asiakas text NOT NULL,"+
   "auto text NOT NULL,"+
   "kuljettaja text NOT NULL,"+
   "complete integer NOT NULL)" ;
   

  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Taulu tehtiin");
  })

  sql = "INSERT INTO `data` (`id`, `mista`, `mihin`, `paiva`, `aika`,  `asiakas`,`auto`, `kuljettaja`, `complete`) "+
  " VALUES (1, 'Scandic Simonkenttä', 'Lentoasema', '24.02.2020','10:00', 'Joku nimi','zhz-167','Antti Suomalainen', 0)";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });

  sql = "INSERT INTO `hotels` (`id`, `nimi`) "+
  " VALUES (1, 'Scandic Simonkenttä')";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });

  sql = "INSERT INTO `hotels` (`id`, `nimi`) "+
  " VALUES (2, 'Holyday Inn West')";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });
  
  sql = "INSERT INTO `hotels` (`id`, `nimi`) "+
  " VALUES (3, 'CROWN Plaza')";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });

  sql = "INSERT INTO `hotels` (`id`, `nimi`) "+
  " VALUES (4, 'Hilton')";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });

  sql = "INSERT INTO `data` (`id`, `mista`, `mihin`, `paiva`, `aika`, `asiakas`, `auto`, `kuljettaja`, `complete`) "+
  " VALUES (2, 'Holyday Inn West', 'Lohja', '23.02.2020','12:00','Joku nimi','zfd-117','Antti Holma', 0)";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });
  
  sql = "INSERT INTO `data` (`id`, `mista`, `mihin`, `paiva`, `aika`,`asiakas`, `auto`, `kuljettaja`, `complete`) "+
  " VALUES (3, 'Scandic Park', 'Lentoasema', '24.05.2020','15:30','Joku nimi','zhz-167','Mika Ruotsi', 1)";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });

  sql = "INSERT INTO `data` (`id`, `mista`, `mihin`, `paiva`, `aika`,`asiakas`, `auto`, `kuljettaja`, `complete`) "+
  " VALUES (4, 'Crown Plaza', 'Lentoasema', '24.05.2020','15:30','Joku nimi','zhz-167','John Doe', 1)";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });

db.each("SELECT * FROM data", (err, row) => {
  if (err) {
    return console.log(err.message);
  }
  console.log(row.id + ", " + row.mista+ ", " + row.mihin+ ", " + row.paiva+ ", " + row.aika+ ",  "+row.asiakas+ ", " + row.auto+ ", " + row.kuljettaja+ ", " + row.complete);

});



db.each("SELECT * FROM hotels", (err, row) => {
  if (err) {
    return console.log(err.message);
  }
  console.log(row.id + ", " + row.nimi);

});
})
db.close();

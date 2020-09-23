const express = require('express');
const app = express();

const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}))

var helmet = require('helmet')
app.use(helmet())

app.use(express.json());
//express.urlencoded({limit: '5mb', extended: true});

const cors = require('cors');
app.use(cors());

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('data.db');

app.listen(8081, () => {
    console.log('Node toimii localhost:8081');
});



app.get('/data/all', (req, res, next) => {
	db.all('select * from data', function (error, result) {
		if (error) throw error;

		return res.status(200).json(result);
	});
})


app.get('/data/hotels', (req, res, next) => {
	db.all('select * from hotels', function (error, result) {
		if (error) throw error;

		return res.status(200).json(result);
	});
})



app.get('/data/upcoming', (req, res, next) => {
	

	db.all('select * from data where complete = 0',  (error, result) => {
		if (error) throw error;

		// Oliko vastaus tyhjä
		if (typeof(result) == 'undefined') {
			return res.status(200).json({});
		}

		return res.status(200).json(result);
	});
})

const multer = require('multer');





app.post('/varaus/add',  (req, res, next) => {
	let data = req.body;

 
  db.run('INSERT INTO `data` ( `mista`, `mihin`, `paiva`, `aika`, `asiakas`,`auto`, `kuljettaja`, `complete`) values ( ?, ?, ?, ?, ?,?,?,?)',
	      [data.mista, data.mihin, data.paiva, data.aika, data.asiakas, data.auto, data.kuljettaja, data.complete], (error, result) => {
		if (error) throw error;

		return res.status(200).json( {count: 1} );
	});
})



app.get('/data/complete/:id', (req, res, next) => {
	let id = req.params.id;

  db.run('update data set complete = ? where id = ?', [1,id], function (error, result) {
		if (error) throw error;

		return res.status(200).json( {message: 'toimii ' +id, count: this.changes} );
	});
})

app.get('/data/uncomplete/', (req, res, next) => {
	

  db.run('update data set complete = ?', [0], function (error, result) {
		if (error) throw error;

		return res.status(200).json( {message: 'Done ' , count: this.changes} );
	});
})


app.get('/data/delete/:id', (req, res, next) => {
	let id = req.params.id;

  db.run('delete from data where id = ?', [id], function (error, result) {
		if (error) throw error;

		return res.status(200).json( {count: this.changes} );
	});
})
app.get('/data/delete/', (req, res, next) => {
	let id = req.params.id;

  db.run('delete from data ', function (error, result) {
		if (error) throw error;

		return res.status(200).json( {count: this.changes} );
	});
})


app.get('*', (req, res, next) => {
    return res.status(404).json({ error: true, message: 'Ei pyydettyä palvelua' })
})

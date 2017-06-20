var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//DATABASE passord = 1eriksen hos oyvind
//DATABASE passord = hallahalla123 hos thomas
var database = {
    host: 'localhost',
    user: 'root',
    password: '1eriksen',
    database: 'mobilbutikken'
};

/* GET produkter. */
router.get('/', function (req, res, next) {
    var connection = mysql.createConnection(database);

    connection.connect();

    connection.query('SELECT * from produkter', function (err, rows, fields) {
        if (err) throw err;
        res.render('produkter', {
            title: 'Produkter',
            produkter: rows
        });
    });

    connection.end();

});

router.get('/:id', function (req, res, next) {
    var connection = mysql.createConnection(database);

    connection.connect();

    connection.query('SELECT * from produkter', function (err, rows, fields) {
        if (err) throw err;
        res.render('produkter', {
            title: 'Produkter',
            produkter: rows
        });
    });

    connection.end();

});

// RETURNERER HELE TEMPLATE
//router.post('/sok', function (req, res, next) {
//    //console.log("req", req);
//    var query = req.body.query;
//
//    var connection = mysql.createConnection(database);
//
//    connection.connect();
//
//    connection.query("select * from produkter WHERE modell LIKE '%" + query + "%'", function (err, rows, fields) {
//        if (err) throw err;
//        console.log("QUERY ROWS", rows);
//        res.render('produkter', {
//            title: 'Produkter',
//            produkter: rows
//        });
//    });
//
//    connection.end();
//
//});

// RETURNERER HELE TEMPLATE
router.get('/sok/:query', function (req, res, next) {

    var query = req.params.query;

    var connection = mysql.createConnection(database);

    connection.connect();

    connection.query("select * from produkter WHERE modell LIKE '%" + query + "%'", function (err, rows, fields) {
        if (err) throw err;
        console.log("QUERY ROWS", rows);
        res.render('produkter', {
            title: 'Produktsok',
            produkter: rows
        });
    });

    connection.end();

});


// RETURNERER KUN PRODUKTER-JSON
//router.post('/sok', function (req, res, next) {
//    //console.log("req", req);
//    var query = req.body.query;
//
//    var connection = mysql.createConnection(database);
//
//    connection.connect();
//
//    connection.query("select * from produkter WHERE modell LIKE '%" + query + "%'", function (err, rows, fields) {
//        if (err) throw err;
//        console.log("QUERY ROWS", rows);
//        res.status("200").send({
//            produkter: rows
//        });
//    });
//
//    connection.end();
//
//});


module.exports = router;

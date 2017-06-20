var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//DATABASE
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

router.post('/sok', function (req, res, next) {
    //console.log("req", req);
    var query = req.body.query;

    var connection = mysql.createConnection(database);

    connection.connect();

    connection.query("select * from produkter WHERE modell LIKE '%" + query + "%'", function (err, rows, fields) {
        if (err) throw err;
        console.log("QUERY ROWS", rows);
        res.render('produkter', {
            title: 'Produkter',
            produkter: rows
        });
    });

    connection.end();

});

//app.post('/search', jsonparse, function (req, res, next) {
//
//    /* data som mottas fra klienten */
//    var searchWord = req.body.msg;
//
//    /* din SQL-spørring */
//    var sql = "select * from varer WHERE varenavn LIKE '%" + searchWord + "%'"; // SKRIV DIN EGEN SQL-SPØRRING HER
//    // NB! Men denne gangen må du legge til rette for søk
//    // …og for å få det til, må du bruke tekstmanipulasjon (concatenation)
//
//    /* Funksjon med SQL spørring... */
//    mysqlCnx.query(sql, function (error, results, fields) {
//        // connection.query(sql, function (error, results, fields) {
//        if (error) throw error;
//
//        // skriver resultatet ut til terminalen (ikke konsollen)
//        console.log(results[0]);
//
//        // sender resultatet til klienten
//        res.send(results);
//    });
//};

module.exports = router;

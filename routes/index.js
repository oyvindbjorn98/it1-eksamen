var express = require('express');
var router = express.Router();

/* GET forside. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Forside'
    });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET forside. */
router.get('/', function (req, res, next) {
    res.render('kontakt-oss', {
        title: 'Kontakt oss'
    });
});

module.exports = router;

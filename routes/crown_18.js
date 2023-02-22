var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('crown_18/index', { 
        title: 'TseHsun Yu', 
        ID: '410411218' 
    });
});

module.exports = router;

var express = require('express');
var router = express.Router();

let db = require('../utils/database');

/* GET home page. */
router.get('/', async function(req, res, next) {
    let results = await db.query('select * from category_18');

    console.log('category data', JSON.stringify(results.rows));

    res.render('crown2_18/index', { 
        title: 'TseHsun Yu', 
        ID: '410411218' 
    });
});

module.exports = router;

var express = require('express');
var router = express.Router();

let db = require('../utils/database');

/* GET home page. */
router.get('/', async function(req, res, next) {
    try {
        let results = await db.query(`select * from category_18`);

        console.log('category data', JSON.stringify(results.rows));

        res.render('crown2_18/index', { 
            data: results.rows,
            name: 'TseHsun Yu', 
            ID: '410411218' 
        });
    }
    catch(error) {
        console.log(error);
    }       
});

module.exports = router;

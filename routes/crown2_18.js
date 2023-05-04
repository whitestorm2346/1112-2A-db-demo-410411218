var express = require('express');
var router = express.Router();

let db = require('../utils/database');

// CREATE

// READ
router.get('/', async function(req, res, next) {
    try {
        let results = await db.query(`select * from category2_18`);

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

router.get('/shop2_18', async function(req, res, next){
    try {
        let results = await db.query(`
            SELECT C.name as category, S.id, S.name, price, S.local_url
            from category2_18 as C, shop2_18 as S
            WHERE S.cat_id = C.id 
        `);

        console.log('results', JSON.stringify(results.rows));
        // res.json(results.rows);

        res.render('crown2_18/shop2_18', { 
            data: results.rows,
            name: 'TseHsun Yu', 
            ID: '410411218' 
        });
    }
    catch(error) {
        console.log(error);
    }
});

router.get('/shop2_18/:category', async function(req, res, next){
    console.log('category', req.params.category)

    try {
        let results = await db.query(`
            SELECT C.name as category, S.id, S.name, price, S.local_url
            from category2_18 as C, shop2_18 as S
            WHERE S.cat_id = C.id 
            AND C.name = $1
        `, [req.params.category]);

        console.log('results', JSON.stringify(results.rows));
        // res.json(results.rows);

        res.render('crown2_18/shop2_18', { 
            data: results.rows,
            category: req.params.category,
            name: 'TseHsun Yu', 
            ID: '410411218' 
        });
    }
    catch(error) {
        console.log(error);
    }
});

// UPDATE

// DELETE

module.exports = router;

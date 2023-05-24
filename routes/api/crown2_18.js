var express = require('express');
var router = express.Router();

let db = require('../../utils/database');

router.get('/', async function (req, res, next) {
  try {
    let results = await db.query(`select * from category2_xx`);
    console.log('category data', JSON.stringify(results.rows));
    res.json(results.rows);
  } catch (error) {
    console.log(error);
  }
});


router.get('/shop2_18', async function (req, res, next){
  try {
    let results = await db.query(`select * from shop2_xx`);
    console.log('shop2 data', JSON.stringify(results.rows));
    res.json(results.rows);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

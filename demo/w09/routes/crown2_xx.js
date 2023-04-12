var express = require('express');
var router = express.Router();

let db = require('../utils/database');

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    let results = await db.query(`select * from category_xx`);
    console.log('category data', JSON.stringify(results.rows));
    res.render('crown2_xx/index', {
      data: results.rows,
      name: 'Hsingtai Chung',
      ID: '123456789',
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

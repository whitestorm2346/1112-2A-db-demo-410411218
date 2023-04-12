var express = require('express');
var router = express.Router();

let db = require('../utils/database');

/* GET home page. */
router.get('/overview_xx', function (req, res, next) {
  res.render('midprep_xx/overview_xx', { name: 'TseHsun Yu', ID: '410411218' });
});

/* GET overview2_18. */
router.get('/overview2_xx', async function (req, res, next) {
    try {
      // 1 % 5 = 1
      let data1 = await db.query(`
        select P.pName, P.price, P.img_url, C.name
        from product_18 as P, category_18 as C 
        where P.cat_id = C.id and P.cat_id = 1
      `);
  
      // 8 % 5 = 3
      let data2 = await db.query(`
        select P.pName, P.price, P.img_url, C.name
        from product_18 as P, category_18 as C 
        where P.cat_id = C.id and P.cat_id = 3 
      `);
  
      console.log('midprep data1', JSON.stringify(data1.rows));
      console.log('midprep data2', JSON.stringify(data2.rows));
  
      res.render('midprep_xx/overview2_xx', {
        data1: data1.rows,
        data2: data2.rows,
        name: 'TseHsun Yu',
        ID: '410411218',
      });
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;

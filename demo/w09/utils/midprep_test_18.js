const db = require('./database');

const testDB = async () => {
  try {
    let results = await db.query(`
    select P.pName, P.price, P.img_url, C.name
    from product_18 as P, category_xx as C 
    where P.cat_id = C.id
    `);
    console.log('results', JSON.stringify(results.rows));
  } catch (error) {
    console.log(error);
  }
};

testDB();

module.exports = testDB;

const db = require('./database');

const testDB = async () => {
  try {
    let data1 = await db.query(`select * from product_18 where cat_id = 1`);
    console.log('results', JSON.stringify(data1.rows));
    let data2 = await db.query(`select * from product_18 where cat_id = 3`);
    console.log('results', JSON.stringify(data2.rows));
  } catch (error) {
    console.log(error);
  }
};

// testDB();

module.exports = testDB;

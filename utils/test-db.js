const db = require('./database');

const testDB = async () => {
    try {
        let results = await db.query(`
            SELECT C.name as category, S.id, S.name, price, S.local_url
            from category2_18 as C, shop2_18 as S
            WHERE S.cat_id = C.id 
            AND C.name = 'sneakers'
        `);

        console.log('results', JSON.stringify(results.rows));
    }
    catch(error) {
        console.log(error);
    }
}

testDB();

module.exports = testDB;
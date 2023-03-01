const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: '5433', // at school
    // port: '5432', // at home
    database: 'crown_18',
    password: '0000',
});

console.log(`Postgres server running on ${pool.options.database} database`);

module.exports = pool;
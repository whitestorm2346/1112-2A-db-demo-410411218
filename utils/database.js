const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: '5432',
    database: 'crown2_18',
    password: '0000',
});

console.log('pool', pool.options.database);

module.exports = pool;
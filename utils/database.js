const { Pool } = require('pg');

let pool;

if(process.env.DATABASE === 'SUPABASE'){
    pool = new Pool({
        user: 'postgres',
        host: process.env.SUPABASE_HOST,
        port: '5432',
        database: 'postgres',
        password: process.env.PASSWORD,
    });

    console.log(`Connecting Supabase PostgreSQL running on ${pool.options.database} database`);
}
else {
    pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        // port: '5433', // at school
        port: '5432', // at home
        database: 'crown_18',
        password: '0000',
    });

    console.log(`Connecting local PostgreSQL running on ${pool.options.database} database`);
}

module.exports = pool;
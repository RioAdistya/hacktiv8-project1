if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }
const { Pool } = require('pg')

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});
console.log('Database Connection!')

module.exports = pool;

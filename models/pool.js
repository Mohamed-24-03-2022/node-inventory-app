require('dotenv').config();

const fs = require('fs');
const path = require('path');

const { Pool } = require('pg');


module.exports = new Pool({
  host: process.env.HOST,
  user: process.env.DBUSER,
  database: process.env.DB,
  password: process.env.PW,
  port: process.env.DBPORT,
  ssl: {
    ca: fs.readFileSync(path.join(__dirname, '/eu-north-1-bundle.pem'))
  }
})
  require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });
  console.log(process.env.CA_CERT);
  console.log(process.env.DB_NAME);
  const mysql = require('mysql2');
  const fs = require("fs");

  function getConnection() {
    const connection = mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      ssl: {
        ca: fs.readFileSync(process.env.CA_CERT).toString(),
        rejectUnauthorized: false,
      }
    });

    return connection;
  }

  module.exports = { getConnection };
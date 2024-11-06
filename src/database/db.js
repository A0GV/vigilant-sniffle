require('dotenv').config();
const mysql = require('mysql2');
var fs = require("fs");
const constants = require("../constants");
const {DB_HOST,DB_PORT,DB_USER,DB_PASS,DB_NAME,CA_CERT} = process.env;

/**
 * Método que configura un objeto conexión y lo regresa a quien lo solicite.
 *
 * Instrucciones:
 *
 * 1. Debes agregar en la carpeta raíz del proyecto un archivo .env donde configures variables de entorno.
 * 2. Configura la información de tu BD en las variables de entorno.
 * 3. Si estás usando Aiven, incluye tambien tu certificado SSL con una ruta válida de tu computadora.
 * 4. En la carpeta database te dejo compartido un archivo .sql para que puedas hacer restore de mi base de datos.
 */

function getConnection() {


  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    ssl: {
      ca: CA_CERT //fs.readFileSync('C:\Users\adolf\Desktop\Api_Example_IOT\ca.pem'),
    }
  });

  return connection;
}

console.log("CA:", getConnection.ssl);
module.exports = { getConnection };
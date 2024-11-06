
/*
 * LOCAL DATABASE Config
 * 
 *  Para acceder a una BD en la nube debes configurar un archivo .env
 */
require('dotenv').config();


const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbName = process.env.DB_NAME;
const serverPort = process.env.SERVER_PORT||3000; ;



/*
 * Server General Configuration
 */
const contextURL = '/iot'; //If needed, project context
const api = '/api'; // Sugested API URL

//SENSOR 1 URLS. Configurar URLS por cada sensor.
const getTemperatureSensor = '/getTemperatures'
const getTemperatureSensorByDate = '/getTemperatures'
const postTemperatureSensor = '/insertTemperature'
const getDistanciaSensor='/getDistancias'
const getDistanciaSensorByDate='/getDistanciasByDate'
const postDistanciaSensor='/insertDistancias';
const postValoresSensores='/insertValores';
const getValoresSensores='/igetValores';
//Implemented Endpoint URL


/*
 * DB Queries
 * Agregar queries por sensor.
 */
const selectTemperature = 'SELECT * FROM temps';
const selectTemperatureByDate = 'SELECT * FROM temps WHERE fecha between ? and ?';
const insertTemperature = 'INSERT INTO temps (valor) values (?)';
const selectDistancia='SELECT * FROM distancias';
const selectDistanciaByDate='SELECT * FROM distancias WHERE date between ? and ?';
const insertDistancia='INSERT INTO distancias (distancia) values (?)';

const insertValores='INSERT INTO sensores(ph, tempe, dist, boton, fotores) values (?,?,?,?,?)';
const selectValores='SELECT * FROM sensores';

//Implemented Queries



module.exports= {
   dbHost,dbPort,dbUser,dbPass,dbName,serverPort, contextURL,api,getTemperatureSensor,
   getTemperatureSensorByDate,postTemperatureSensor,selectTemperature,selectTemperatureByDate,insertTemperature, getDistanciaSensor
    ,getDistanciaSensorByDate,postDistanciaSensor,selectDistancia,selectDistanciaByDate,insertDistancia, postValoresSensores,insertValores, getValoresSensores, selectValores
}
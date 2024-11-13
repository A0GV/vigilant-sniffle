
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


/**
 * Las siguientes constantes son para la tabla con los todos los valores, la tabla t1, t2, t3
 * */


// Links tabla 1
const getValTable1='/getValoresTabla1';
const postValoresT1='/insertarValoresTabla1';
const getLastIDT1='/getLastIDt1';

// Links tabla 2
const getValoresT2='/getValoresTabla2';
const postValoresT2='/insertarValoresTabla2';
const getLastIDT2='/getLastIDt2';

// Links tabla 3
const getValoresT3='/getValoresTabla3';
const postValoresT3='/insertarValoresTabla3';

// Links tabla Final
const getValoresTF='/getValoresTablaF';
const postValoresTF='/insertarValoresTablaF';
const getValoresByDateTF='getValoresByDate';



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

const insertValores='INSERT INTO sensores(tds, tempe, dist, boton, fotores) values (?,?,?,?,?)';
const selectValores='SELECT * FROM sensores';

/*
 *Queris para cada tabla/ Sensor
 *  */

const selecValorT1='SELECT * FROM t1';
const insertValorT1='INSERT INTO t1 (boton) values (?)';
const selecValorT2='SELECT * FROM t2';
const insertValorT2='INSERT INTO t2(dist, fotores, fotoval) values (?,?,?)';
const selecValorT3='SELECT * FROM t3';
const insertValorT3='INSERT INTO t3 (tds, tempe) values (?,?)';
const selecValorTF='SELECT * FROM tf';
const insertValorTF='INSERT INTO tf (tds, tempe, dist, boton, fotores, fotoval) VALUES (?, ?, ?, ?, ?, ?)';
const selectValoresByDateTF='SELECT * FROM tf WHERE fecha between ? and ?';
/***Metodos para obtener la ultumia ID*/
const getLastIdt2='SELECT id FROM t2 ORDER BY fecha DESC LIMIT 1';
const getLastIdt1='SELECT id FROM t1 ORDER BY fecha DESC LIMIT 1';
const getLastIdtf='SELECT id FROM tf ORDER BY fecha DESC LIMIT 1';


// Sql para la prube del bucle

const SQLt1='SELECT * FROM t1 WHERE id > ? ORDER BY id ASC LIMIT 1';
const SQLt2='SELECT * FROM t2 WHERE id > ? ORDER BY id ASC LIMIT 1';
const SQLt3='SELECT * FROM t3 WHERE id > ? ORDER BY id ASC LIMIT 1';
const combinaciontrsTablas='INSERT INTO tf ( tds, tempe, dist, boton, fotores, fotoval) VALUES (?, ?, ?, ?, ?, ?)'
//Implemented Queries



module.exports= {
   dbHost,dbPort,dbUser,dbPass,dbName,serverPort, contextURL,api,getTemperatureSensor,
   getTemperatureSensorByDate,postTemperatureSensor,selectTemperature,selectTemperatureByDate,insertTemperature, getDistanciaSensor
    ,getDistanciaSensorByDate,postDistanciaSensor,selectDistancia,selectDistanciaByDate,insertDistancia, postValoresSensores,insertValores, getValoresSensores, selectValores,
    selecValorT1,insertValorT1,selecValorT2,insertValorT2, selecValorT3, insertValorT3, selecValorTF, insertValorTF, selectValoresByDateTF, getValTable1,getValoresT2, getValoresT3, getValoresTF, postValoresT1, postValoresT3, postValoresT2, postValoresTF,
    getValoresByDateTF, SQLt1, SQLt2, SQLt3, combinaciontrsTablas, getLastIdt2, getLastIDT1, getLastIDT2,getLastIdtf,getLastIdt1
}
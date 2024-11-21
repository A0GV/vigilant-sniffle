
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

/**
 * Las siguientes constantes son para la tabla con los todos los valores, la tabla t1, t2, t3
 * */


// Links tabla 1
const getValTable1='/getValoresTabla1';
const postValoresT1='/insertarValoresTabla1';
const getLastIDT1='/getLastIDt1';
const getIdAndButtonLink='/getButonId';

// Links tabla 2
const getValoresT2='/getValoresTabla2';
const postValoresT2='/insertarValoresTabla2';
const getLastIDT2='/getLastIDt2';
const ultimoFotoVal='/getLastFotoVal';
const ultimoFotoRes='/getLastFotoRes';
const lastdisDistLink='/getlastDist';
const allDistLink='/getAllDist';


// Links tabla 3
const getValoresT3='/getValoresTabla3';
const postValoresT3='/insertarValoresTabla3';
const lastTDSLink='/getlastTDS';

// Links tabla 5 (Espero y sea la ultima, monica.............................................................................................)
const getValoresT5Link='/getValoresTabla5';
const lastFotvalLink='/getlastFotovalT5';
const lastFotovalIdLink='/getlastFotovalId';
const postFotoValT5Link='/insertFotoValT5';

// Links tabla Final
const getValoresTF='/getValoresTablaF';
const postValoresTF='/insertarValoresTablaF';
const getValoresByDateTF='getValoresByDate';



//Implemented Endpoint URL


/*
 * DB Queries
 * Agregar queries por sensor.
 */


/*
 *Queris para cada tabla/ Sensor
 *  */
// Tabla 1
const selecValorT1='SELECT * FROM t1';
const insertValorT1='INSERT INTO t1 (boton) values (?)';
const getLastButtonID='SELECT id, boton FROM t1 ORDER BY fecha DESC LIMIT 1';

// Tabla 2
const selecValorT2='SELECT * FROM t2';
const insertValorT2='INSERT INTO t2(dist, fotores, fotoval) values (?,?,?)';
const getlastDistQr='SELECT dist from t2 order by fecha DESC limit 1;';
const getAllDistQr='SELECT dist,fecha from t2 order by fecha DESC;';

// Tabla 3
const selecValorT3='SELECT * FROM t3';
const insertValorT3='INSERT INTO t3 (tds, tempe) values (?,?)';
const getlastTDSQr='SELECT tds from t3 order by fecha DESC limit 1';

// Tabla 5
const getValorT5SQL='SELECT * FROM t5';
const lastFotovalSQL='SELECT fotoval FROM t5 ORDER BY fecha DESC limit 1';
const lastFotovalIDSQL='SELECT id FROM t5 ORDER BY fecha DESC limit 1';
const postFotoValT5SQL='INSERT INTO t5(fotoval) values (?)';
// Tabla final
const selecValorTF='SELECT * FROM tf';
const insertValorTF='INSERT INTO tf (tds, tempe, dist, boton, fotores, fotoval) VALUES (?, ?, ?, ?, ?, ?)';
const selectValoresByDateTF='SELECT * FROM tf WHERE fecha between ? and ?';


/***Metodos para obtener la ultumia ID*/
const getLastIdt2='SELECT id FROM t2 ORDER BY fecha DESC LIMIT 1';
const getLastIdt1='SELECT id FROM t1 ORDER BY fecha DESC LIMIT 1';
const getLastIdt3='SELECT id FROM t3 ORDER BY fecha DESC LIMIT 1';
const getLastIdtf='SELECT id FROM tf ORDER BY fecha DESC LIMIT 1';


// Sql para la prube del bucle

const SQLt1='SELECT * FROM t1 WHERE id > ? ORDER BY id ASC LIMIT 1';
const SQLt2='SELECT * FROM t2 WHERE id > ? ORDER BY id ASC LIMIT 1';
const SQLt3='SELECT * FROM t3 WHERE id > ? ORDER BY id ASC LIMIT 1';
const SQLt5='SELECT * FROM t5 WHERE id > ? ORDER BY id ASC LIMIT 1';
const combinaciontrsTablas='INSERT INTO tf ( tds, tempe, dist, boton, fotores) VALUES (?, ?, ?, ?, ?)'
//Implemented Queries

// Metodo solo para fotoval

const getlasFotoVal ='SELECT fotoval from t2 order by fecha DESC  LIMIT 1';
const getlasFotoRes ='SELECT fotores from t2 order by fecha DESC  LIMIT 1';



module.exports= {
   dbHost,dbPort,dbUser,dbPass,dbName,serverPort, contextURL,api,
    selecValorT1,insertValorT1,selecValorT2,insertValorT2, selecValorT3, insertValorT3, selecValorTF, insertValorTF, selectValoresByDateTF, getValTable1,getValoresT2, getValoresT3, getValoresTF, postValoresT1, postValoresT3, postValoresT2, postValoresTF,
    getValoresByDateTF, SQLt1, SQLt2, SQLt3, SQLt5,combinaciontrsTablas, getLastIdt2, getLastIDT1, getLastIDT2,getLastIdtf,getLastIdt1, getlasFotoVal,ultimoFotoVal,getLastButtonID, getIdAndButtonLink, getlastTDSQr, getlastDistQr,lastTDSLink, lastdisDistLink,
    ultimoFotoRes,getlasFotoRes,getLastIdt3, lastFotovalSQL, lastFotovalIDSQL, getValorT5SQL, getValoresT5Link, lastFotvalLink, lastFotovalIdLink, postFotoValT5Link, postFotoValT5SQL, getAllDistQr, allDistLink
}
const db = require("../database/db");
const mysql=require('mysql2/promise')
const constants = require("../constants")

require('dotenv').config();


/**
  * Endpoint #1. getLogTemperatura
  * 
  * Este método realiza un select de todos los registros ubicados en
  * una tabla llamada "sensor_temperatura".
  * 
  * Resultado: Obtendrá todos los registros de la tabla "sensor_temperatura" 
  * Todas las columnas están contempladas. 
  * 
  * Puedes sustituirla utilizando una proyección a tu tabla incluyendo las columnas que necesites.
  * 
  * Te servirá para crear reportes especializados si utilizas algún metodo de despliegue web para los
  * Dashboards.
  */
async function getLogTemperatura(req,res){
  try{

    var sql = constants.selectTemperature;
    var conn = db.getConnection();
    conn.connect((error)=>{
        if (error) throw error;
        conn.query(sql, (error, data, fields) => {
            if (error) {
              res.status(500);
              res.send(error.message);
            } else {
              console.log(data);
              res.json({
                data,
              });
            }
            conn.end();
        });
    });
  }catch(error){
    console.log(error)
    res.status(500)
    res.send(error)
  }
}


/**
  * Endpoint #2. getLogByDateBetween
  * 
  * Este método realiza un select de todos los registros ubicados en
  * una tabla llamada "sensor_temperatura" que se encuentren entre dos fechas.
  * 
  * Resultado: Obtendrá todos los registros de la tabla "sensor_temperatura" 
  * Todas las columnas están contempladas. Se regresa solo los valores generados entre dos fechas
  * 
  * Puedes sustituirla utilizando una proyección a tu tabla incluyendo las columnas que necesites.
  * 
  * Te servirá para crear reportes especializados si utilizas algún metodo de despliegue web para los
  * Dashboards.
  */
async function getLogByDateBetween(req,res){
  try{
    var sql = constants.selectTemperatureByDate;

    var date_one = req.body.date_one;
    var date_two = req.body.date_two;

    var conn = db.getConnection();
    conn.connect((error)=>{
        if (error) throw error;
        var params = [date_one,date_two];
        conn.execute(sql, params, (error, data, fields) => {
            if (error) {
              res.status(500);
              res.send(error.message);
            } else {
              console.log(data);
              res.json({
                data,
              });
            }
            conn.end();
        });
    });
  }catch(error){
    console.log(error)
    res.status(500)
    res.send(error)
  }
  
}



/**
  * Endpoint #3. insertLogTemperatura
  * 
  * Este método realiza un insert sobre la tabla "sensor_temperatura".
  * Deberás enviar todos los datos desde tu sensor a este endpoint.
  * 
  * Sustituye:
  *    1. El nombre de tu tabla.
  *    2. Las columnas correspondientes a tu tabla en la Base de Datos.
  *    3. Realiza el insert
  * 
  * Consideraciones:
  *   a. Solo se especificaron 2 columnas (el valor leido, y por fecha de registro se indica la fecha actual al momento.)
  *   b. Debes sustituir los valores de las columnas de tu tabla
  *   c. Si tienes un id que no se autogenere, deberás enviarlo tambien
  *  
  */
async function insertLogTemperatura(req,res){
  try{

    var sql = constants.insertTemperature;

    //el valor se recibe en el cuerpo de correo
    //cualquier dato que vaya a ir en el insert deberás guardarlo en una variable local
    var valor = req.body.distancia;

    var conn = db.getConnection();
    conn.connect((error)=>{
        if (error) throw error;

        // así mismo, cualquier dato que vaya a insertarse, deberá incluirse en
        // los valores de los parámetros del Insert
        var params = [valor];
        conn.execute(sql, params, (error, data, fields) => {
            if (error) {
              res.status(500);
              res.send(error.message);
            } else {
              console.log(data);
              res.json({
                status: 200,
                message: "Valor insertado",
                affectedRows: data.affectedRows,
              });
            }
            conn.end();
        });
    });

  }catch(error){
    console.log(error)
    res.status(500)
    res.send(error)
  }
  
}

/**Tarea #05
 * Los metodos estan implementados de la misma manera que los anteriores
 * cambiando para que use la tabla sensor_distancia
 *
* */
async function getLogDistancia(req, res) {
    try {
        var sql = constants.selectDistancia;
        var conn = db.getConnection();
        conn.connect((error) => {
            if (error) throw error;
            conn.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                } else {
                    console.log("Datos recibidos:", data); // Agregar depuración
                    res.json({ data });
                }
                conn.end();
            });
        });
    } catch (error) {
        console.log(error);
        res.status(500);
        res.send(error);
    }
}

async function getLogByDateBetweenD(req, res) {
    try {
        var sql = constants.selectDistanciaByDate;

        // Obtener las fechas del cuerpo de la solicitud
        var date_one = req.body.date_one;
        var date_two = req.body.date_two;

        var conn = db.getConnection();
        conn.connect((error) => {
            if (error) throw error;

            // Pasar las fechas como parámetros en la consulta
            var params = [date_one, date_two];
            conn.execute(sql, params, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                } else {
                    console.log(data);
                    res.json({
                        data,
                    });
                }
                conn.end();
            });
        });
    } catch (error) {
        console.log(error);
        res.status(500);
        res.send(error);
    }
}

async function insertLogDistancia(req,res){
    try{
        var conn=db.getConnection();
        var sql=constants.insertDistancia;
        conn.connect((error)=>{
            if(error) throw error;
            conn.query(sql,[req.body.distancia,req.body.fecha],(error,data,fields)=>{
                if(error){
                    res.status(500);
                    res.send(error.message);
                }else{
                    console.log(data);
                    res.json({
                        data,
                    });
                }
                conn.end();
            });
        });
    }catch(error){
        console.log(error);
        res.status(500);
        res.send(error);
    }
}

async function insertValores(req, res) {
    try {
        var conn = db.getConnection();
        // Actualizamos la consulta SQL para incluir todas las columnas menos `id_data_taked`
        var sql = constants.insertValores;

        conn.connect((error) => {
            if (error) throw error;

            // Pasamos los valores de las columnas en el orden correcto
            conn.query(sql, [
                req.body.ph,
                req.body.tempe,
                req.body.dist,
                req.body.boton,
                req.body.fotores
            ], (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                } else {
                    console.log(data);
                    res.json({
                        data,
                    });
                }
                conn.end();
            });
        });
    } catch (error) {
        console.log(error);
        res.status(500);
        res.send(error);
    }
}

async function getValores(req,res){
    try{
        var sql=constants.selectValores;
        var conn=db.getConnection();
        conn.connect((error)=>{
            if(error) throw error;
            conn.query(sql,(error,data,fields)=>{
                if(error){
                    res.status(500);
                    res.send(error.message);
                }else{
                    console.log(data);
                    res.json({
                        data,
                    });
                }
                conn.end();
            });
        });
    }catch(error){
        console.log(error);
        res.status(500);
        res.send(error);
    }
}

async function getValoresT1(req,res){
    try{
        var sql=constants.selecValorT1;
        var conn=db.getConnection();
        conn.connect((error)=>{
            if(error) throw error;
            conn.query(sql,(error,data,fields)=>{
                if(error){
                    res.status(500);
                    res.send(error.message);
                }else{
                    console.log(data);
                    res.json({
                        data,
                    });
                }
                conn.end();
            });
        });
    }catch(error){
        console.log(error);
        res.status(500);
        res.send(error);
    }
}

async function getValoresT2(req,res){
    try{
        var sql=constants.selecValorT2;
        var conn=db.getConnection();
        conn.connect((error)=>{
            if(error) throw error;
            conn.query(sql,(error,data,fields)=>{
                if(error){
                    res.status(500);
                    res.send(error.message);
                }else{
                    console.log(data);
                    res.json({
                        data,
                    });
                }
                conn.end();
            });
        });
    }catch(error){
        console.log(error);
        res.status(500);
        res.send(error);
    }
}

async function getValoresT3(req,res){
    try{
        var sql=constants.selecValorT3;
        var conn=db.getConnection();
        conn.connect((error)=>{
            if(error) throw error;
            conn.query(sql,(error,data,fields)=>{
                if(error){
                    res.status(500);
                    res.send(error.message);
                }else{
                    console.log(data);
                    res.json({
                        data,
                    });
                }
                conn.end();
            });
        });
    }catch(error){
        console.log(error);
        res.status(500);
        res.send(error);
    }
}

async function getValoresTF(req,res){
    try{
        var sql=constants.selecValorTF;
        var conn=db.getConnection();
        conn.connect((error)=>{
            if(error) throw error;
            conn.query(sql,(error,data,fields)=>{
                if(error){
                    res.status(500);
                    res.send(error.message);
                }else{
                    console.log(data);
                    res.json({
                        data,
                    });
                }
                conn.end();
            });
        });
    }catch(error){
        console.log(error);
        res.status(500);
        res.send(error);
    }
}

async function getValoresByDateTF(req,res){
    try{
        var sql = constants.selectValoresByDateTF;

        var date_one = req.body.date_one;
        var date_two = req.body.date_two;

        var conn = db.getConnection();
        conn.connect((error)=>{
            if (error) throw error;
            var params = [date_one,date_two];
            conn.execute(sql, params, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                } else {
                    console.log(data);
                    res.json({
                        data,
                    });
                }
                conn.end();
            });
        });
    }catch(error){
        console.log(error)
        res.status(500)
        res.send(error)
    }

}


async function insertValoresT1(req, res) {
    try {
        var conn = db.getConnection();
        // Actualizamos la consulta SQL para incluir todas las columnas menos `id_data_taked`
        var sql = constants.insertValorT1;

        conn.connect((error) => {
            if (error) throw error;

            // Pasamos los valores de las columnas en el orden correcto
            conn.query(sql, [req.body.boton], (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                } else {
                    console.log(data);
                    res.json({
                        data,
                    });
                }
                conn.end();
            });
        });
    } catch (error) {
        console.log(error);
        res.status(500);
        res.send(error);
    }
}


async function insertValoresT2(req, res) {
    try {
        var conn = db.getConnection();
        // Actualizamos la consulta SQL para incluir todas las columnas menos `id_data_taked`
        var sql = constants.insertValorT2;

        conn.connect((error) => {
            if (error) throw error;

            // Pasamos los valores de las columnas en el orden correcto
            conn.query(sql, [req.body.dist,
            req.body.fotores,
            req.body.fotoval], (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                } else {
                    console.log(data);
                    res.json({
                        data,
                    });
                }
                conn.end();
            });
        });
    } catch (error) {
        console.log(error);
        res.status(500);
        res.send(error);
    }
}


async function insertValoresT3(req, res) {
    try {
        var conn = db.getConnection();
        // Actualizamos la consulta SQL para incluir todas las columnas menos `id_data_taked`
        var sql = constants.insertValorT3;

        conn.connect((error) => {
            if (error) throw error;

            // Pasamos los valores de las columnas en el orden correcto
            conn.query(sql, [req.body.tds, req.body.tempe], (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                } else {
                    console.log(data);
                    res.json({
                        data,
                    });
                }
                conn.end();
            });
        });
    } catch (error) {
        console.log(error);
        res.status(500);
        res.send(error);
    }
}


async function insertValoresTF(req, res) {
    try {
        var conn = db.getConnection();
        // Actualizamos la consulta SQL para incluir todas las columnas menos `id_data_taked`
        var sql = constants.insertValorTF;

        conn.connect((error) => {
            if (error) throw error;

            // Pasamos los valores de las columnas en el orden correcto
            conn.query(sql, [req.body.ph,
                req.body.tempe,
                req.body.dist,
                req.body.boton,
                req.body.fotores,
                req.body.fotoval], (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                } else {
                    console.log(data);
                    res.json({
                        data,
                    });
                }
                conn.end();
            });
        });
    } catch (error) {
        console.log(error);
        res.status(500);
        res.send(error);
    }
}
let lastProcessedID=0;
async function checkAndInsert(req,res){
    try {
        var conn=db.getConnection();
        var sql=constants.insertValorTF;
        const [insertResult]=await conn.execute(sql,[req.body.tds,
            req.body.tempe,
            req.body.dist,
            req.body.boton,
            req.body.fotores,
            req.body.fotoval

        ]);
        console.log('Valores insertados en tf desde req.body', insertResult);
        const [rowsT1]=await conn.execute(constants.SQLt1,[lastProcessedID]);
        const [rowsT2]=await conn.execute(constants.SQLt1,[lastProcessedID]);
        const [rowsT3]=await conn.execute(constants.SQLt1,[lastProcessedID]);
        if (rowsT1.length>0 && rowsT2.length>0&& rowsT3.length>0){
            const idT1=rowsT1[0].id;
            const idT2=rowsT1[0].id;
            const idT3=rowsT1[0].id;
            if (idT1=== idT2 && idT2===idT3){
                const combinacionDeValores ={
                    id: idT1,
                    tds: rowsT3[0].tds,      // Viene de t3
                    tempe: rowsT3[0].tempe,  // Viene de t3
                    dist: rowsT2[0].dist,    // Viene de t2
                    boton: rowsT1[0].boton,  // Viene de t1
                    fotores: rowsT2[0].fotores, // Viene de t2
                    fotoval: rowsT1[0].fotoval   // Tomamos la fecha de t1
                };
                const combinacionSQL= constants.combinaciontrsTablas;
                await conn.execute(combinacionSQL,[
                    combinacionDeValores.id,
                    combinacionDeValores.tds,
                    combinacionDeValores.tempe,
                    combinacionDeValores.dist,
                    combinacionDeValores.boton,
                    combinacionDeValores.fotores,
                    combinacionDeValores.fotoval,
                ]);
                lastProcessedID=idT1;
                console.log('Nuevos valores combinadoes e insertados en tf', combinacionDeValores);
            }
        }
        res.json({message:'Valores insertados y verificacion completada'});
    } catch (error){
        console.error('Error al procesar e insertar los valores', error);
    } finally {
        if (conn) await conn.end;
    }
}
setInterval(() => checkAndInsert({ body: {} }, { json: console.log, status: () => ({ send: console.error }) }), 5000);




module.exports = {insertLogTemperatura, getLogTemperatura,getLogByDateBetween,getLogDistancia,getLogByDateBetweenD,insertLogDistancia, insertValores, getValores,
insertValoresT1, getValoresT1, insertValoresT2, getValoresT2, insertValoresT3, getValoresT3, insertValoresTF, getValoresTF, getValoresByDateTF, checkAndInsert};

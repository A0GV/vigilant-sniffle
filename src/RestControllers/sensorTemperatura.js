const db = require("../database/db");
const mysql=require('mysql2/promise')
const constants = require("../constants")

require('dotenv').config();


async function insertValoresT5METHOD(req, res) {
    try {
        var conn = db.getConnection();
        // Actualizamos la consulta SQL para incluir todas las columnas menos `id_data_taked`
        var sql = constants.postFotoValT5SQL;

        conn.connect((error) => {
            if (error) throw error;

            // Pasamos los valores de las columnas en el orden correcto
            conn.query(sql, [req.body.fotoval], (error, data, fields) => {
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
async function getValoresT5(req,res){
    try{
        var sql=constants.getValorT5SQL;
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
            conn.promise().query(sql, params, (error, data, fields) => {
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


async function getLastIdT2(req,res){
    try{
        var sql=constants.getLastIdt2;
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

async function getAllDistMETHOD(req, res) {
    try {
        var sql = constants.getAllDistQr; // Tu consulta SQL que ya selecciona 'dist' y 'fecha'
        var conn = db.getConnection();

        conn.connect((error) => {
            if (error) throw error;

            conn.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                } else {
                    console.log(data);

                    // Mapear los datos a un formato adecuado: [{dist, fecha}, {dist, fecha}, ...]
                    const result = data.map(item => ({
                        dist: item.dist,
                        fecha: item.fecha
                    }));

                    // Enviar el resultado con ambos valores
                    res.json({
                        data: result,
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


async function getLastIdT5(req,res){
    try{
        var sql=constants.lastFotovalIDSQL;
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

async function getLastftValt5Method(req,res){
    try{
        var sql=constants.lastFotovalSQL;
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
async function getLastftRes(req,res){
    try{
        var sql=constants.getlasFotoRes;
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
async function getLastButid(req,res){
    try{
        var sql=constants.getLastButtonID;
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
async function getLastTDS(req,res){
    try{
        var sql=constants.getlastTDSQr;
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
async function getLastDIST(req,res){
    try{
        var sql=constants.getlastDistQr;
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



async function getLastIdT1(req,res){
    try{
        var sql=constants.getLastIdt1;
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
            conn.query(sql, [
                req.body.dist,
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
let lastProcessedID = 0;

async function initializeLastProcessedID() {
    let conn;
    try {
        conn = db.getConnection();
        const [rows] = await conn.promise().query(constants.getLastIdtf);
        if (rows.length > 0) {
            lastProcessedID = rows[0].id;
        }
    } catch (error) {
        console.error('Error al obtener el último ID de tf:', error);
    } finally {
        if (conn) await conn.end();
    }
}

async function checkAndInsert() {
    let conn;
    try {

        conn = db.getConnection();


        // Verifica que cada consulta retorne un resultado válido antes de desestructurar
        const [rowsT1] = await conn.promise().query(constants.SQLt1, [lastProcessedID]) || [];
        const [rowsT2] = await conn.promise().query(constants.SQLt2, [lastProcessedID]) || [];
        const [rowsT3] = await conn.promise().query(constants.SQLt3, [lastProcessedID]) || [];

        if (Array.isArray(rowsT1) && Array.isArray(rowsT2) && Array.isArray(rowsT3) &&
            rowsT1.length > 0 && rowsT2.length > 0 && rowsT3.length > 0) {
            const idT1 = rowsT1[0].id;
            const idT2 = rowsT2[0].id;
            const idT3 = rowsT3[0].id;
            if (idT1 === idT2 && idT2 === idT3 ) {
                const combinacionDeValores = {
                    tds: rowsT3[0].tds,       // Viene de t3
                    tempe: rowsT3[0].tempe,   // Viene de t3
                    dist: rowsT2[0].dist,     // Viene de t2
                    boton: rowsT1[0].boton,   // Viene de t1
                    fotores: rowsT2[0].fotores, // Viene de t2
                };

                const combinacionSQL = constants.combinaciontrsTablas;
                await conn.promise().query(combinacionSQL, [
                    combinacionDeValores.tds,
                    combinacionDeValores.tempe,
                    combinacionDeValores.dist,
                    combinacionDeValores.boton,
                    combinacionDeValores.fotores,
                ]);

                lastProcessedID = idT1;
                console.log('Nuevos valores combinados e insertados en tf', combinacionDeValores);
            }
        }else
            console.log('No hay datos nuevos para insertar');

    } catch (error) {
        console.error('Error al procesar e insertar los valores', error);
    } finally {
        if (conn) await conn.end();
    }
}

// Llamada periódica a la función con datos de ejemplo
initializeLastProcessedID().then(() => {
    setInterval(checkAndInsert, 5000);
});
module.exports = {insertValoresT1, getValoresT1, insertValoresT2, getValoresT2, insertValoresT3, getValoresT3, insertValoresTF, getValoresTF, getValoresByDateTF, getLastIdT2, getLastIdT1,
    getLastButid, getLastTDS, getLastDIST,getLastftRes, getLastftValt5Method, getLastIdT5, getValoresT5, insertValoresT5METHOD, getAllDistMETHOD};

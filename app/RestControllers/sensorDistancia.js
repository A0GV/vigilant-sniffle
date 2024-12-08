// const mysql=require(".../database/db");
// const constants=require("../constants");
//
// async function getLogDistancia(req,res){
//     try{
//         var sql=constants.selectDistancia;
//         var conn=mysql.getConnection();
//         conn.connect((error)=>{
//         if(error) throw error;
//         conn.query(sql,(error,data,fields)=>{
//             if(error){
//             res.status(500);
//             res.send(error.message);
//             }else{
//             console.log(data);
//             res.json({
//                 data,
//             });
//             }
//             conn.end();
//         });
//         });
//     }catch(error){
//         console.log(error);
//         res.status(500);
//         res.send(error);
//     }
// }
//
// async function getLogByDateBetween(req,res){
//     try{
//         var sql=constants.selectDistanciaByDate;
//         var conn=mysql.getConnection();
//         conn.connect((error)=>{
//         if(error) throw error;
//         conn.query(sql,(error,data,fields)=>{
//             if(error){
//             res.status(500);
//             res.send(error.message);
//             }else{
//             console.log(data);
//             res.json({
//                 data,
//             });
//             }
//             conn.end();
//         });
//         });
//     }catch(error){
//         console.log(error);
//         res.status(500);
//         res.send(error);
//     }
// }
//
// async function insertLogDistancia(req,res){
//     try{
//         var conn=mysql.getConnection();
//         var sql=constants.insertDistancia;
//         conn.connect((error)=>{
//         if(error) throw error;
//         conn.query(sql,[req.body.distancia,req.body.fecha],(error,data,fields)=>{
//             if(error){
//             res.status(500);
//             res.send(error.message);
//             }else{
//             console.log(data);
//             res.json({
//                 data,
//             });
//             }
//             conn.end();
//         });
//         });
//     }catch(error){
//         console.log(error);
//         res.status(500);
//         res.send(error);
//     }
// }
//
// module.exports={getLogDistancia,getLogByDateBetween,insertLogDistancia};
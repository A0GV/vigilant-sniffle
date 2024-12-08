/**
     * Instrucciones:
     *
     * 1. Por cada sensor que tenga tu tabla de base de datos corresponsientes, deberás crear
     *    un archivo similar al archivo /RestControllers/sensorTemperatura.js
     * 2. Registra en el router todos los métodos disponibles en tu controlador con una URL que haga mencion a dicha acción
     *
     *
     */
require('dotenv').config();
const constants = require("./constants")
const express = require('express');
const temperaturaController = require('./RestControllers/sensorTemperatura.js');
const {getLastIdT1} = require("./RestControllers/sensorTemperatura");
const {contextURL} = require("./constants");
const router = express.Router();



router.get("/", function(req, res) {
    res.send('<html><head><title>API IoT</title></head><body><h1>Hello World!</h1><p>Link para el api temperatura:</p><a href="/DataView.html">Get Temperatures</a></body></html>');
});





    /** URLs de las tablas 1,2,3, F **/
    // Router tabla 1
    router.post(constants.contextURL + constants.api + constants.postValoresT1, temperaturaController.insertValoresT1);
    router.get(constants.contextURL + constants.api + constants.getValTable1, temperaturaController.getValoresT1);
    router.get(constants.contextURL + constants.api + constants.getLastIDT1, temperaturaController.getLastIdT1);
    router.get(constants.contextURL + constants.api + constants.getIdAndButtonLink, temperaturaController.getLastButid);

    // Router tabla 2
    router.get(constants.contextURL + constants.api + constants.getValoresT2, temperaturaController.getValoresT2);
    router.post(constants.contextURL + constants.api + constants.postValoresT2, temperaturaController.insertValoresT2);
    router.get(constants.contextURL + constants.api + constants.getLastIDT2, temperaturaController.getLastIdT2);
    router.get(constants.contextURL + constants.api + constants.ultimoFotoRes, temperaturaController.getLastftRes);
    router.get(constants.contextURL + constants.api + constants.lastdisDistLink, temperaturaController.getLastDIST);
    router.get(constants.contextURL + constants.api + constants.allDistLink, temperaturaController.getAllDistMETHOD);

    // Router tabla 3
    router.get(constants.contextURL + constants.api + constants.getValoresT3, temperaturaController.getValoresT3);
    router.post(constants.contextURL + constants.api + constants.postValoresT3, temperaturaController.insertValoresT3);
    router.get(constants.contextURL + constants.api + constants.lastTDSLink, temperaturaController.getLastTDS);
    router.get(constants.contextURL + constants.api + constants.getTempeLink, temperaturaController.getTempeMETODO);

    // ROuter tabla 5
    router.get(constants.contextURL + constants.api + constants.getValoresT5Link, temperaturaController.getValoresT5);
    router.get(constants.contextURL + constants.api + constants.lastFotvalLink, temperaturaController.getLastftValt5Method);
    router.get(constants.contextURL + constants.api + constants.lastFotovalIdLink, temperaturaController.getLastIdT5);
    router.post(constants.contextURL + constants.api + constants.postFotoValT5Link, temperaturaController.insertValoresT5METHOD);

    // Router tabla F
    router.get(constants.contextURL + constants.api + constants.getValoresTF, temperaturaController.getValoresTF);
    router.get(constants.contextURL + constants.api + constants.getValoresByDateTF, temperaturaController.getValoresByDateTF);
    router.post(constants.contextURL + constants.api + constants.postValoresTF, temperaturaController.insertValoresTF);
    //le decimos a Node que queremos hacer uso de nuestro router en otros archivos (como por ejemplo, app.js)
    module.exports = router;
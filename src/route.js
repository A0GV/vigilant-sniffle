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
const router = express.Router();



    router.get("/",function(req,res){
    res.send('<html><head><title>API IoT</title></head><body><h1>Hello World!</h1><p>Link para el api temperatura:</p><a href="http://10.22.206.198:3000/IOT/api/getTemperatures">Get Temperatures</a></body></html>');});

    /**
     * URL's que debes configurar en tu server para incluir tus endpoints que reciben peticiones para cada
     * sensor.
     *
     * Hay 3 métodos actualmente, 1 get HTTP y 2 post HTTP. En todos, el primer argumento es una url (creada de manera parametrizada con constantes)
     * El segundo método es la función js que responderá a las peticiones de dicha URL. Estas están en el archivo sensorTemperatura.js
     *
     * Para otros sensores, puedes agregar otros archivos y configurar sus url's.
     *
     */
    /** URLs de temperatura */
    router.get(constants.contextURL + constants.api + constants.getTemperatureSensor, temperaturaController.getLogTemperatura);
    router.post(constants.contextURL + constants.api + constants.getTemperatureSensorByDate, temperaturaController.getLogByDateBetween);
    router.post(constants.contextURL + constants.api + constants.postTemperatureSensor, temperaturaController.insertLogTemperatura);

    /** URLs de distancia (usando el mismo controlador) */
    router.get(constants.contextURL + constants.api + constants.getDistanciaSensor, temperaturaController.getLogDistancia);
    router.post(constants.contextURL + constants.api + constants.getDistanciaSensorByDate, temperaturaController.getLogByDateBetweenD);
    router.post(constants.contextURL + constants.api + constants.postDistanciaSensor, temperaturaController.insertLogDistancia);

    /**URLs de la tabla final que vamos a usar*/
    router.post(constants.contextURL + constants.api + constants.postValoresSensores, temperaturaController.insertValores);
    router.get(constants.contextURL + constants.api + constants.getValoresSensores, temperaturaController.getValores);

    /** URLs de las tablas 1,2,3, F **/
    // Router tabla 1
    router.post(constants.contextURL + constants.api + constants.postValoresT1, temperaturaController.insertValoresT1);
    router.get(constants.contextURL + constants.api + constants.getValTable1, temperaturaController.getValoresT1);
    // Router tabla 2
    router.get(constants.contextURL + constants.api + constants.getValoresT2, temperaturaController.getValoresT2);
    router.post(constants.contextURL + constants.api + constants.postValoresT2, temperaturaController.insertValoresT2);
    // Router tabla 3
    router.get(constants.contextURL + constants.api + constants.getValoresT3, temperaturaController.getValoresT3);
    router.post(constants.contextURL + constants.api + constants.postValoresT3, temperaturaController.insertValoresT3);

    // Router tabla F
    router.get(constants.contextURL + constants.api + constants.getValoresTF, temperaturaController.getValoresTF);
    router.get(constants.contextURL + constants.api + constants.getValoresByDateTF, temperaturaController.getValoresByDateTF);
    router.post(constants.contextURL + constants.api + constants.postValoresTF, temperaturaController.insertValoresTF);
    //le decimos a Node que queremos hacer uso de nuestro router en otros archivos (como por ejemplo, app.js)
    module.exports = router;
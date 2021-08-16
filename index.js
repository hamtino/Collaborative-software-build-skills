console.log('Corriendo código desde mi primer script!!!');
const express = require('express');
//Muestro en consola al objeto express
console.log(express);
const Logger = require('logplease');
const logger = Logger.create('utils');
logger.debug(`Hola Mundo de Node`);
logger.info(`Información de último momento, Node.js es lo más!!`);
logger.warn(`Tirando warnings como campeones`);
logger.error(`Algo no está bien!!!`);
const Logger = require('logplease');

module.exports = function saludar(nombre, apellido, saludo = ()=>{
    console.log('Luego de saludar se ejecuta el callback');
}) {
    console.log(`Hola ${nombre} ${apellido}`);
    saludo();
}

let mostrar = require('./index.js');
mostrar('Ezequiel', 'Romero');
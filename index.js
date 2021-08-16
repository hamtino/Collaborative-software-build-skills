console.log('Corriendo código desde mi primer script!!!');
const express = require('express');
//Muestro en consola al objeto express
console.log(express);
var oneLinerJoke = require('one-liner-joke');

var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke.body);

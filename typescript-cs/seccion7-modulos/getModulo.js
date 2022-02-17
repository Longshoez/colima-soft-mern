"use strict";
//Importando módulos
// import {unNombre} from './moduloA' //constante
// import {Persona} from './moduloA' //clase
// import {Humano} from './moduloA' //interfaz
// import {mostrar} from './moduloA' //función
exports.__esModule = true;
//Importar módulos desde el mismo archivo se puede simplificar con destructurización
//import {unNombre, Persona, Humano, mostrar} from './moduloA'
//Una alternativa seria traerse todas las exportaciones, ademas de darle un alias
var paquete = require("./moduloA");
console.log(paquete.unNombre);
paquete.mostrar('This is a dato');
var humano = { nombre: 'Gabriel' };
var persona = { nombre: 'Alejandro' };
console.log("Clase: " + persona.nombre);
console.log("Interfaz: " + humano.nombre);
//Cuando se exporta por default, no es necesario envolver el modulo en brackets
var moduloA_1 = require("./moduloA");
var p2 = new moduloA_1["default"]('Gabriel', 22, 'Alejandro');
console.log('clase Persona 2');
p2.mostrar();

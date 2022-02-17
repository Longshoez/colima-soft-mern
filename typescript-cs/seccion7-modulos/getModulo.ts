//Importando módulos
// import {unNombre} from './moduloA' //constante
// import {Persona} from './moduloA' //clase
// import {Humano} from './moduloA' //interfaz
// import {mostrar} from './moduloA' //función

//Importar módulos desde el mismo archivo se puede simplificar con destructurización
//import {unNombre, Persona, Humano, mostrar} from './moduloA'

//Una alternativa seria traerse todas las exportaciones, ademas de darle un alias
import * as paquete from './moduloA'

console.log(paquete.unNombre)

paquete.mostrar('This is a dato')

const humano:paquete.Humano = {nombre: 'Gabriel'}
const persona:paquete.Persona = {nombre: 'Alejandro'}

console.log("Clase: " + persona.nombre)

console.log("Interfaz: " + humano.nombre)

//Cuando se exporta por default, no es necesario envolver el modulo en brackets
import Persona2 from './moduloA'


const p2 = new Persona2('Gabriel', 22, 'Alejandro')

console.log('clase Persona 2')
p2.mostrar()
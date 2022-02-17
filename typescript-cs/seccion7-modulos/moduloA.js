"use strict";
//Los módulos son funciones reutilizables que se pueden exportar para usarse en otro archivo
exports.__esModule = true;
exports.Persona2 = exports.mostrar = exports.Persona = exports.unNombre = void 0;
exports.unNombre = 'Gabriel';
var Persona = /** @class */ (function () {
    function Persona() {
    }
    return Persona;
}());
exports.Persona = Persona;
var mostrar = function (dato) {
    console.log('Exported arrow function ' + dato);
};
exports.mostrar = mostrar;
var Persona2 = /** @class */ (function () {
    function Persona2(nombre, edad, altura) {
        this.nombre = nombre;
        this.altura = altura;
        this.edad = edad;
    }
    Persona2.prototype.mostrar = function () {
        console.log(this.nombre);
    };
    return Persona2;
}());
exports.Persona2 = Persona2;
//exporta la clase Persona2 por default
exports["default"] = Persona2;

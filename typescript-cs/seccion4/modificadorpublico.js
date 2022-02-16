//Public, Private and Protected
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//by default this class is public
var Animal = /** @class */ (function () {
    function Animal(_nombre, _tamaño) {
        this.nombre = _nombre;
        this.tamaño = _tamaño;
    }
    Animal.prototype.correr = function () {
        console.log('Woosh!!');
    };
    return Animal;
}());
var gato = new Animal('Rufus', 2);
gato.correr();
//by default this class is public
var Humano = /** @class */ (function () {
    function Humano(_nombre, _tamaño) {
        this.nombre = _nombre;
        this.tamaño = _tamaño;
    }
    Humano.prototype.correr = function () {
        console.log('Woosh!!');
    };
    return Humano;
}());
var Gabriel = new Humano('Gabriel', 150);
Gabriel.correr();
//Protected es muy parecido a privado, solo se pueden acceder desde la misma clase. 
//en el caso del protegido incluso desde las sub-clases (clases hijas).
var ClaseProtegida = /** @class */ (function () {
    function ClaseProtegida(a, b) {
        this.attr1 = a;
        this.attr2 = b;
    }
    ClaseProtegida.prototype.llamarAtributos = function () {
        console.log('Llamando atributos');
    };
    return ClaseProtegida;
}());
var SubClase = /** @class */ (function (_super) {
    __extends(SubClase, _super);
    function SubClase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubClase.prototype["super"] = function (a, b) {
    };
    return SubClase;
}(ClaseProtegida));

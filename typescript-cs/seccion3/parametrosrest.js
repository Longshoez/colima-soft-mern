//Parámetro rest recibe un array de objetos y los toma de forma secuencial en la función y al imprimirlo
//los toma como si fueran una cadena
var cartaPostres = function (postre) {
    var frutas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        frutas[_i - 1] = arguments[_i];
    }
    console.log("El postre es ".concat(postre, " y tiene ").concat(frutas));
};
cartaPostres('Banana-Shake', 'Bananas', 'Milk', 'Sugar', 'Vanilla');

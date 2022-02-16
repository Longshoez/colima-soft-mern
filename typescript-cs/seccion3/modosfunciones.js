//normal function declaration method
function mostrar(a) {
    console.log('Función 1 ' + a);
}
//arrow function method
var mostrar2 = function (a) { return console.log("Funci\u00F3n2 ".concat(a)); };
mostrar('something');
mostrar2('something');

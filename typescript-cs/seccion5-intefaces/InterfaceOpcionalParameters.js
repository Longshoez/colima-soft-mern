function MostrarPeso(persona) {
    var mediaPeso = persona.altura / persona.peso;
    if (persona.nombre)
        return "".concat(persona.nombre, " tiene una media de ").concat(mediaPeso);
    else
        return "la media de peso es ".concat(mediaPeso);
}
var persona = { altura: 2, peso: 120 };
var persona2 = { nombre: "Gabriel", altura: 185, peso: 93 };
console.log(MostrarPeso(persona));
console.log('persona 2');
console.log(MostrarPeso(persona2));

var Vehículo = /** @class */ (function () {
    //el instructor sugiere agregar un " _ " en las variables del constructor para     
    //diferencia-las de las anteriores
    function Vehículo(marca_, fecha_, puertas_, color_) {
        this.marca = marca_;
        this.fecha = fecha_;
        this.puertas = puertas_;
        this.color = color_;
    }
    Vehículo.prototype.acelerar = function () {
        console.log('Fiiiuum');
    };
    Vehículo.prototype.frenar = function () {
        console.log('Frrrrranchessco virgolini');
    };
    return Vehículo;
}());
var vh1 = new Vehículo('ford', 'hot', 7, 'negro');
console.log(vh1.marca);
vh1.acelerar();

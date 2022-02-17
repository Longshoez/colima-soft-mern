class Vehículo {
    marca: string
    fecha: string
    puertas: number
    color: string

    //el instructor sugiere agregar un " _ " en las variables del constructor para     
    //diferencia-las de las anteriores
    constructor(marca_:string, fecha_:string, puertas_:number, color_:string){
        this.marca = marca_
        this.fecha = fecha_
        this.puertas = puertas_
        this.color = color_
    }

    acelerar():void{
        console.log('Fiiiuum')
    }

    frenar():void{
        console.log('Frrrrranchessco virgolini')
    }
}

let vh1 = new Vehículo('ford', 'hot', 7, 'negro')

console.log(vh1.marca)

vh1.acelerar()
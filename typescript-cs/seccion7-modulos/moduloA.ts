//Los módulos son funciones reutilizables que se pueden exportar para usarse en otro archivo

export const unNombre:string = 'Gabriel'

export class Persona{
  nombre:string
}

export interface Humano{
  nombre:string
}

export const mostrar = (dato:string):void => {
  console.log('Exported arrow function ' + dato)
}

export class Persona2{
  nombre: string
  edad: number
  altura:number

  constructor(nombre, edad, altura){
    this.nombre = nombre
    this.altura = altura
    this.edad = edad
  }

  mostrar():void { 
    console.log(this.nombre)
  }
}
//exporta la clase Persona2 por default
export default Persona2
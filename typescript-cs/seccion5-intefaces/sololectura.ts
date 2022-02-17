interface Persona{
  nombre: string
  readonly apellido: string //la propiedad evita que se pueda cambiar el valor de la propiedad

}

let persona:Persona = {nombre: 'Gabriel', apellido: 'Rodriguez'}

persona.nombre = 'Alejandro'

persona.apellido = 'Ballesteros'

console.log(persona)
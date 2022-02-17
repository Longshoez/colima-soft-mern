interface Persona{
  altura:number
  peso: number
  nombre?: string //Al agregar el interrogante después del nombre de la variable hacemos que la propiedad sea opcional

}

function MostrarPeso(persona:Persona):string {
  let mediaPeso:number = persona.altura / persona.peso
  if (persona.nombre) 
    return `${persona.nombre} tiene una media de ${mediaPeso}`
  else
    return `la media de peso es ${mediaPeso}`
}

let persona = {altura: 2, peso: 120}

let persona2 = {nombre: "Gabriel", altura: 185, peso: 93}

console.log(MostrarPeso(persona))
console.log('persona 2')
console.log(MostrarPeso(persona2))


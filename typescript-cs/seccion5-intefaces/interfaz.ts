//Define una serie de atributos y propiedades
interface Persona {  
  //atributos
  nombre: string
  apellido: string
}

function caminar(persona:Persona):void {
  console.log('persona: ' + persona.nombre + ' esta caminando ')
}

//Usando interfaces se pueden añadir mas atributos sin la necesidad de tenerlos declarados en la interfaz
//no obstante al hacer una instancia de la interfaz, siempre deben llevar los atributos declarados en la misma 
let nueva_persona = {nombre:'Gabriel', apellido: 'Ballesteros', edad: 22}
console.log(nueva_persona.edad)

caminar(nueva_persona)


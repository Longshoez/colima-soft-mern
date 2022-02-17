
function mostrar(dato: string):string{
  return dato 
}

console.log(mostrar('yo'))

// T es por convención, representa un tipo de dato genérico, que podría ser cualquier cosa
// De igual forma se declara en el tipo de dato recibido en parámetros y en el tipo de la función
//Incluso podría recibir una Interfaz, el parseo lo hace de forma automática
function mostrarGenérica<T>(dato:T):T{
  return dato
}

//Ahora podemos acceder a las funciones de cada tipo de variable 
//sin necesidad de especificar el tipo de variable, valga la redundancia
const aNumber = mostrarGenérica(99)
aNumber.toString

const aString = mostrarGenérica('soy')
aString.charAt(0)

console.log(mostrarGenérica('es genial'))
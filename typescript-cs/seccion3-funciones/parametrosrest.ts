//Parámetro rest recibe un array de objetos y los toma de forma secuencial en la función y al imprimirlo
//los toma como si fueran una cadena
const cartaPostres = (postre:string, ...frutas:string[]):void => {
    console.log(`El postre es ${postre} y tiene ${frutas}`)
}

cartaPostres('Banana-Shake', 'Bananas', 'Milk', 'Sugar', 'Vanilla')
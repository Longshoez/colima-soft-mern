//Parámetros por defecto 

const mostrar = (nombre:string, apellido:string, edad:number = 23) => {
    return `The name is ${nombre} and hist last name is ${apellido}, but hes ${edad} old, so he can get in`
}

//Aunque no escriba el parámetro de edad, la función al tenerlo establecido por defecto lo imprime de igual forma
console.log(mostrar('Gabriel', 'Ballesteros'))

//en caso de que si le pase un parámetro de edad, se sobre escribirá el valor de la función
console.log(mostrar('Gabriel', 'Ballesteros', 22))
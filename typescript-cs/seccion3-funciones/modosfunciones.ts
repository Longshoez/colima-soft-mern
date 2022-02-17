//normal function declaration method
function mostrar(a: string ): void {
    console.log('Función 1 ' + a)
}

//arrow function method
const mostrar2 = (a: string):void => console.log(`Función2 ${a}`)

mostrar('something')
mostrar2('something')


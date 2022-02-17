class Padre{
    nombre:string
    edad:number

    constructor(_nombre:string, _edad:number){
        this.nombre = _nombre
        this.edad = _edad        
    }

    presentarse(){
        console.log('hola, mi nombre es ' , this.nombre)
    }
}

//heredar las propiedades de la clase padre
class Hijo extends Padre{    
    apellido: string

    constructor(nombre: string, edad:number, apellido:string){
        super(nombre, edad) //llama al constructor de la clase padre, aquí enviaremos los parámetros de la clase padre
        this.apellido = apellido
    }

    presentarseConNombreCompleto(){
        console.log(this.nombre + " " + this.apellido)
    }
}

const hijo = new Hijo('Gabriel', 22, 'Alejandro')

hijo.presentarseConNombreCompleto()
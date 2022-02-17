//Public, Private and Protected

//by default this class is public
class Animal{
    nombre:string
    tamaño:number

    constructor(_nombre:string, _tamaño:number){
        this.nombre = _nombre
        this.tamaño = _tamaño
    }

    correr():void{
        console.log('Woosh!!')
    }
}

const gato = new Animal('Rufus', 2)

gato.correr()

//by default this class is public
class Humano{

    //private hace que estos datos estén disponibles solo dentro de la misma clase
    private nombre:string
    private tamaño:number

    constructor(_nombre:string, _tamaño:number){
        this.nombre = _nombre
        this.tamaño = _tamaño
    }

    correr():void{
        console.log('Woosh!!')
    }
}

const Gabriel = new Humano('Gabriel', 150)
Gabriel.correr()


//Protected es muy parecido a privado, solo se pueden acceder desde la misma clase. 
//en el caso del protegido incluso desde las sub-clases (clases hijas).

class ClaseProtegida{
    protected attr1:string
    protected attr2:string

    constructor(a: string, b:string){
        this.attr1 = a
        this.attr2 = b
    }

    llamarAtributos():void{
        console.log('Llamando atributos')
    }
}

class SubClase extends ClaseProtegida{
    super(a, b){
        
    }
}
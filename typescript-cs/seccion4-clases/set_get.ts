class setGet{
    Atributo: string
    
    constructor(a:string){
        this.Atributo = a
    }

    Set(a: string){
        this.Atributo = a
    }

    Get():string{
        return this.Atributo
    }
}

const obj = new setGet('YEAH')

// dont work -> obj.Set = 'Hey
obj.Set('Yeah')

console.log(obj.Get())
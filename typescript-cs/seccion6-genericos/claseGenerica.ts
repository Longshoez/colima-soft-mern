class Persona<T>{
  nombre:string
  edad:T //toma cualquier tipo de dato
  
  mostrar(p:T):T {
    return p
  }

  mostrarArr:(p:T) => T
}


const obj = new Persona()

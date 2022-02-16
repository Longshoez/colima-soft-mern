abstract class SuperClass{
  
  //Se definen los métodos pero la función de los mismos puede sobre escribirse, 
  //podría decirse que son plantillas para métodos futuros
  
  abstract Method1():void
  
  abstract Saludar():void


}

class ClaseHijo extends SuperClass{

  constructor(){
    super()
  }

  //Hay que implementar el método1 a fuerzas en la clase hija
  Method1(): void {
      console.log('Lanzando el método 1')
  }

  Saludar(): void {
      console.log('Hola')
  }

}
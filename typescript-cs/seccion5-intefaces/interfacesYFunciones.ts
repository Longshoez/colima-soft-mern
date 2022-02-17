interface General {
  //asi se define la interfaz general
  (nombre:string, apellido:string, edad:number):void

}


let funcGeneralUno:General

funcGeneralUno = function(nombre: string, apellido:string, edad:number):void{
  console.log(`${nombre} ${apellido} tiene ${edad} años`)  
}

funcGeneralUno('Gabriel', 'Alejandro', 22)


//En las interfaces a diferencia de las clases, el tipo Genérico debe tener un valor por defecto
//por lo tanto las interfaces no son 100% genéricas
interface PersonaInterfaz<T=string>{
  nombre: T
}

let Objeto:PersonaInterfaz<string> = {nombre:'Gabriel'}

let num:PersonaInterfaz<number> = {nombre: 10}



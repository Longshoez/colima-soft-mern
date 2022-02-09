import '@testing-library/jest-dom'
import {getSaludo} from '../../base/02-template-string'

describe('pruebas en el archivo template-string.js', () => {
    test('getSaludo() debe  retorrnar hola mate', () => {
        const nombre = "Gabriel"
        const saludo = getSaludo(nombre)
        expect(saludo).toBe('Hola ' + nombre)
    })

    test('getSaludo debe retornar "Hola Carlos" si no hay argumento en el nombre', () =>{
        //Arrange
        const  nombre = ""
        //Act
        const saludo = getSaludo()
        //Assert
        expect(saludo).toBe('Hola Carlos')
    })
})
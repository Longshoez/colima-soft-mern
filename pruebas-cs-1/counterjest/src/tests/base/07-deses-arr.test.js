import { retornaArreglo } from "../../base/07-deses-arr";

describe('pruebas en desestructuración', () => {
    test('debe de retornar un string y un numero', () => {
        //Arrange

        const arr = retornaArreglo()
        //(Arreglo desestructurrizado)
        const [letras, numeros] = retornaArreglo()

        //Act
        expect(arr).toEqual(['ABC', 123])

        
        expect(letras).toBe('ABC')
        expect(typeof letras).toBe('string')
        expect(numeros).toBe(123)
        expect(typeof numeros).toBe('number')

        //Assert


    });
});
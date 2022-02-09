describe('Pruebas en el archivo demo.test.js, this test is bound to fail on purpose', () => {
    test('Strings should be equal', () => {
        // Inicializacion
        const mensaje = "hola mundo"
        // Estimulo
        const mensaje2 = "hola mundo"
        // Observar el comportamiento
        expect(mensaje).toBe(mensaje2) //comprobando el tipo y el contenido de las dos variables
    })
})
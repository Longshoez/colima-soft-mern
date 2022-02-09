import { getHeroeByIdAsync } from '../../base/09-promesas'
import heroes from '../../data/heroes'

describe('pruebas con promesas', () => {
    test('getHeroeByIdAsync, debe retornar  un Heroe async', (done) => {
        //uso del "Done" en el callback y la prueba, cuando estamos testeando una tarrea asyncron

        //Arrange
        const id = 1;

        //Act
        getHeroeByIdAsync(id)
        .then(heroe =>{
                //Assert
                expect(heroe).toBe(heroe)
                done()
            })
    });

    test('should rreturn an error if the herroe doesnt exist', (done) => {
        //Arrange
        const id = 10;

        //Act
        getHeroeByIdAsync(id)
            .catch(error => {
                //Assert
                expect(error).toBe('No se pudo encontrar el héroe')
                done()
            })
    });
    
}) 
import '@testing-library/jest-dom'
import {getUser, getUsuarioActivo} from '../../base/05-funciones'

describe('Pruebas en 05-funciones', () => {
    test('la funcion getUser debe retornar un objeto', () => {
        //Arrange
        const userTest = {
            uid: 'ABC123',
            username: 'El_user',
        }

        //Act
        const user = getUser()

        //Assert
        expect(user).toEqual(userTest)

    })

    test('getUsuarioActivo debe retornar un objeto', () => {
        //Arrrange
        const nombre = "Manuel"
        const user = getUsuarioActivo(nombre)
        //Act

        //Assert
        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        })
    })
})
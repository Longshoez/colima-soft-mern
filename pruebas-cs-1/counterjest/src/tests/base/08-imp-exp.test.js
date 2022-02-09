import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp'
import heroes from '../../data/heroes'

describe('Pruebas  en funciones archivo heroes.js', () => {
    test('Debe retornar un heroe por cada id', () => {

        //arrange
        const id = 1
        const heroe = getHeroeById(id)

        //Act
        const heroeData = heroes.find(h => h.id === id)

        //Asset
        expect(heroe).toEqual(heroeData)
    })

    test('Debe retornar undefined si heroe no existe', () => {

        //arrange
        const id = 10 //no existe heroe con el id 10
        
        //Act
        const heroe = getHeroeById(id)

        //Asset
        expect(heroe).toEqual(undefined)
    })

    test('Retornar un arreglo con  los heroes de DC', () => {
        //arrange
        const owner = 'DC'
        
        //act
        const heroes = getHeroeById(owner)

        //we use "heroes &&" bc without it wont work right, something to do with the heroes object being null until we let the function get executed.
        const heroesData = heroes && heroes.filter(h => h.owner === owner)

        //assert
        expect(heroes).toEqual(heroesData)
    })

    test('debe retorna un arreglo con los hearoes de Marvel', () => {
        //Arrange
        const owner = 'Marvel'
        //act
        const heroes = getHeroesByOwner(owner)
        //Asser
        expect( heroes.length ).toBe(2)
    });
}) 
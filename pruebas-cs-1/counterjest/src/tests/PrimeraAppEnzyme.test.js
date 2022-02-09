import React from 'react';
import {render} from '@testing-library/react'
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme'

describe('Pruebas en el componente <PrimeraApp /> usando Enzyme', () => {
    test('should show the <PrimeraApp/> correctamente', () => {
      //Arrange
      const saludo = "Hi there Gabriel"
      
      //Act
      const wrapper = shallow(<PrimeraApp saludo={saludo}/>)
      expect(wrapper).toMatchSnapshot();

      //Assert
    });


    test('must show the subtitle sent by props', () => {
      //Arrange
      const saludo = "Hi there Gabriel"
      const subtitulo = "yo yo yo"
      
      //Act
      const wrapper = shallow(
        <PrimeraApp 
        saludo={saludo} 
        subtitulo={subtitulo}
        />
        )
        const subTexto = wrapper.find('h6').text()

      //Assert
      expect(subTexto).toBe(subTexto)

    });    
})
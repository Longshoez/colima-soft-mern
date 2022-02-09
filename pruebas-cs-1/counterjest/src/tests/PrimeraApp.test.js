import React from 'react';
import {render} from '@testing-library/react'
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en el componente <PrimeraApp />', () => {
    test('should show the messaeg "Hi there Gabriel"', () => {
      //Arrange
      const saludo ='Hi there Gabriel'  
      
      //Act

    //   const wrapper = render( <PrimeraApp saludo={saludo}/> )
    //   expect(wrapper.getByText(saludo)).toBeInTheDocument()

        const {getByText} = render(<PrimeraApp saludo={saludo}/> )
        expect( getByText(saludo) ).toBeInTheDocument()

      //Assert
    });
    
})
import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';


describe('Testeando el counter en el componente App', () => {

    //We declare our component here so we can use it multiple times through the test withouot needing to import it each time
    let wrapper = shallow(<App/>)

    //Reset the component
    beforeEach(() => {
        wrapper = shallow(<App/>)
    })

    test('should first show the counter app and its default value', () => {
        
        //Arrrange
        const wrapper = shallow(
            <App/>
        )
        //Act
        //Assert
        expect(wrapper).toMatchSnapshot();
        
    });

    test('should show 100 as a default value', () => {
        //Arrrange
        const value = 100;
        const wrapper = shallow(
            <App value={value}/>
        )

        //Act
        const Counter = wrapper.find('h6').text().trim() //trim remvoes the spaces

        //Assert
        expect(Counter).toBe('100');
    });

    test('should increase when clicking the +1 button', () => {
        //Arrrange
        //Wrapper with componoent defined in the upper lvl scope

        
        //Act
        const button1 = wrapper.find('button').at(0).simulate('click')
        console.log(button1.html());
        
        //Assert
        const Counter = wrapper.find('h6').text().trim()
        expect(Counter).toBe('11')

    });

    test('should decrease when clicking the +1 button', () => {
        //Arrrange
        //Wrapper with componoent defined in the upper lvl scope

        //Act
        const button2 = wrapper.find('button').at(1).simulate('click')
        console.log(button2.html());

        
        //Assert
        const Counter = wrapper.find('h6').text().trim();
        expect(Counter).toBe('9')

    });

    test('should reset the counter to its default value', () => {
        //Arrrange
        const value = 105;

        const wrapper = shallow(
            <App value={value}/>
        )
        
        //Act   
        const resetButton = wrapper.find('h6').simulate('click')
        console.log(resetButton.html());

        
        //Assert
        const Counter = wrapper.find('h6').text().trim() //trim remvoes the spaces
        expect(Counter).toBe(`${value}`);
    });
    

    
})
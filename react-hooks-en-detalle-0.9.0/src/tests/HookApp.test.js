import { shallow } from 'enzyme';
import React from 'react'
import {HookApp} from '../HookApp'

describe('Pruebas en HookAppp', () => {
  
  test('show component correctly', () => {

    const wrapper = shallow(<HookApp />)

    expect(wrapper).toMatchSnapshot()


  });
});

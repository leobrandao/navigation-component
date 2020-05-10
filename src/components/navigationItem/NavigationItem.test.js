import React from 'react';
import { shallow } from 'enzyme'
import NavigationItem from './NavigationItem';


describe('<NavigationItem />', () => {
    it('should render navigation item', ()=> {
        const wrapper = shallow( <NavigationItem 
            id='test'
            handleClick={jest.fn()}
        /> )
        console.log(wrapper.debug())
    })
})
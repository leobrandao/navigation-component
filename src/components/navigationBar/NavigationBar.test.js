import React from 'react';
import { shallow } from 'enzyme'

import NavigationBar from './NavigationBar';
import navigationData from '../../utils/navigation.json';

describe('<NavigationBar />', () => {
    it('should render NavigationBar', () => {
        const cities = [navigationData.cities[0]];
        const wrapper = shallow(<NavigationBar navigationData={cities} />)
        expect( wrapper.find('NavigationItem') ).toHaveLength(1);
    })
})
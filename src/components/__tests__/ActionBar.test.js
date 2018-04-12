import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ActionBar } from '../ActionBar';
Enzyme.configure({adapter: new Adapter()});

describe('<ActionBar', ()=> {
    const component = shallow(<ActionBar/>);

    it('should have two buttons', () => {
        expect(component.find('button')).toHaveLength(2);
    })
});



import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CounterList } from '../CounterList';

Enzyme.configure({ adapter : new Adapter()});

describe('<CounterList/>', () => {
    const counters = [0, 0, 0];
    const component = shallow(<CounterList counters={counters} test={'test2'}/>);
    it('should take a prop of counters', () => {
        
    });
});
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Counter } from '../Counter';

Enzyme.configure({ adapter: new Adapter()});

describe('<Counter/>', () => {

    const component = shallow(<Counter/>);

    it('should have one h3', () => {
        expect(component.find('h3')).toHaveLength(1);
    })

    it('should have two buttons', () => {
        expect(component.find('button')).toHaveLength(2);
    })

    it('should have + for the first button', () => {
        expect(component.find('button').at(0).text()).toEqual('+');
    })

    it('should have - for the second button', () => {
        expect(component.find('button').at(1).text()).toEqual('-');
    })

    // it('should call a function when + or - button is clicked', () => {
    //     const incrementCounterValue = jest.fn();
    //     component.find('button').at(0).simulate('click');
    //     // expect(incrementCounterValue).toBeCalled();
    //     expect(incrementCounterValue).toBeCalled();
    // })
})
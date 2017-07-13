import React from 'react';
import { shallow } from 'enzyme';
import Input from '../input';

let component;

describe('<Input />', () => {
    it('renders an input component without errors', () => {
        component = shallow(<Input value={'test'} />);
        expect(component.node).toBeDefined();
    });

    it('sets the value of the input', () => {
        const testValue = 'test';
        component = shallow(<Input value={testValue} />);

        expect(component.find('input')).toHaveProp('value', testValue);
    });
});

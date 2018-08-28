import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    const welcome = <h1>React Basic Tests</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
});

import ErrorBoundary from './components/ErrorBoundary';
import React from 'react';
import { shallow } from 'enzyme';



it("renders a component", ()=>{
    const wrapper = shallow(<ErrorBoundary/>);
    expect(wrapper).toMatchSnapshot();
});

it("renders one component", ()=>{
    const wrapper = shallow(<ErrorBoundary />);
    expect(wrapper.length).toEqual(1);
});




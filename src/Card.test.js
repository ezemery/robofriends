import React from 'react';
import { shallow } from 'enzyme';
import Card from './components/Card';



it("renders a component", ()=>{
    const wrapper = shallow(<Card name={"Eze"} email={"emereuwaonueze@gmail.com"} id={1}/>);
    expect(wrapper).toMatchSnapshot();
});

it("renders one component", ()=>{
    const wrapper = shallow(<Card />);
    expect(wrapper.length).toEqual(1);
});


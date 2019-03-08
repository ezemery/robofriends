import React from 'react';
import { shallow } from 'enzyme';
import CardList from './components/CardList';



it("renders a component", ()=>{
    const mockRobots = [{
        id: 1,
        username: "eze09",
        name: "eze",
        email:"emery@gmail.com"
    }];
    const wrapper = shallow(<CardList robots={mockRobots}/>);
    expect(wrapper).toMatchSnapshot();
});

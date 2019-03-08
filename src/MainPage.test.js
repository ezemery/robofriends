import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './components/MainPage';


let wrapper;

beforeEach(()=>{
const mockProp = {
    onSearchChange: jest.fn(),
    onRequestRobot: jest.fn(),
    robots:[],
    searchfield:"",
    isPending:false
}

    wrapper = shallow(<MainPage {...mockProp}/>);
});

it("renders without crashing", () =>{
    expect(wrapper).toMatchSnapshot();
});

it("should filter correctly", () => {
    const mockProp2 = {
        onRequestRobot: jest.fn(),
        robots:[
            {
                id:3,
                name:"john",
                email:"john@gmail.com"
            }
        ],
        searchfield:"o",
        isPending:false
    }
    const wrapper2 = shallow(<MainPage {...mockProp2}/>)
    expect(wrapper2.instance().filteredRobots()).toEqual([
        {
            id:3,
            name:"john",
            email:"john@gmail.com"
        }
    ]);
});

it("should show an empty array correctly", () => {
    const mockProp2 = {
        onRequestRobot: jest.fn(),
        robots:[
            {
                id:3,
                name:"john",
                email:"john@gmail.com"
            }
        ],
        searchfield:"a",
        isPending:false
    }
    const wrapper2 = shallow(<MainPage {...mockProp2}/>)
    expect(wrapper2.instance().filteredRobots()).toEqual([]);
});
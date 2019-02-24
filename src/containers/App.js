import React, { Component } from 'react';
import {connect}  from 'react-redux';
import { changeSearchField, requestRobots} from '../action';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

const mapStateToProp = (state) => {
  return {
    searchfield: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error

  }

}

const mapDispatchToProp = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(changeSearchField(event.target.value)),
    onRequestRobot : () => dispatch(requestRobots())
  }
}


class App extends Component {

  componentDidMount() {
   this.props.onRequestRobot();
  }

  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value })
  // }

  render() {
    const {searchfield, onSearchChange, robots, isPending} = this.props;
    const filteredRobots = robots.filter( robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProp, mapDispatchToProp)(App);
//export default App;
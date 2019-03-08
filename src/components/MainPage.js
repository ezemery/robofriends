import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';


export default class MainPage extends Component {

  componentDidMount() {
   this.props.onRequestRobot();
  }
 
  filteredRobots = () =>{
    return this.props.robots.filter( robot => {
        return robot.name.toLowerCase().includes(this.props.searchfield.toLowerCase());
      })
  }

  render() {
    const {onSearchChange, robots, isPending} = this.props; 
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <ErrorBoundary>
            <Scroll>
              <CardList robots={this.filteredRobots(robots)} />
            </Scroll>
          </ErrorBoundary>
         
        </div>
      );
  }
}
import React, { Component } from 'react';
import {connect}  from 'react-redux';
import { changeSearchField, requestRobots} from '../action';
import './App.css';
import MainPage from '../components/MainPage';

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
  render() {
   return <MainPage {...this.props} ></MainPage>
  }
}

export default connect(mapStateToProp, mapDispatchToProp)(App);
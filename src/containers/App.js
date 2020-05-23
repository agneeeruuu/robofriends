import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import { robots } from '../components/robots';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { setSearchField, requestRobots } from '../action';


const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

// smart component: has states, and has this class synta as below
class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: []
  //   }
  // } 

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response=> response.json())
    // .then(users => this.setState({ robots: robots }));
    this.props.onRequestRobots();
  }

  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value });
  // }

  render() {
    // const { robots } = this.state;
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filterRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ? 
      <h1 className = 'tc'>Loading...</h1> :
      (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={ onSearchChange } />
        <Scroll>
          <ErrorBoundary>
            <CardList robots = { filterRobots } />
          </ErrorBoundary>
        </Scroll>
      </div>
      );
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
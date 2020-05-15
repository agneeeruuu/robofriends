import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import { robots } from '../components/robots';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';


// smart component: has states, and has this class synta as below
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  } 

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({ robots: robots }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { robots, searchfield } = this.state;
    const filterRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ? 
      <h1 className = 'tc'>Loading...</h1> :
      (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={ this.onSearchChange } />
        <Scroll>
          <ErrorBoundary>
            <CardList robots = { filterRobots } />
          </ErrorBoundary>
        </Scroll>
      </div>
      );
    
  }
}

export default App;
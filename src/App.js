import React, { Component } from 'react';
import { SearchBar } from './components/search-bar/search-bar'
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1  className='App-name'>Outdoors Sports</h1>
        <SearchBar className='search-bar'/>
      </div>
    );
  }
}

export default App;

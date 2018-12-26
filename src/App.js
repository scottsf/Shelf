import React, { Component } from 'react';
import './App.scss';
import Header from './components/header/Header.js';
import axios from 'axios';
import Router from './router.js';
import './styles/style.scss';

class App extends Component {

  render() {
    return (
        <div className="App">
          <Header/>
          <Router />
        </div>
    );
  }
}

export default App;

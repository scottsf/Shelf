import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard.js';
import Form from './components/form/Form.js';
import Header from './components/header/Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Dashboard/>
        <Form/>
      </div>
    );
  }
}

export default App;

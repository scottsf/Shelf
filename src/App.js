import React, { Component } from 'react';
import './App.scss';
import Dashboard from './components/dashboard/Dashboard.js';
import Form from './components/form/Form.js';
import Header from './components/header/Header.js';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
      selected: {}
    }
    this.getInventory = this.getInventory.bind(this);
  }

  async componentDidMount() {
    const inventory = await axios.get('/api/inventory')
    this.setState({inventory: inventory.data})
  }

  getInventory () {
    console.log('getInventory invoked!')
    axios.get('/api/inventory')
      .then(inventory => this.setState({inventory: inventory.data}))
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Dashboard getInventory={this.getInventory} inventory={this.state.inventory}/>
        <Form invokeGetInventory={this.getInventory} selected={this.state.selected}/>
      </div>
    );
  }
}

export default App;

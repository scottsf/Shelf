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
      inventory: []
    }
  }

  componentDidMount() {
    axios.get('/api/inventory')
      .then(res => this.setState({inventory: res.data}))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Dashboard inventory={this.state.inventory}/>
        <Form/>
      </div>
    );
  }
}

export default App;

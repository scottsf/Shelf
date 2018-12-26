import React, {Component} from 'react';
import Product from '../product/Product.js';
import './dashboard.scss';
import axios from 'axios';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
    }
    this.getInventory = this.getInventory.bind(this);
  }


  componentDidMount() {
    this.getInventory();
  }

  getInventory () {
    console.log('getInventory invoked!')
    axios.get('/api/inventory')
      .then(inventory => this.setState({inventory: inventory.data}))
  }

  removeProduct = (id) => {
    axios.delete(`/api/product/${id}`)
      .then(res => {
        this.getInventory();
      })
      .then(error => {
        console.log(error)
      })
  }

  render() {
    console.log(this.state.inventory)
    let inventoryList = this.state.inventory.map((item, i) => (
      <Product item={item} key={i}
        selectProduct={(id) => this.props.selectProduct(id)}
        invokeRemoveProduct={(id) => this.removeProduct(id)} id={item.id}/>
    ))

    return (
      <div className='dashboard'>
        {inventoryList}
      </div>
    )
  }
}

export default Dashboard;

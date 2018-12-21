import React, {Component} from 'react';
import Product from '../product/Product.js';
import './dashboard.scss';
import axios from 'axios';

class Dashboard extends Component {

  removeProduct = (id) => {
    axios.delete(`/api/product/${id}`)
      .then(res => {
        this.props.invokeGetInventory();
      })
  }

  render() {
    console.log(this.props.inventoryList)
    let inventoryList = this.props.inventory.map((item, i) => (
      <Product item={item} key={i} invokeRemoveProduct={this.removeProduct} id={item.id}/>
    ))
    return (
      <div className='dashboard'>
        {inventoryList}
      </div>
    )
  }
}

export default Dashboard;

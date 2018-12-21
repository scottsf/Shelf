import React, {Component} from 'react';
import Product from '../product/Product.js';
import './dashboard.scss';

class Dashboard extends Component {

  render() {
    console.log(this.props.inventoryList)
    let inventoryList = this.props.inventory.map((item, i) => (
      <Product item={item} key={i}/>
    ))
    return (
      <div className='dashboard'>
        {inventoryList}
      </div>
    )
  }
}

export default Dashboard;

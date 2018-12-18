import React, {Component} from 'react';
import Product from '../product/Product.js';

class Dashboard extends Component {
  constructor() {
    super();
    }

  render() {
    console.log(this.props.inventory)
    let inventoryList = this.props.inventory.map((item, i) => (
      <Product item={item} key={i}/>
    ))
    return (
      <div>
        {inventoryList}
      </div>
    )
  }
}

export default Dashboard;

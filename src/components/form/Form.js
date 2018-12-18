import React, {Component} from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      url: '',
      productName: '',
      price: ''
    }
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }
  render() {
    return (
      <div>
        <img/>
        <p>Image URL:</p>
        <input onChange={this.handleInput} name='url' placeholder='URL'/>
        <p>Product Name:</p>
        <input onChange={this.handleInput} name='price' placeholder='Product'/>
        <p>Price</p>
        <input onChange={this.handleInput} name='productName' placeholder='Price' />
        <div>
          <button>Cancel</button>
          <button>Add Inventory</button>
        </div>
      </div>
    )
  }
}

export default Form;

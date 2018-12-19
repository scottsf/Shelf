import React, {Component} from 'react';
import './form.scss';
import axios from 'axios';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      img: '',
      name: '',
      price: ''
    }
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  cancel = () => {
    this.setState({
      img: '', name: '', price: 0
    })
  }

  saveProduct () {
    axios.post('/api/product', this.state)
        this.cancel();
        this.props.getInventory();
  }

  render() {
    return (
      <div className='form'>
        <img alt='image' className='form__image' />
        <p className='form__p'>Image URL:</p>
        <input className='form__input' value={this.state.img} onChange={this.handleInput} name='img' />
        <p className='form__p'>Product Name:</p>
        <input className='form__input' value={this.state.name} onChange={this.handleInput} name='name' />
        <p className='form__p'>Price</p>
        <input className='form__input' value={this.state.price} onChange={this.handleInput} name='price' type='number' />
        <div className='form__button'>
          <button className='form__button__cancel' onClick={this.cancel}>Cancel</button>
          <button className='form__button__add' onClick={this.saveProduct.bind(this)}>Add Inventory</button>
      </div>
      </div>
    )
  }
}

export default Form;

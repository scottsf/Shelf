import React, {Component} from 'react';
import './form.scss';

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
    });
  }

  cancel = () => {
    this.setState({
      url: '', productName: '', price: ''
    })
  }
  render() {
    return (
      <div className='form'>
        <img alt='image' className='form__image' />
        <p className='form__p'>Image URL:</p>
        <input className='form__input' onChange={this.handleInput} name='url' />
        <p className='form__p'>Product Name:</p>
        <input className='form__input' onChange={this.handleInput} name='price' />
        <p className='form__p'>Price</p>
        <input className='form__input'onChange={this.handleInput} name='productName' />
        <div className='form__button'>
          <button className='form__button__cancel' onClick={this.cancel}>Cancel</button>
          <button className='form__button__add'>Add Inventory</button>
        </div>
      </div>
    )
  }
}

export default Form;

import React, {Component} from 'react';
import './form.scss';
import axios from 'axios';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      img: '',
      name: '',
      price: '',
      id: null,
    }
    this.saveProduct = this.saveProduct.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.selected.id !== prevProps.selected.id) {
      const {img, name, price, id} = this.props.selected;

      console.log('prevProps: ', prevProps, 'id: ', this.props.selected)
      this.setState({img, name, price, id, edit: true});
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
    axios({
      method: 'post',
      url: '/api/product',
      data: this.state,
      validateStatus: (status) => {
        return true; // I'm always returning true, you may want to do it depending on the status received
      },
    }).catch(error => {
        console.log(error.message)
    }).then(response => {
        // this is now called!
        this.props.invokeGetInventory();
        this.cancel();
    });
  }

  render() {
    return (
      <div className='form'>
        <img alt='' className='form__image' />
        <p className='form__p'>Image URL:</p>
        <input className='form__input' value={this.state.img} onChange={this.handleInput} name='img' />
        <p className='form__p'>Product Name:</p>
        <input className='form__input' value={this.state.name} onChange={this.handleInput} name='name' />
        <p className='form__p'>Price</p>
        <input className='form__input' value={this.state.price} onChange={this.handleInput} name='price' type='number' />
        <div className='form__button'>
          <button className='form__button__cancel' onClick={this.cancel}>Cancel</button>
      {
        this.state.edit === 'true'
        ?
        <button className='form__button__add' onClick={this.saveProduct}>Save changes</button>
        :
        <button className='form__button__add' onClick={this.saveProduct}>Add Inventory</button>
      }
      </div>
      </div>
    )
  }
}

export default Form;

import React, {Component} from 'react';
import './form.scss';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '',
      name: '',
      price: '',
      id: null,
    }
    this.saveProduct = this.saveProduct.bind(this)
  }

  componentDidMount() {
    this.getProduct();
    // console.log('DATA: ', data)
    // let {img, name, price, id} = data;
    // this.setState({img, name, price, id, edit: true})
  }

  getProduct = () => {
    let {id} = this.props.match.params;
    axios.get(`/api/product/${id}`)
      .then(res => {
        // console.log('DATA: ', data)
        let {img, name, price, id} = res.data;
        this.setState({img, name, price, id, edit: true})
      })
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  cancel = () => {
    this.setState({
      img: '', name: '', price: 0, edit: false
    })
  }

  updateProduct = () => {
    console.log(this.state.id)
    axios.put(`/api/product/${this.state.id}`, this.state);
  }

  // saveProduct () {
  //   axios.post('/api/product', this.state)
  //   .then(response => {
  //       this.props.invokeGetInventory();
  //       this.cancel();
  //   })
  // }

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
        <Link to="/">
          <button className='form__button__cancel' onClick={this.cancel}>Cancel</button>
        </Link>
      {
        this.state.edit === true
        ?
        <Link to='/'>
        <button className='form__button__add' onClick={() => this.updateProduct()}>Save changes</button>
        </Link>
        :
        <Link to='/'>
        <button className='form__button__add' onClick={this.saveProduct}>Add Inventory</button>
        </Link>
      }
        </div>
      </div>
    )
  }
}

export default Form;

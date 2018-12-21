import React from 'react';
import './product.scss';

let Product = ({item}) => (
  <div className="product">
    <img className="product__image" alt='' src={item.img} />
    <div className="product__p">
      <p> {item.price} </p>
      <p> {item.name} </p>
    </div>
    <div className="button">
      <button className="button__delete btn"> Delete </button>
      <button className="button__add btn"> Add </button>
    </div>
  </div>
)

export default Product;

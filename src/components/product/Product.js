import React from 'react';
import './product.scss';

let Product = ({item, invokeRemoveProduct, id, selectProduct}) => (
  <div className="product">
    <img className="product__image" alt='' src={item.img} />
    <div className="product__p">
      <p> {item.price} </p>
      <p> {item.name} </p>
    </div>
    <div className="button">
      <button className="button__delete btn" onClick={() => invokeRemoveProduct(id)}> Delete </button>
      <button className="button__edit btn" onClick={() => selectProduct(item.id)}> Edit </button>
    </div>
  </div>
)

export default Product;

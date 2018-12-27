import React from 'react';
import './product.scss';
import {Link} from 'react-router-dom';

let Product = ({item, invokeRemoveProduct, id}) => (
  <div className="product">
    <img className="product__image" alt='' src={item.img} />
    <div className="product__p">
      <p>${item.price} </p>
      <p> {item.name} </p>
    </div>
    <div className="button">
      <button className="button__delete btn" onClick={() => invokeRemoveProduct(id)}> Delete </button>
    <Link to={`/edit/${item.id}`}>
      <button className="button__edit btn"> Edit </button>
    </Link>
    </div>
  </div>
)

export default Product;

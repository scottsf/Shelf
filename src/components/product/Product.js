import React from 'react';
import './product.scss';
import { Link } from 'react-router-dom';

let Product = ({img, price, name, invokeRemoveProduct, id}) => (
  <div className="product">
    <img className="product__image" alt='' src={img} />
    <div className="product__p">
      <p>${price} </p>
      <p> {name} </p>
    </div>
    <div className="button">
      <button className="button__delete btn" onClick={() => invokeRemoveProduct(id)}> Delete </button>
    <Link to={`/edit/${id}`}>
      <button className="button__edit btn"> Edit </button>
    </Link>
    </div>
  </div>
)

export default Product;

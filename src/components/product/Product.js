import React from 'react';

let Product = ({item}) => (
  <div>
    <img alt='item' src={item.img} />
    <p> {item.price} </p>
    <p> {item.name} </p>
  </div>
)

export default Product;

import React from 'react';

let Product = ({item}) => (
  <div>
    <img alt='' src={item.img} />
    <p> {item.price} </p>
    <p> {item.name} </p>
  </div>
)

export default Product;

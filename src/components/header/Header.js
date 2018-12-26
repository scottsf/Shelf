import React from 'react';
import './header.scss';
import {Link} from 'react-router-dom';

let Header = () => (
  <div className="header">
    <h4 className="header__h4"> Shelf </h4>
    <Link to="/">
      <button className="header__dash btn"> Dashboard </button>
    </Link>
    <Link to="/add">
      <button className="header__add btn"> Add Inventory </button>
    </Link>
  </div>
)

export default Header;

import React from 'react';
import { shallow } from 'enzyme';
import Product from './Product.js';

it ('Product', () => {
  const wrapper = shallow(<Product/>)
  expect(wrapper).toMatchSnapshot();
})

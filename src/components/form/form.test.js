import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form.js';

let wrapper;

beforeEach(() => {
  const defaultProps = {
    id: 144,
    name: 'TEST',
    price: 10000000,
    img: 'http://test.com',
    match: {
      params: { id: 144 }}
  }
  wrapper = shallow(<Form {...defaultProps}/>);
})

it('Renders Form component without crashing', () => {
  expect(wrapper).toMatchSnapshot()
})





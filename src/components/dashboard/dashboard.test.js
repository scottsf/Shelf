import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard.js';
import axios from 'axios';

it('calls', () => {
  const mockProducts = [
    {
      id: 141,
      img: "http://tineye.com/images/widgets/mona.jpg",
      name: "Monnna",
      price: 9988
    }
  ]

  const wrapper = shallow(<Dashboard item={mockProducts} />);
  expect(wrapper).toMatchSnapshot();
})
// it('testest', () => {
//   const fetchData = axios.get('/api/inventory')
//     .then(resolve => {
//       console.log(resolve)
//       return resolve.data
//     });
//   console.log(dashboard)
//   expect(dashboard.getInventory(fetchData).length().toBe(2))
// })

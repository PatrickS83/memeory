import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('<Navbar/>', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.length).toEqual(1);
  });

  it('renders the Navbar as saved in snapshot', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toMatchSnapshot();
  });
});

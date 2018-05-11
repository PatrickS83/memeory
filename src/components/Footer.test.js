import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer/>', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.length).toEqual(1);
  });

  it('renders the footer as saved in snapshot', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});

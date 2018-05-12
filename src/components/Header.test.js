import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header/>', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.length).toEqual(1);
  });

  it('renders the Header as saved in snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
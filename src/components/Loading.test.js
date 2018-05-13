import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('<Loading/>', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.length).toEqual(1);
  });

  it('renders the Loading Component as saved in snapshot', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });
});

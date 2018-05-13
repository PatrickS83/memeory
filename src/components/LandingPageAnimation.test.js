import React from 'react';
import { shallow } from 'enzyme';
import LandingPageAnimation from './LandingPageAnimation';

describe('<LandingPageAnimation/>', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<LandingPageAnimation />);
    expect(wrapper.length).toEqual(1);
  });

  it('renders the LandingPageAnimation as saved in snapshot', () => {
    const wrapper = shallow(<LandingPageAnimation />);
    expect(wrapper).toMatchSnapshot();
  });
});

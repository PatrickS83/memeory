import React from 'react';
import { shallow } from 'enzyme';
import Layout from './Layout';

describe('<Layout/>', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <Layout>
        <p>TestChild</p>
      </Layout>
    );
    expect(wrapper.length).toEqual(1);
  });

  it('renders the Layout as saved in snapshot', () => {
    const wrapper = shallow(
      <Layout>
        <p>TestChild</p>
      </Layout>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the children prop', () => {
    const wrapper = shallow(
      <Layout>
        <p>TestChild</p>
      </Layout>
    );
    expect(wrapper.find('p').length).toBe(1);
  });
});

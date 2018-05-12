import React from 'react';
import { shallow } from 'enzyme';
import Winscreen from './Winscreen';

describe('<Winscreen/>', () => {
  let wrapper;
  let resetGame;
  beforeEach(() => {
    resetGame = jest.fn();
    wrapper = shallow(<Winscreen resetGame={resetGame} />);
  });
  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('renders the Winscreen as saved in snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('invokes resetGame() on reset-button click', () => {
    expect(resetGame).not.toHaveBeenCalled();
    wrapper.find('.playbutton').simulate('click');
    expect(resetGame).toHaveBeenCalled();
  });
});

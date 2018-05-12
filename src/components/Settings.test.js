import React from 'react';
import { shallow } from 'enzyme';
import Settings from './Settings';

describe('<Settings/>', () => {
  let wrapper;
  let handleSettingsInputChange;
  let startGame;

  beforeEach(() => {
    handleSettingsInputChange = jest.fn();
    startGame = jest.fn();
    wrapper = shallow(
      <Settings
        handleSettingsInputChange={handleSettingsInputChange}
        startGame={startGame}
        cards={4}
        theme="cats"
        loading={false}
      />
    );
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('invokes startGame prop when start button is clicked', () => {
    expect(startGame).not.toHaveBeenCalled();
    wrapper.find('.playbutton').simulate('click');
    expect(startGame).toHaveBeenCalled();
  });

  describe('Theme Input', () => {
    it('input for theme receives its value from "theme" prop', () => {
      expect(wrapper.find('[name="theme"]').getElement().props.value).toBe('cats');
      wrapper.setProps({ theme: 'dragons' });
      expect(wrapper.find('[name="theme"]').getElement().props.value).toBe('dragons');
    });

    it('handles controlled input for theme correctly', () => {
      const event = { target: { name: 'theme', value: 'dogs' } };
      expect(handleSettingsInputChange).not.toHaveBeenCalled();
      wrapper.find('[name="theme"]').simulate('change', event);
      expect(handleSettingsInputChange).toHaveBeenCalled();
    });
  });

  describe('Card amount Input', () => {
    it('input for theme receives its value from "theme" prop', () => {
      expect(wrapper.find('[name="cards"]').getElement().props.value).toBe(4);
      wrapper.setProps({ cards: 2 });
      expect(wrapper.find('[name="cards"]').getElement().props.value).toBe(2);
    });

    it('handles controlled input for card amount correctly', () => {
      const event = { target: { name: 'theme', value: 4 } };
      expect(handleSettingsInputChange).not.toHaveBeenCalled();
      wrapper.find('[name="cards"]').simulate('change', event);
      expect(handleSettingsInputChange).toHaveBeenCalled();
    });
  });
});

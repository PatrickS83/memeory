import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toEqual(1);
  });

  describe('function resetGame()', () => {
    it('resets the game settings in state', () => {
      const wrapper = shallow(<App />);
      const instance = wrapper.instance();
      instance.resetGame();
      expect(wrapper.state('won')).toBe(false);
      expect(wrapper.state('cards').length).toBe(0);
    });

    it('doesnt change any other than "won" or "cards" settings in state', () => {
      const wrapper = shallow(<App />);
      const instance = wrapper.instance();
      const stateCopy = { ...wrapper.state() };
      instance.resetGame();
      const filteredKeys = Object.keys(stateCopy).filter(
        x => x !== 'won' && x !== 'cards'
      );
      filteredKeys.forEach(key => {
        expect(stateCopy[key]).toEqual(wrapper.state(key));
      });
    });
  });
});

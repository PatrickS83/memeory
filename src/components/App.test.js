import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Layout from './Layout';
import Header from './Header';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });

  describe('Rendering Components', () => {
    it('renders <Layout/> Component', () => {
      expect(wrapper.find(Layout).length).toEqual(1);
    });

    it('renders <Header/> Component', () => {
      expect(wrapper.find(Header).length).toEqual(1);
    });
  });

  describe('function resetGame()', () => {
    it('resets the game settings in state', () => {
      const instance = wrapper.instance();
      instance.resetGame();
      expect(wrapper.state('won')).toBe(false);
      expect(wrapper.state('cards').length).toBe(0);
    });

    it('doesnt change any other than "won" or "cards" settings in state', () => {
      const instance = wrapper.instance();
      const stateCopy = { ...wrapper.state() };
      instance.resetGame();
      const filteredKeys = Object.keys(stateCopy).filter(x => x !== 'won' && x !== 'cards');
      filteredKeys.forEach(key => {
        expect(stateCopy[key]).toEqual(wrapper.state(key));
      });
    });
  });

  describe('function checkForWin()', () => {
    it('should setState "won" to true, if every card is matched', () => {
      const instance = wrapper.instance();
      wrapper.setState({ cards: [{ id: 1, matched: true }, { id: 2, matched: true }] });
      expect(wrapper.state('won')).toBe(false);
      instance.checkForWin();
      expect(wrapper.state('won')).toBe(true);
    });

    it('should do nothing if there are unmatched cards left', () => {
      const instance = wrapper.instance();
      wrapper.setState({ cards: [{ id: 1, matched: true }, { id: 2, matched: false }] });
      expect(wrapper.state('won')).toBe(false);
      instance.checkForWin();
      expect(wrapper.state('won')).toBe(false);
    });
  });
});

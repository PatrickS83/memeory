import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Layout from './Layout';
import Header from './Header';
import Settings from './Settings';
import Gamecontainer from './Gamecontainer';
import mockfetchTenor from './__mocks__/mockfetchTenor';

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

    it('renders <Settings /> Component by default when app is started', () => {
      expect(wrapper.find(Settings).length).toEqual(1);
    });

    it('does not render <Settings /> when cards array is filled', () => {
      wrapper.setState({ cards: [{ id: 1, matched: false }] });
      expect(wrapper.find(Settings).length).toEqual(0);
    });

    it('does not render <Gamecontainer /> Component by default when app is started', () => {
      expect(wrapper.find(Gamecontainer).length).toEqual(0);
    });

    it('renders <Gamecontainer /> when cards array is filled', () => {
      wrapper.setState({ cards: [{ id: 1, matched: false }] });
      expect(wrapper.find(Gamecontainer).length).toEqual(1);
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

  describe('function checkCardMatch()', () => {
    let instance;
    beforeEach(() => {
      jest.useFakeTimers();
      instance = wrapper.instance();
    });

    it('should set matched to "true" if a matching cardpair was found (clicked: 2)', () => {
      wrapper.setState({ cards: [{ id: 1, matched: false, clicked: 2 }] });
      expect(wrapper.state('cards')[0].matched).toBe(false);
      instance.checkCardMatch();
      jest.runAllTimers();
      expect(wrapper.state('cards')[0].matched).toBe(true);
    });

    it('should reset "clicked" property to 0 for every card', () => {
      wrapper.setState({ cards: [{ id: 1, clicked: 2 }, { id: 2, clicked: 0 }] });
      instance.checkCardMatch();
      jest.runAllTimers();
      expect(wrapper.state('cards').every(card => card.clicked === 0)).toBe(true);
    });

    it('should set state of "activeCards" to 0', () => {
      wrapper.setState({ activeCards: 2 });
      instance.checkCardMatch();
      jest.runAllTimers();
      expect(wrapper.state('activeCards')).toBe(0);
    });

    it('should call function checkForWin', () => {
      const checkForWinSpy = jest.spyOn(instance, 'checkForWin');
      instance.checkCardMatch();
      jest.runAllTimers();
      expect(checkForWinSpy).toHaveBeenCalled();
    });

    it('there should be a delay before setting state and function call', () => {
      const checkForWinSpy = jest.spyOn(instance, 'checkForWin');
      wrapper.setState({ activeCards: 2 });
      instance.checkCardMatch();
      expect(wrapper.state('activeCards')).toBe(2);
      expect(checkForWinSpy).not.toBeCalled();
      jest.runAllTimers();
      expect(wrapper.state('activeCards')).toBe(0);
      expect(checkForWinSpy).toHaveBeenCalled();
    });
  });

  describe('function startGame()', () => {
    it('should call fetchGifs function', () => {
      const instance = wrapper.instance();
      // mockImplementation: prevent function from actually getting called
      const fetchGifsSpy = jest.spyOn(instance, 'fetchGifs').mockImplementation(() => null);
      instance.startGame();
      expect(fetchGifsSpy).toHaveBeenCalled();
    });
  });

  describe('function fetchGifs', () => {
    let instance;
    beforeEach(() => {
      instance = wrapper.instance();
      const settings = { cards: 4, theme: 'cats' };
      wrapper.setState({ settings });
      global.fetch = jest.fn().mockImplementation(mockfetchTenor);
    });

    it('calls fetch with the correct url, key and theme from state', async () => {
      await instance.fetchGifs();
      expect(global.fetch).toHaveBeenCalledWith(
        'https://api.tenor.com/v1/search?tag=cats&key=PPGBBI41SF35&media_filter=minimal'
      );
    });

    it('sets the correct amount of cards to state', async () => {
      await instance.fetchGifs();
      expect(wrapper.state('cards').length).toBe(2);
    });

    it('creates the correct card object structure', async () => {
      await instance.fetchGifs();
      const [cards] = wrapper.state('cards');
      expect(Object.keys(cards).length).toBe(4);
      expect(typeof cards.id).toBe('number');
      expect(typeof cards.url).toBe('string');
      expect(typeof cards.clicked).toBe('number');
      expect(typeof cards.matched).toBe('boolean');
    });
  });
});

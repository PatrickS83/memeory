import React from 'react';
import { shallow } from 'enzyme';
import Gamecontainer from './Gamecontainer';

describe('<Gamecontainer />', () => {
  let wrapper;
  let handleCardClick;
  let resetGame;

  beforeEach(() => {
    const cards = [{ id: 1, url: 'url1' }, { id: 2, url: 'url2' }, { id: 3, url: 'url3' }];
    resetGame = jest.fn();
    handleCardClick = jest.fn();
    wrapper = shallow(
      <Gamecontainer
        size={4}
        cardData={cards}
        handleCardClick={handleCardClick}
        activeCards={0}
        hasWon={false}
        resetGame={resetGame}
      />
    );
  });

  describe('Rendering', () => {
    it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1);
    });

    it('renders Winscreen if game was won', () => {
      expect(wrapper.find('Winscreen').length).toEqual(0);
      wrapper.setProps({ hasWon: true });
      expect(wrapper.find('Winscreen').length).toEqual(1);
    });

    it('renders Card component if game was not yet won', () => {
      expect(wrapper.find('Card').length).toBeGreaterThanOrEqual(1);
      wrapper.setProps({ hasWon: true });
      expect(wrapper.find('Card').length).toEqual(0);
    });

    it('renders all urls in shuffledArray to the board', () => {
      expect(wrapper.find('Card').length).toBe(6);
      wrapper.setState({ shuffledURL: ['url1', 'url1', 'url2', 'url2'] });
      expect(wrapper.find('Card').length).toBe(4);
    });
  });

  describe('Mounting of Gamecontainer', () => {
    it('Updates state with card array from props', () => {
      expect(wrapper.state('shuffledURL').length).not.toBe(0);
    });

    it('Doubles the length of array from prop', () => {
      expect(wrapper.state('shuffledURL').length).toBe(6);
    });

    it('The array consists of strings only', () => {
      expect(wrapper.state('shuffledURL').every(x => typeof x === 'string')).toBe(true);
    });

    it('extracts the URLs from cardData prop and duplicated them', () => {
      expect(wrapper.state('shuffledURL').filter(x => x === 'url1').length).toBe(2);
      expect(wrapper.state('shuffledURL').filter(x => x === 'url2').length).toBe(2);
      expect(wrapper.state('shuffledURL').filter(x => x === 'url3').length).toBe(2);
    });
  });

  describe('function shuffle()', () => {
    it('returns an array of the same length', () => {
      const arr = [1, 2, 3, 4, 5, 6];
      const resultArr = wrapper.instance().shuffle(arr);
      expect(arr.length).toBe(resultArr.length);
    });
  });
});

import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';

describe('<Card/>', () => {
  let wrapper;
  let handleCardClick;

  beforeEach(() => {
    const cards = [
      { id: 1, url: 'url1', matched: false, clicked: 0 },
      { id: 2, url: 'url2', matched: true, clicked: 0 },
      { id: 3, url: 'url3', matched: false, clicked: 0 }
    ];
    handleCardClick = jest.fn();
    wrapper = shallow(
      <Card
        key="key"
        size={4}
        url="url1"
        handleCardClick={handleCardClick}
        activeCards={0}
        cardData={cards}
      />
    );
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('on component update: sets state "active" to false, when there no active cards and "active" is currently true', () => {
    expect(wrapper.state('active')).toBe(false);
    wrapper.setProps({ activeCards: 0 });
    wrapper.setState({ active: true });
    expect(wrapper.state('active')).toBe(false);
  });

  it('assigns "activeCard" className, if card is active', () => {
    expect(wrapper.find('.activeCard').length).toBe(0);
    wrapper.setProps({ activeCards: 1 });
    wrapper.setState({ active: true });
    expect(wrapper.find('.activeCard').length).toBe(1);
  });

  it('does not render matched cards', () => {
    expect(wrapper.find('img').length).toBe(1);
    const cards = [{ id: 1, url: 'url1', matched: true, clicked: 0 }];
    wrapper.setProps({ cardData: cards });
    expect(wrapper.find('img').length).toBe(0);
  });

  it('renders cardback, if card is not active', () => {
    const cardback = './img/card-logo.png';
    expect(wrapper.find('img').getElement().props.src).toBe(cardback);
  });

  it('renders gif, if card is active', () => {
    const cardback = './img/card-logo.png';
    expect(wrapper.find('img').getElement().props.src).toBe(cardback);
    wrapper.setProps({ activeCards: 1 });
    wrapper.find('#gameCard').simulate('click');
    expect(wrapper.find('img').getElement().props.src).toBe('url1');
  });

  describe('Clicking on a Card', () => {
    it('clicking on a card will set state "active" to true', () => {
      expect(wrapper.state('active')).toBe(false);
      wrapper.find('#gameCard').simulate('click');
      expect(wrapper.state('active')).toBe(true);
    });

    it('invokes handleCardClick() on click', () => {
      expect(handleCardClick).not.toHaveBeenCalled();
      wrapper.find('#gameCard').simulate('click');
      expect(handleCardClick).toHaveBeenCalled();
    });

    it('clicking on a card will NOT set state "active" to true, if there are two active cards', () => {
      wrapper.setProps({ activeCards: 2 });
      expect(wrapper.state('active')).toBe(false);
      wrapper.find('#gameCard').simulate('click');
      expect(wrapper.state('active')).toBe(false);
    });

    it('doesnt invoke handleCardClick() on click, when there two or more active cards', () => {
      wrapper.setProps({ activeCards: 2 });
      expect(handleCardClick).not.toHaveBeenCalled();
      wrapper.find('#gameCard').simulate('click');
      expect(handleCardClick).not.toHaveBeenCalled();
    });
  });
});

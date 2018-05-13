import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Winscreen from './Winscreen';

class Gamecontainer extends Component {
  static propTypes = {
    size: PropTypes.number.isRequired,
    cardData: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleCardClick: PropTypes.func.isRequired,
    resetGame: PropTypes.func.isRequired,
    activeCards: PropTypes.number.isRequired,
    hasWon: PropTypes.bool.isRequired
  };

  state = {
    shuffledURL: []
  };

  componentDidMount() {
    const urls = this.props.cardData.map(card => card.url);
    const doubleURL = [...urls, ...urls];
    const shuffledURL = this.shuffle(doubleURL);
    this.setState({ shuffledURL });
  }

  shuffle = array => {
    const urls = [...array];
    let ctr = array.length;
    let index;
    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr -= 1;
      // And swap the last element with it
      [urls[ctr], urls[index]] = [urls[index], urls[ctr]];
    }
    return urls;
  };

  render() {
    const { hasWon, resetGame, size, handleCardClick, activeCards, cardData } = this.props;
    return (
      <section className="section">
        <div className="container">
          {hasWon ? (
            <Winscreen resetGame={resetGame} />
          ) : (
            <div className="columns is-multiline is-mobile">
              {this.state.shuffledURL.map((url, i) => (
                <Card
                  key={i}
                  size={size}
                  url={url}
                  handleCardClick={handleCardClick}
                  activeCards={activeCards}
                  cardData={cardData}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Gamecontainer;

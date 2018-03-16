import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Winscreen from './Winscreen';

class Gamecontainer extends Component {
  static propTypes = {
    size: PropTypes.number,
    cardData: PropTypes.array,
    handleCardClick: PropTypes.func,
    resetGame: PropTypes.func,
    activeCards: PropTypes.number,
    hasWon: PropTypes.bool,
  };

  componentWillMount() {
    const urls = this.props.cardData.map(card => card.url);
    const doubleURL = [...urls, ...urls];
    const shuffledURL = this.shuffle(doubleURL);
    this.setState({ shuffledURL });
  }

  shuffle(array) {
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
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          {this.props.hasWon
            ?
            <Winscreen resetGame={this.props.resetGame} />
            :
            <div className="columns is-multiline is-mobile">
              {this.state.shuffledURL
                .map((url, i) => <Card
                  key={i}
                  size={this.props.size}
                  url={url}
                  handleCardClick={this.props.handleCardClick}
                  activeCards={this.props.activeCards}
                  cardData={this.props.cardData}
                />)}
            </div>}
        </div>
      </section>
    );
  }
}

export default Gamecontainer;

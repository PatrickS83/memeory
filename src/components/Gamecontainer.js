import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Gamecontainer extends Component {
  static propTypes = {
    size: PropTypes.number,
    cardData: PropTypes.array,
    handleCardClick: PropTypes.func
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
          <div className="columns is-multiline is-mobile">
            {this.state.shuffledURL
              .map((url, i) => <Card
                key={i}
                size={this.props.size}
                url={url}
                handleCardClick={this.props.handleCardClick}
              />)}
          </div>
        </div>
      </section>
    );
  }
}

export default Gamecontainer;

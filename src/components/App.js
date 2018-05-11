import React, { Component } from 'react';
import Layout from './Layout';
import Gamecontainer from './Gamecontainer';
import Header from './Header';
import Settings from './Settings';

class App extends Component {
  state = {
    cards: [],
    activeCards: 0,
    size: 3,
    settings: {
      cards: 4, // minimum value
      theme: ''
    },
    won: false
  };

  fetchGifs = () => {
    const amountGifs = this.state.settings.cards / 2;
    const searchTheme = this.state.settings.theme;
    const APIKEY = 'PPGBBI41SF35';

    return fetch(
      `https://api.tenor.com/v1/search?tag=${searchTheme}&key=${APIKEY}&media_filter=minimal`
    )
      .then(response => response.json())
      .then(data => {
        const cards = data.results.splice(0, amountGifs).map((gif, i) => ({
          id: i,
          url: gif.media[0].gif.url,
          clicked: 0,
          matched: false
        }));
        // preloading images, so that user doesn't have to wait when a card is clicked
        cards.forEach(x => {
          const preloadImage = new Image();
          preloadImage.src = x.url;
        });
        this.setState({ cards });
      });
  };

  handleCardClick = url => {
    const cards = [...this.state.cards];
    const activeCards = this.state.activeCards + 1;
    cards.find(card => card.url === url).clicked += 1;
    this.setState({ cards, activeCards });
    if (activeCards === 2) this.checkCardMatch();
  };

  startGame = () => {
    const { settings } = this.state;
    if (settings.theme && settings.cards % 2 === 0) {
      this.fetchGifs();
    }
  };

  handleSettingsInputChange = e => {
    const elem = e.currentTarget;
    const settings = { ...this.state.settings };
    settings[elem.name] = elem.name === 'theme' ? elem.value : Number(elem.value);
    this.setState({ settings });
  };

  checkCardMatch = () => {
    // needed deep copy of array of objects | TODO: find better way
    const cards = JSON.parse(JSON.stringify(this.state.cards));
    const cardClickedTwice = cards.find(card => card.clicked === 2);
    if (cardClickedTwice) {
      // Insert success message/here here
      cardClickedTwice.matched = true;
    } else {
      // insert fail message/action here
    }
    cards.forEach(card => {
      card.clicked = 0;
    });
    // show cards for some time before resetting
    setTimeout(() => {
      this.setState({ cards, activeCards: 0 });
      this.checkForWin();
    }, 2500);
  };

  checkForWin = () => {
    const hasWon = this.state.cards.every(card => card.matched);
    if (hasWon) this.setState({ won: hasWon });
  };

  resetGame = () => {
    this.setState({ won: false, cards: [] });
  };

  render() {
    return (
      <React.Fragment>
        <Layout>
          <Header />
          {this.state.cards.length ? (
            <Gamecontainer
              size={this.state.size}
              cardData={this.state.cards}
              handleCardClick={this.handleCardClick}
              activeCards={this.state.activeCards}
              hasWon={this.state.won}
              resetGame={this.resetGame}
            />
          ) : (
            <Settings
              handleSettingsInputChange={this.handleSettingsInputChange}
              startGame={this.startGame}
              theme={this.state.settings.theme}
              cards={this.state.settings.cards}
            />
          )}
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Layout from './Layout';
import Gamecontainer from './Gamecontainer';
import Header from './Header';

class App extends Component {
  state = {
    cards: [
      {
        id: 0,
        url: 'https://picsum.photos/256/256/',
        clicked: 0
      },
      {
        id: 1,
        url: 'https://picsum.photos/257/257/',
        clicked: 0
      },
      {
        id: 2,
        url: 'https://picsum.photos/255/255/',
        clicked: 0
      }
    ],
    size: 3,
    activeCards: 0
  };

  handleCardClick = (url) => {
    const cards = [...this.state.cards];
    cards.find(card => card.url === url).clicked += 1;
    this.setState({ cards });

    let { activeCards } = this.state;
    this.setState({ activeCards: activeCards += 1 });
    if (activeCards === 2) this.checkCardMatch(this.state);
  };

  checkCardMatch = (state) => {
    const cards = [...state.cards];
    if (cards.find(card => card.clicked === 2)) console.log('match!');
    else console.log('try again');
    cards.forEach(card => card.clicked = 0);
    this.setState({ cards });
    this.setState({ activeCards: 0 });
  };

  render() {
    return (
      <React.Fragment>
        <Layout>
          <Header />
          <Gamecontainer
            size={this.state.size}
            cardData={this.state.cards}
            handleCardClick={this.handleCardClick}
            activeCards={this.state.activeCards}
          />
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;

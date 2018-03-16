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
    size: 3
  };

  handleCardClick = (url) => {
    const cards = [...this.state.cards];
    cards.find(card => card.url === url).clicked += 1;
    this.setState({ cards });
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
          />
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;

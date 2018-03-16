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
        clicked: 0,
        matched: false
      },
      {
        id: 1,
        url: 'https://picsum.photos/257/257/',
        clicked: 0,
        matched: false
      },
      {
        id: 2,
        url: 'https://picsum.photos/255/255/',
        clicked: 0,
        matched: false
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
    if (activeCards === 2) this.checkCardMatch();
  };

  checkCardMatch = () => {
    // deep copy of array of objects. [... state] is only shallow copy. is there better way?
    const cards = JSON.parse(JSON.stringify(this.state.cards));
    if (cards.find(card => card.clicked === 2)) {
      console.log('match!');
      cards.find(card => card.clicked === 2).matched = true;
    } else console.log('try again');
    cards.forEach(card => card.clicked = 0);
    setTimeout(() => {
      this.setState({ cards });
      this.setState({ activeCards: 0 });
    }, 1000);
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

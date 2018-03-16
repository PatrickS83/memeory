import React, { Component } from 'react';
import Layout from './Layout';
import Gamecontainer from './Gamecontainer';
import Header from './Header';

class App extends Component {
  state = {
    cards: [
      {
        id: 0,
        url: 'https://picsum.photos/256/256/?random',
      },
      {
        id: 1,
        url: 'https://picsum.photos/257/257/?random',
      },
      {
        id: 2,
        url: 'https://picsum.photos/255/255/?random',
      }
    ],
    size: 3
  };
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Header />
          <Gamecontainer
            size={this.state.size}
            cardData={this.state.cards}
          />
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;

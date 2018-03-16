import React, { Component } from 'react';
import Layout from './Layout';
import Gamecontainer from './Gamecontainer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Gamecontainer size={3} />
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;

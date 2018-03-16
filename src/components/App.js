import React, { Component } from 'react';
import Layout from './Layout';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <section className="hero is-primary">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  Primary title
              </h1>
                <h2 className="subtitle">
                  Primary subtitle
              </h2>
              </div>
            </div>
          </section>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;

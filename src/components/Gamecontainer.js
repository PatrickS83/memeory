import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Gamecontainer extends Component {
  static propTypes = {

  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline is-mobile">
            <div className="column is-3">Auto</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Gamecontainer;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Gamecontainer extends Component {
  static propTypes = {
    size: PropTypes.number
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline is-mobile">
            <Card size={this.props.size} />
            <Card size={this.props.size} />
            <Card size={this.props.size} />
            <Card size={this.props.size} />
            <Card size={this.props.size} />
            <Card size={this.props.size} />
          </div>
        </div>
      </section>
    );
  }
}

export default Gamecontainer;

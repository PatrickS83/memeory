import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  static propTypes = {
    size: PropTypes.number
  };
  render() {
    return (
      <div className={`column is-${this.props.size}`}>
        <figure className="image is-128x128">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </figure>
      </div>
    );
  }
}

export default Card;

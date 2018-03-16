import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  static propTypes = {
    size: PropTypes.number,
    url: PropTypes.string,
  };
  render() {
    return (
      <div className={`column is-${this.props.size}`}>
        <figure className="image is-256x256">
          <img src={this.props.url} />
        </figure>
      </div>
    );
  }
}

export default Card;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  state = { active: false };

  static propTypes = {
    size: PropTypes.number,
    url: PropTypes.string,
    handleCardClick: PropTypes.func
  };

  componentWillUpdate() {
    if (this.props.activeCards === 0) this.setState({ active: false });
  }

  checkActive = () => {
    if (this.state.active) return;
    this.setState({ active: true });
    this.props.handleCardClick(this.props.url);
  };

  render() {
    return (
      <div className={`column is-${this.props.size}`}>
        <figure className="image is-256x256">
          <img src={this.props.url} onClick={this.checkActive} />
        </figure>
      </div>
    );
  }
}

export default Card;

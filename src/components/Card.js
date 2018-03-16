import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  state = { active: false };

  static propTypes = {
    size: PropTypes.number,
    url: PropTypes.string,
    handleCardClick: PropTypes.func,
    activeCards: PropTypes.number,
    cardData: PropTypes.array
  };

  componentDidUpdate() {
    if (this.props.activeCards === 0 && this.state.active) this.setState({ active: false });
  }

  checkActive = () => {
    if (this.state.active) return;
    this.setState({ active: true });
    this.props.handleCardClick(this.props.url);
  };

  render() {
    return (
      <div className={`column is-${this.props.size}${this.state.active ? ' activeCard' : ''}`}>
        <figure className="image is-256x256">
          {this.props.cardData.find(card => card.url === this.props.url).matched
            ? <p>WON</p>
            : <img src={this.props.url} onClick={this.checkActive}
            />}
        </figure>
      </div>
    );
  }
}

export default Card;

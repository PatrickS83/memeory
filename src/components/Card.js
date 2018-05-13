import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  static propTypes = {
    size: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    handleCardClick: PropTypes.func.isRequired,
    activeCards: PropTypes.number.isRequired,
    cardData: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  state = { active: false };

  componentDidUpdate() {
    if (this.props.activeCards === 0 && this.state.active) this.setState({ active: false });
  }

  checkActive = () => {
    // disallow click when active or showing the active matches
    if (this.state.active || this.props.activeCards >= 2) return;
    this.setState({ active: true });
    this.props.handleCardClick(this.props.url);
  };

  render() {
    const activeImgURL = this.state.active ? this.props.url : './img/card-logo.png';
    const activeImgClass = this.state.active ? ' activeCard' : '';

    return (
      <div className="column is-one-third-mobile is-one-quarter-tablet">
        <figure className="image is-square">
          {this.props.cardData.find(card => card.url === this.props.url).matched ? null : (
            <img
              id="gameCard"
              className={activeImgClass}
              src={activeImgURL}
              onClick={this.checkActive}
              alt="Playing Card"
            />
          )}
        </figure>
      </div>
    );
  }
}

export default Card;

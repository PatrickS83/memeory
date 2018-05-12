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
    // disallow click when active or showing the active matches
    if (this.state.active || this.props.activeCards >= 2) return;
    this.setState({ active: true });
    this.props.handleCardClick(this.props.url);
  };

  render() {
    const activeImgURL = this.state.active
      ? this.props.url
      : 'https://previews.123rf.com/images/nnattally/nnattally1504/nnattally150400025/39341446-rainbow-pixel-art-vector-abstract-background-pattern-.jpg';

    return (
      <div
        className={`column is-one-third-mobile is-one-quarter-tablet ${
          this.state.active ? ' activeCard' : ''
        }`}
      >
        <figure className="image is-square">
          {this.props.cardData.find(card => card.url === this.props.url).matched ? null : (
            <img id="gameCard" src={activeImgURL} onClick={this.checkActive} />
          )}
        </figure>
      </div>
    );
  }
}

export default Card;

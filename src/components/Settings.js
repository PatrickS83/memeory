import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Settings extends Component {
  static propTypes = {
    handleSettingsInputChange: PropTypes.func,
    startGame: PropTypes.func,
    cards: PropTypes.number,
    theme: PropTypes.string
  };

  handleStartGameClick = () => {
    if (this.props.theme && this.props.cards % 2 === 0) {
      this.props.startGame();
    }
  };

  render() {
    return (
      <section className="section is-medium">
        <h1 className="title has-text-centered">Choose your settings</h1>
        <div className="container">
          <div className='columns'>
            <div className="field column is-two-thirds">
              <label className="label">Choose a theme</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="theme"
                  placeholder="e.g Cats"
                  onChange={e => this.props.handleSettingsInputChange(e)}
                  value={this.props.theme}
                />
              </div>
              <p className="help">This chooses the gif theme for the next game</p>
            </div>

            <div className="field column">
              <label className="label">How many cards?</label>
              <div className="control">
                <input
                  className="input"
                  name="cards"
                  type="number"
                  max="16"
                  min="4"
                  step="2"
                  onChange={e => this.props.handleSettingsInputChange(e)}
                  value={this.props.cards}
                />
              </div>
              <p className="help">This chooses the number of cards for the next game (max 16)</p>
            </div>
          </div>
          <a
            className="button is-primary playbutton"
            onClick={this.handleStartGameClick}>
            Start the game!
        </a>
        </div>
      </section>
    );
  }
}

export default Settings;

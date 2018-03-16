import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Settings extends Component {
  static propTypes = {
    handleSettingsInputChange: PropTypes.func,
    cards: PropTypes.number,
    theme: PropTypes.string
  };

  render() {
    return (
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
                onChange={e => this.props.handleSettingsInputChange(e)}
                value={this.props.cards}
              />
            </div>
            <p className="help">This chooses the number of cards for the next game (max 16)</p>
          </div>
        </div>
        <a className="button is-primary playbutton">Start the game!</a>
      </div>
    );
  }
}

export default Settings;

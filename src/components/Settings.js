import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

const Settings = props =>
  props.loading ? (
    <Loading />
  ) : (
    <section className="section is-medium">
      <h1 className="title has-text-centered">Choose your settings</h1>
      <div className="container">
        <div className="columns">
          <div className="field column is-two-thirds">
            <label htmlFor="themeInput" className="label">
              Choose a theme
            </label>
            <div className="control">
              <input
                id="themeInput"
                className="input"
                type="text"
                name="theme"
                placeholder="e.g Cats"
                onChange={props.handleSettingsInputChange}
                value={props.theme}
              />
            </div>
            <p className="help">This chooses the gif theme for the next game</p>
          </div>

          <div className="field column">
            <label htmlFor="cardsInput" className="label">
              How many cards?
            </label>
            <div className="control">
              <input
                id="cardsInput"
                className="input"
                name="cards"
                type="number"
                max="16"
                min="4"
                step="2"
                onChange={props.handleSettingsInputChange}
                value={props.cards}
              />
            </div>
            <p className="help">This chooses the number of cards for the next game (max 16)</p>
          </div>
        </div>
        <button className="button is-primary playbutton" onClick={props.startGame}>
          Start the game!
        </button>
      </div>
    </section>
  );

Settings.propTypes = {
  handleSettingsInputChange: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  cards: PropTypes.number.isRequired,
  theme: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Settings;

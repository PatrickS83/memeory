import React from 'react';
import PropTypes from 'prop-types';

const Winscreen = props => (
  <React.Fragment>
    <h1 className="title has-text-centered">
      YOU WON !!!!
      </h1>
    <div className="columns is-multiline is-mobile">
      <div className="column is-6">
        <figure className="image is-square">
          <img src="https://media.giphy.com/media/gsrkIo59dnI8E/giphy.gif" />
        </figure>
      </div>
      <div className="column is-6">
        <figure className="image is-square">
          <img src="https://media.giphy.com/media/T6l1LBKmtUu9a/giphy.gif" />
        </figure>
      </div>
      <a
        className="button is-info playbutton"
        onClick={props.resetGame}>
        Play again!
      </a>
    </div>
  </React.Fragment>
);

Winscreen.propTypes = {
  resetGame: PropTypes.func
};

export default Winscreen;

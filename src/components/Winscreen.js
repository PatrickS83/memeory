import React from 'react';
import PropTypes from 'prop-types';

const Winscreen = props => (
  <React.Fragment>
    <h1 className="title has-text-centered">YOU WON !!!!</h1>
    <div className="columns is-multiline is-mobile">
      <div className="column is-6">
        <figure className="image is-square">
          <img src="https://media.giphy.com/media/gsrkIo59dnI8E/giphy.gif" alt="" />
        </figure>
      </div>
      <div className="column is-6">
        <figure className="image is-square">
          <img src="https://media.giphy.com/media/T6l1LBKmtUu9a/giphy.gif" alt="" />
        </figure>
      </div>
      <button className="button is-info playbutton" onClick={props.resetGame}>
        Play again!
      </button>
    </div>
  </React.Fragment>
);

Winscreen.propTypes = {
  resetGame: PropTypes.func.isRequired
};

export default Winscreen;

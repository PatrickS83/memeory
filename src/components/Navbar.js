import React from 'react';

const Navbar = () => (
  <nav className="navbar is-primary">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://patrickschuelke.me/memeory/">
        <img src="./img/memeory-logo-white.png" alt="Website Logo" width="150" height="auto" />
      </a>
    </div>

    <div className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
              <a className="button is-primary" href="https://github.com/PatrickS83/">
                <span>Github</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;

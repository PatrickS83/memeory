import React from 'react';

const Navbar = () => (
  <nav className="navbar is-primary">
    <div className="navbar-brand">
      <a className="navbar-item" href="http://patrickschuelke.me/memeory/">
        <img
          style={{ maxHeight: '2.5rem' }}
          src="./img/memeory-logo-white.png"
          alt="Website Logo"
        />
      </a>
    </div>

    <div className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
              <a className="button is-primary" href="https://github.com/PatrickS83/memeory/">
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

import React from 'react';

const Navbar = ({changeMode, mode, modeText, moonMode}) => {
  return (
    <nav className={`navbar ${mode}`}>
      <div>
        <h3>Where in the world?</h3>
      </div>
      <div>
        <button className="mode-button" onClick={() => changeMode()}>
          <i className={moonMode}></i>
          <p className="mode-name">{modeText}</p>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;

import React from 'react';

const SearchBar = () => {
  return (
    <div className="container mb-auto mt-2 ">
      <nav className="navbar  bg-white">
        <form className="form-inline">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fas fa-search-location"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="search for a country..."
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </form>
      </nav>
      {/* -- drop down --*/}
      <nav className="navbar navbar-expand-lg   navbar-light bg-light mr-3">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-dark"
              href="/"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Filter by Region
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="/">
                {' '}
                All
              </a>
              <a className="dropdown-item" href="/">
                Africa
              </a>
              <a className="dropdown-item" href="/">
                America
              </a>
              <a className="dropdown-item" href="/">
                Asia
              </a>
              <a className="dropdown-item" href="/">
                Europe
              </a>
              <a className="dropdown-item" href="/">
                Oceania
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SearchBar;

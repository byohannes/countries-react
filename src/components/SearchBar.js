import React from 'react';

const SearchBar = ({handleInput}) => {
  return (
    <div className="container mb-auto mt-2 ">
      <div className="form-group has-search">
        <span className="fa fa-search form-control-feedback"></span>
        <input
          type="text"
          onInput={(e) => handleInput(e)}
          className="input-control"
          placeholder="search for a country..."
        />
      </div>
    </div>
  );
};

export default SearchBar;

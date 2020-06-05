import React from 'react';

const SearchBar = ({handleInput}) => {
  return (
    <div className="container mb-auto mt-2 ">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className="fas fa-search"></i>
        </span>
      </div>
      <input
        type="text" 
        onInput={(e) => handleInput(e)}
        className="input-control"
        placeholder="search for a country..."
      />
    </div>
  );
};

export default SearchBar;

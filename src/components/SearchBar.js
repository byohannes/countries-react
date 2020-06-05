import React from 'react';

const SearchBar = ({handleInput, handleSelect}) => {
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
      <select className="dropdown" onChange={(e) => handleSelect(e)}>
        <option value="" defaultValue>
          Filter by Region
        </option>
        <option
          className="item"
          value="Africa"
          onChange={(e) => handleSelect(e)}
        >
          Africa
        </option>
        <option
          className="item"
          value="America"
          onChange={(e) => handleSelect(e)}
        >
          America
        </option>
        <option className="item" value="Asia" onChange={(e) => handleSelect(e)}>
          Asia
        </option>
        <option
          className="item"
          value="Europe"
          onChange={(e) => handleSelect(e)}
        >
          Europe
        </option>
        <option
          className="item"
          value="Oceania"
          onChange={(e) => handleSelect(e)}
        >
          Oceania
        </option>
      </select>
    </div>
  );
};

export default SearchBar;

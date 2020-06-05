import React, {useState, useEffect} from 'react';
import {Navbar, Country, SearchBar} from './components';
import './App.css';

const App = () => {
  const [darkMode, setMode] = useState(false);
  const [regionFilter, setRegionFilter] = useState('');
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then(
        (data) => {
          setCountries(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSelect = (e) => {
    console.log(e.target.value);
    setRegionFilter(e.target.value);
  };

  const filteredCountries = countries
    .filter((country) =>
      country.region.toLowerCase().includes(regionFilter.toLowerCase())
    )
    .filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const changeMode = () => {
    setMode(!darkMode);
  };

  return (
    <>
      <Navbar
        changeMode={changeMode}
        mode={darkMode ? 'mode-dark' : 'mode-light'}
        modeText={darkMode ? 'Light Mode' : 'Dark Mode'}
        moonMode={darkMode ? 'fa fa-sun-o' : 'fa fa-moon-o'}
      />
      <SearchBar handleInput={handleInput} handleSelect={handleSelect} />
      <div className=" container">
        <div className="row">
          {filteredCountries
            .filter(
              (country) =>
                searchTerm === '' ||
                country.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((country, index) => (
              <Country key={index} countryInfo={country} />
            ))}
        </div>
      </div>
    </>
  );
};

export default App;

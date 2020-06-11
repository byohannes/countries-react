import React, {useState, useEffect} from 'react';
import {Navbar, Country, SearchBar, CountryDetails} from './components';
import './App.css';

const App = () => {
  const [darkMode, setMode] = useState(false);
  const [regionFilter, setRegionFilter] = useState('');
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [isCountryClicked, setIsCountryClicked] = useState(false);
  const [clickedCountry, setClickedCountry] = useState({});
  const [showFilter, setShowFilter] = useState(false);

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
    setSearchInput(e.target.value);
  };
  const handleSelect = (e) => {
    console.log(e.target.value);
    setRegionFilter(e.target.value);
  };
  const formatNumber = (num) =>
    num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  const changeMode = () => {
    setMode(!darkMode);
  };
  const filteredCountries = countries
    .filter((country) =>
      country.region.toLowerCase().includes(regionFilter.toLowerCase())
    )
    .filter((country) =>
      country.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  return (
    <>
      <Navbar
        changeMode={changeMode}
        mode={darkMode ? 'mode-dark' : 'mode-light'}
        modeText={darkMode ? 'Light Mode' : 'Dark Mode'}
        moonMode={darkMode ? 'fa fa-sun-o' : 'fa fa-moon-o'}
      />
      {showFilter ? null : (
        <SearchBar handleInput={handleInput} handleSelect={handleSelect} />
      )}

      {!isCountryClicked ? (
        <div className=" container">
          <div className="row">
            {filteredCountries.map((country) => (
              <Country
                key={country.name}
                countryInfo={country}
                setIsCountryClicked={setIsCountryClicked}
                setClickedCountry={setClickedCountry}
                formatNumber={formatNumber}
                mode={darkMode ? 'mode-dark' : 'mode-light'}
              />
            ))}
          </div>
        </div>
      ) : (
        <CountryDetails
          clickedCountry={clickedCountry}
          setClickedCountry={setClickedCountry}
          setIsCountryClicked={setIsCountryClicked}
          formatNumber={formatNumber}
          filteredCountries={filteredCountries}
          setShowFilter={setShowFilter}
        />
      )}
    </>
  );
};

export default App;

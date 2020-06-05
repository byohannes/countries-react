import React, {useState, useEffect} from 'react';
import {Navbar, Country, SearchBar} from './components';
import './App.css';

const App = () => {
  const [darkMode, setMode] = useState(false);
  const [error, setError] = useState(null);
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
          setError(error);
        }
      );
  }, []);

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const changeMode = () => {
    setMode(!darkMode);
  };
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Navbar
        changeMode={changeMode}
        mode={darkMode ? 'mode-dark' : 'mode-light'}
        modeText={darkMode ? 'Light Mode' : 'Dark Mode'}
        moonMode={darkMode ? 'fa fa-sun-o' : 'fa fa-moon-o'}
      />
      <SearchBar handleInput={handleInput} />
      <div className=" container">
        <div className="row">
          {countries
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

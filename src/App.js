import React, {useState, useEffect} from 'react';
import {Navbar,CountryCards,SearchBar} from './components';
import './App.css';

const App = () => {
  const [darkMode, setMode] = useState(false);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(
      'https://restcountries.eu/rest/v2/all?fields=flag;name;population;region;capital'
    )
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
        mode={darkMode ? '' : 'light'}
        modeText={darkMode ? 'Light Mode' : 'Dark Mode'}
        moonMode={darkMode ? 'fa fa-sun-o' : 'fa fa-moon-o'}
      />
      <SearchBar />
      <CountryCards countryDetails={countries} />
    </>
  );
};

export default App;

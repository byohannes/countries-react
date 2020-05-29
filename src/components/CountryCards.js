import React from 'react';
import Country from './Country';

const CountryCards = ({countryDetails}) => {
  return (
    <div className="container">
      <div className="row">
        {countryDetails.map((country, index) => (
          <Country key={index} countryInfo={country} />
        ))}
      </div>
    </div>
  );
};
export default CountryCards;

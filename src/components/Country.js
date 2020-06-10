import React from 'react';

const Country = ({countryInfo, setIsCountryClicked, setClickedCountry}) => {
  const handleClick = () => {
    setIsCountryClicked(true);
    setClickedCountry(countryInfo);
  };

  const formatNumber = (num) =>
    num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  return (
    <div
      className="col-sm-12 col-md-4 col-lg-3 mb-sm-2 mb-md-2 mt-md-3 mb-lg-3 mt-lg-3 p-2 page"
      onClick={handleClick}
    >
      <div className="card">
        <img
          src={countryInfo.flag}
          className="card-img-top border-secondary"
          alt={countryInfo.name}
        />
        <div className="card-body">
          <h5 className="card-title">{countryInfo.name}</h5>
          <p className="card-text">
            <b>Population: </b>
            {formatNumber(countryInfo.population)}
          </p>
          <p className="card-text">
            <b>Region: </b>
            {countryInfo.region}
          </p>
          <p className="card-text">
            <b>Capital: </b>
            {countryInfo.capital}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Country;

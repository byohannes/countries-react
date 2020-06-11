import React from 'react';

const CountryDetails = ({
  clickedCountry,
  setIsCountryClicked,
  formatNumber,
  filteredCountries,
  setClickedCountry,
}) => {
  const handleBackButton = () => {
    setIsCountryClicked(false);
  };
  const getCountryByCode = (countries, code) => {
    return countries.find((country) => country.alpha3Code === code);
  };

  return (
    <div>
      <div className="back-btn-div">
        <button
          className="btn btn-outline-secondary backButton"
          onClick={handleBackButton}
        >
          Back
        </button>
      </div>
      <div className="flag-image-div">
        <img
          className="flag-image-lrg"
          src={clickedCountry.flag}
          alt={clickedCountry.name}
        />
      </div>
      <h2 className="mt-sm-3">{clickedCountry.name}</h2>
      <div className="mt-sm-5 d-flex">
        <div className="mr-1 country-details">
          <p>
            <strong>Native Name: </strong>
            {clickedCountry.nativeName}
          </p>
          <p>
            <strong>Population: </strong>
            {formatNumber(clickedCountry.population)}
          </p>
          <p>
            <strong>Region: </strong>
            {clickedCountry.region}
          </p>
          <p>
            <strong>Sub Region: </strong>
            {clickedCountry.subregion}
          </p>
          <p>
            <strong>Capital: </strong>
            {clickedCountry.capital}
          </p>
        </div>
        <div className=" d-flex flex-column">
          <p className="d-flex">
            <strong id="details-right">Top Level Domain: </strong>
            {clickedCountry.topLevelDomain[0]}
          </p>
          <p className=" d-flex">
            <strong id="details-right">Currencies: </strong>
            {clickedCountry.currencies.map((currency) => currency.code)}
          </p>
          <p className=" d-flex">
            <strong id="details-right">Languages: </strong>
            {clickedCountry.languages.map((language) => language.name)}
          </p>
        </div>
      </div>

      <div className="mb-sm-1 d-flex mr-sm-5">
        <p className="d-flex mt-sm-2 mr-sm-2">
          <strong>Border Countries: </strong>
        </p>
        {clickedCountry.borders.length > 0 ? (
          <p className="d-inline-flex borders">
            {clickedCountry.borders.map((border) => (
              <button
                type="button"
                key={border}
                className="d-flex justify-content-start mr-md-2 btn btn-outline-secondary border-buttons borderCountries"
                onClick={() => {
                  setClickedCountry(
                    getCountryByCode(filteredCountries, border)
                  );
                }}
              >
                {getCountryByCode(filteredCountries, border).name}
              </button>
            ))}
          </p>
        ) : (
          'No Borders'
        )}
      </div>
    </div>
  );
};

export default CountryDetails;

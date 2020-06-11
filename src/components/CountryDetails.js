import React from 'react';

const CountryDetails = ({
  clickedCountry,
  setIsCountryClicked,
  formatNumber,
  filteredCountries,
  setClickedCountry,
  setShowFilter,
}) => {
  setShowFilter(true);
  const handleBackButton = () => {
    setIsCountryClicked(false);
    setShowFilter(false);
  };
  const formatLanguages = (languages) => {
    let languagesOfCountry = '';
    languages.forEach(
      (language, index) =>
        (languagesOfCountry +=
          index !== languages.length - 1 ? language.name + ', ' : language.name)
    );
    return languagesOfCountry;
  };
  const getCountryByCode = (countries, code) => {
    return countries.find((country) => country.alpha3Code === code);
  };

  return (
    <div className="container info">
      <div className="row-info">
        <button
          className="btn btn-outline-secondary backButton"
          onClick={handleBackButton}
        >
          Back
        </button>
      </div>
      <div className="row-info ">
        <div className="row-info row col-12 d-flex details">
          <div className="ml-auto image-info col-12 col-md-6">
            <img
              className="countryImg"
              src={clickedCountry.flag}
              alt={clickedCountry.name}
            />
          </div>
          <div className="col-12  col-sm-12 col-md-12  col-lg-6 info-body">
            <h2 className="mt-sm-3 text-center">{clickedCountry.name}</h2>
            <div className="mt-sm-3 d-flex country-details">
              <div className="mr-2 ">
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
              <div className=" d-flex flex-column mr-2">
                <p className="d-flex">
                  <strong>Top Level Domain:</strong>{' '}
                  {clickedCountry.topLevelDomain[0]}
                </p>
                <p className=" d-flex">
                  <strong>Currencies: </strong>
                  {clickedCountry.currencies.map((currency) => currency.name)}
                </p>
                <p className=" d-flex">
                  <strong>Languages: </strong>
                  {formatLanguages(clickedCountry.languages)}
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
                      className="d-flex justify-content-start mr-md-2 btn btn-outline-secondary border-buttons"
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
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;

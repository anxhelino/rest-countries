import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import ModeContext from "../components/context/ModeContext";
import Spinner from "../components/Spinner";

function Country() {
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);
  const { darkMode } = useContext(ModeContext);

  const params = useParams();
  console.log(params.countryName);
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res =
          await fetch(`https://restcountries.com/v2/name/${params.countryName}
      `);
        const data = await res.json();
        console.log(data[0]);
        setLoading(false);
        setCountry(data[0]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCountry();
  }, [params.countryName]);

  console.log(country);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className={`detailsContainer`}>
      <Link
        to="/"
        className={`backLink ${
          darkMode === false
            ? "backgroundWhiteElement textColorForWhite"
            : "backgroundColorElement darkModeText"
        }`}
      >
        <FontAwesomeIcon icon={faArrowLeftLong} />
        <span className="back">Back</span>
      </Link>
      <div className="flex">
        <div className="imageDescription">
          <img src={country.flags?.png} alt="" />
        </div>

        <div
          className={`details ${
            darkMode === false ? "textColorForWhite" : "darkModeText"
          }`}
        >
          <div className="mainDetails">
            <h1>{country.name}</h1>
            <p>
              <span className="title">Native Name: </span>
              {country.nativeName}
            </p>
            <p>
              <span className="title">Population: </span>
              {country.population}
            </p>
            <p>
              <span className="title">Region: </span>
              {country.region}
            </p>
            <p>
              <span className="title">Sub region: </span>
              {country.subRegion}
            </p>
            <p>
              <span className="title">Capital: </span>
              {country?.capital}
            </p>
          </div>
          <div className="otherDetails">
            <p>
              <span className="title">Top Level Domain: </span>
              {country?.topLevelDomain[0]}
            </p>
            <p>
              <span className="title">Currencies: </span>
              {country.currencies[0].name}
            </p>
            <p>
              <span className="title">Languages: </span>
              {country.languages.map((lang, i) => {
                return lang.name + " ";
              })}
            </p>
          </div>
          <div className="detailsBorder">
            {country.borders && <p className="title">Border Countries:</p>}
            {country.borders &&
              country.borders.map((country, i) => {
                return (
                  <span
                    key={i}
                    className={`borders ${
                      darkMode === false
                        ? "backgroundForWhite"
                        : "backgroundColorElement"
                    }`}
                  >
                    {country}{" "}
                  </span>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;

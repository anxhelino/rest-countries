import { Link } from "react-router-dom";
import ModeContext from "./context/ModeContext";
import { useContext } from "react";
function Card({ name, population, region, capital, flag }) {
  const { darkMode } = useContext(ModeContext);

  return (
    <>
      <Link
        to={`/country/${name}`}
        className={`${
          darkMode === false ? "textColorForWhite" : "darkModeText"
        }`}
      >
        <div
          className={`card ${
            darkMode === false
              ? "backgroundWhiteElement"
              : "backgroundColorElement"
          } `}
        >
          <img src={flag} alt="image" />

          <div className="description">
            <h1>{name}</h1>
            <p>
              <span className="title"> Population: </span> {population}
            </p>
            <p>
              <span className="title"> Region: </span> {region}
            </p>
            <p>
              <span className="title"> Capital: </span>
              {capital}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;

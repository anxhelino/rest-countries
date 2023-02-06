import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import ModeContext from "./context/ModeContext";
import { useContext } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const { darkMode } = useContext(ModeContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    navigate(`/country/${search}`);
  };

  const setRegion = (e) => {
    navigate(`/${e.target.className}`);
  };

  return (
    <div
      className={`searchContainer ${
        darkMode === false ? " backgroundForWhite" : "backgroundColorDark"
      }`}
    >
      <div className="inputContainer">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search for a country..."
            className={`inputBox ${
              darkMode === false
                ? "backgroundWhiteElement placeholderBlack textColorForWhite"
                : "backgroundColorElement placeholderWhite darkModeText"
            }`}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="sm"
            className={`searchIcon ${
              darkMode === false ? "inputForWhite" : "darkModeText"
            }`}
          />
        </form>
      </div>
      <div className="dropdown">
        <button
          className={`dropbtn ${
            darkMode === false
              ? "backgroundWhiteElement textColorForWhite"
              : "backgroundColorElement darkModeText"
          }`}
        >
          Filter by Region{" "}
          <span>
            <FontAwesomeIcon icon={faAngleDown} size="sm" />
          </span>
        </button>
        <div
          className={`dropdown-content ${
            darkMode === false
              ? "backgroundWhiteElement"
              : "backgroundColorElement darkModeText"
          }`}
        >
          <p className="africa" onClick={setRegion}>
            Africa
          </p>
          <p className="america" onClick={setRegion}>
            America
          </p>
          <p className="asia" onClick={setRegion}>
            Asia
          </p>
          <p className="europe" onClick={setRegion}>
            Europe
          </p>
          <p className="oceania" onClick={setRegion}>
            Oceania
          </p>
        </div>
      </div>
    </div>
  );
}

export default Search;

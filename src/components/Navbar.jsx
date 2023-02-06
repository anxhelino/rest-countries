import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import ModeContext from "./context/ModeContext";
import { useContext } from "react";
import { useEffect } from "react";

function Navbar() {
  const { darkMode, setDarkMode } = useContext(ModeContext);

  useEffect(() => {
    if (darkMode === true) {
      document.querySelector("html").style.backgroundColor =
        "hsl(207, 26%, 17%)";
      document.querySelector("#root").classList.add("backgroundColorDark");
    } else {
      document.querySelector("#root").classList.remove("backgroundColorDark");
      document.querySelector("html").style.backgroundColor = "hsl(0, 0%, 98%)";
    }
  }, [darkMode]);

  return (
    <header
      className={`${
        darkMode === false ? " backgroundWhiteElement" : "backgroundColorDark"
      }`}
    >
      <Link to={"/"}>
        <h1
          className={`${
            darkMode === false ? " textColorForWhite" : "darkModeText"
          }`}
        >
          Where in the world ?
        </h1>
      </Link>
      <div className="darkButton" onClick={() => setDarkMode(!darkMode)}>
        <FontAwesomeIcon
          icon={faMoon}
          size="lg"
          className={`${
            darkMode === false ? " textColorForWhite" : "darkModeText"
          }`}
        />
        <p
          className={`${
            darkMode === false ? " textColorForWhite" : "darkModeText"
          }`}
        >
          {darkMode === false ? "Dark Mode" : "Light Mode"}
        </p>
      </div>
    </header>
  );
}

export default Navbar;

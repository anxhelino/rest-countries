import { useState, useEffect } from "react";
import Card from "./Card";
import Spinner from "./Spinner";
import { useParams } from "react-router-dom";
import ModeContext from "./context/ModeContext";
import { useContext } from "react";

function Cards() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const { darkMode } = useContext(ModeContext);

  const params = useParams();

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true);
      let resp;
      if (params.region) {
        resp =
          await fetch(`https://restcountries.com/v3.1/region/${params.region}
        `);
      } else {
        resp = await fetch("https://restcountries.com/v3.1/all");
      }
      const data = await resp.json();
      setLoading(false);
      setCountries([...data.slice(0, 8)]);
    };

    getCountries();
  }, [params]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div
      className={`card-container ${
        darkMode === false ? "backgroundForWhite" : "backgroundColorDark"
      }`}
    >
      {countries.map((data) => {
        return (
          <Card
            key={data.name.common}
            name={data.name.common}
            population={data.population}
            region={data.region}
            capital={data.capital[0]}
            flag={data.flags.png}
          />
        );
      })}
    </div>
  );
}

export default Cards;

import { useEffect, useState } from "react";
import DATA from "../data";
import CountryAndCapital from "./CountryAndCapital";

export default function Countries({ selectedCapital }) {
  const [countries, setCountries] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchCountries = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.length === 0 && url === `${DATA}/capital/${selectedCapital}`) {
          setShowAll(true);
          const allResponse = await fetch(`${DATA}/all`);
          const allData = await allResponse.json();
          setCountries(allData);
        } else {
          setCountries(data);
          setShowAll(false);
        }
      } catch (error) {
        console.log("Error");
      }
    };

    if (selectedCapital) {
      fetchCountries(`${DATA}/capital/${selectedCapital}`);
    } else {
      fetchCountries(`${DATA}/all`);
    }
  }, [selectedCapital]);

  return (
    <ul>
      {countries.length > 0 ? (
        countries.map((country) => (
          <CountryAndCapital
            key={country.cca3}
            name={country.name.common}
            capital={country.capital ? country.capital[0] : "No capital"}
          />
        ))
      ) : (
        <p>No countries found for this capital.</p>
      )}
    </ul>
  );
}

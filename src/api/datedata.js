import React, { useState, useEffect } from "react";
import { Chart, Picker } from "../components/common";
import { getDate, CountryList } from "../utilities/utils";

export const DateData = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [setting, setSetting] = useState("thirty");
  const [country, setCountry] = useState("canada");
  const [typeSetting, setTypeSetting] = useState("confirmed");
  const [load, setLoad] = useState(true);

  const countrySetter = (value) => {
    let temp = value.replace(/\s+/g, "-");
    if (CountryList.includes(temp)) {
      setCountry(temp);
    }
  };

  useEffect(() => {
    if (setting === "all") {
      setLoad(false);
      fetch(
        `https://api.covid19api.com/total/dayone/country/${country}/status/${typeSetting}`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setData(result);
            setLoad(true);
            setTimeout(() => {
              setLoaded(true);
            }, 3000);
          },
          (error) => {
            setError(error.TypeError);
          }
        );
    }
    if (setting === "thirty") {
      setLoad(false);
      fetch(
        `https://api.covid19api.com/total/country/${country}/status/${typeSetting}?from=${getDate(
          30
        )}T00:00:00Z&to=${getDate()}T00:00:00Z`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setData(result);
            setLoad(true);
            setTimeout(() => {
              setLoaded(true);
            }, 3000);
          },
          (error) => {
            setError(error.TypeError);
          }
        );
    }
    if (setting === "seven") {
      setLoad(false);
      fetch(
        `https://api.covid19api.com/total/country/${country}/status/${typeSetting}?from=${getDate(
          7
        )}T00:00:00Z&to=${getDate()}T00:00:00Z`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setData(result);
            setLoad(true);
            setTimeout(() => {
              setLoaded(true);
            }, 3000);
          },
          (error) => {
            setError(error.TypeError);
          }
        );
    }
  }, [setting, country, typeSetting]);

  return (
    <div>
      {error ? <div>{error}</div> : <div />}
      {isLoaded ? (
        <div>
          <Picker
            info={load}
            settingtype={typeSetting}
            setting={setting}
            days={(event) => setSetting(event.target.value)}
            type={(event) => setTypeSetting(event.target.value)}
            changed={(event) =>
              countrySetter(event.target.value.toLocaleLowerCase())
            }
            country={country.charAt(0).toUpperCase() + country.slice(1)}
          ></Picker>
          <Chart data={data}></Chart>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};
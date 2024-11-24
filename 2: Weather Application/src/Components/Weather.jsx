import React, { useEffect, useRef } from "react";
import "./Weather.css";
// import "./WeatherIcon.jsx";
import search_icon from "../assets/images/search.png";
import clear from "../assets/images/clear.png";
import cloud from "../assets/images/cloud.png";
import drizzle from "../assets/images/drizzle.png";
import humidity from "../assets/images/humidity.png";
import rain from "../assets/images/rain.png";
import snow from "../assets/images/snow.png";
import wind from "../assets/images/wind.png";

import axios from "axios";

import { useState } from "react";

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": clear,
    "01n": clear,
    "02d": cloud,
    "02n": cloud,
    "03d": cloud,
    "03n": cloud,
    "04d": drizzle,
    "04n": drizzle,
    "05d": drizzle,
    "05n": drizzle,
    "06d": drizzle,
    "06n": drizzle,
    "07d": drizzle,
    "07n": drizzle,
    "08d": rain,
    "08n": rain,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "11d": clear,
    "11n": clear,
    "12d": cloud,
    "12n": cloud,
    "13d": cloud,
    "13n": cloud,
    "14d": drizzle,
    "14n": drizzle,
    "15d": drizzle,
    "15n": drizzle,
    "16d": drizzle,
    "16n": drizzle,
    "17d": drizzle,
    "17n": drizzle,
    "18d": rain,
    "18n": rain,
    "19d": rain,
    "19n": rain,
    "20d": rain,
    "20n": rain,
    "21d": clear,
    "21n": clear,
    "22d": cloud,
    "22n": cloud,
    "23d": cloud,
    "23n": cloud,
    "24d": drizzle,
    "24n": drizzle,
    "25d": drizzle,
    "25n": drizzle,
    "26d": drizzle,
    "26n": drizzle,
    "27d": drizzle,
    "27n": drizzle,
    "28d": rain,
    "28n": rain,
    "29d": rain,
    "29n": rain,
    "30d": rain,
    "30n": rain,
    "31d": clear,
    "31n": clear,
    "32d": cloud,
    "32n": cloud,
    "33d": cloud,
    "33n": cloud,
    "34d": drizzle,
    "34n": drizzle,
    "35d": drizzle,
    "35n": drizzle,
    "36d": drizzle,
    "36n": drizzle,
    "37d": drizzle,
    "37n": drizzle,
    "38d": rain,
    "38n": rain,
    "39d": rain,
    "39n": rain,
    "40d": rain,
    "40n": rain,
    "41d": clear,
    "41n": clear,
    "42d": cloud,
    "42n": cloud,
    "43d": cloud,
    "43n": cloud,
    "44d": drizzle,
    "44n": drizzle,
    "45d": drizzle,
    "45n": drizzle,
    "46d": drizzle,
    "46n": drizzle,
    "47d": drizzle,
    "47n": drizzle,
    "48d": snow,
    "48n": rain,
    "49d": rain,
    "49n": rain,
    "50d": rain,
    "50n": rain,
    "51d": clear,
    "51n": clear,
    "52d": cloud,
    "52n": cloud,
    "53d": cloud,
    "53n": cloud,
    "54d": drizzle,
    "54n": drizzle,
    "55d": drizzle,
    "55n": drizzle,
    "56d": drizzle,
    "56n": drizzle,
    "57d": drizzle,
    "57n": drizzle,
    "58d": rain,
    "58n": rain,
    "59d": rain,
    "59n": rain,
    "60d": rain,
    "60n": rain,
    "61d": clear,
    "61n": clear,
    "62d": cloud,
    "62n": cloud,
    "063d": cloud,
    "63n": cloud,
    "64d": drizzle,
    "64n": drizzle,
    "65d": drizzle,
    "65n": drizzle,
    "66d": drizzle,
    "66n": drizzle,
    "67d": drizzle,
    "67n": drizzle,
    "68d": rain,
    "68n": rain,
    "69d": rain,
    "69n": rain,
    "70d": rain,
    "70n": rain,
    "71d": clear,
    "71n": clear,
    "72d": cloud,
    "72n": cloud,
    "73d": cloud,
    "73n": cloud,
    "74d": drizzle,
    "74n": drizzle,
    "75d": drizzle,
    "75n": drizzle,
    "76d": drizzle,
    "76n": drizzle,
    "77d": drizzle,
    "77n": drizzle,
    "78d": rain,
    "78n": rain,
    "79d": rain,
    "79n": rain,
    "80d": rain,
    "80n": rain,
    "81d": clear,
    "81n": clear,
    "82d": cloud,
    "82n": cloud,
    "83d": cloud,
    "83n": cloud,
    "84d": drizzle,
    "84n": drizzle,
    "85d": drizzle,
    "85n": drizzle,
    "86d": drizzle,
    "86n": drizzle,
    "87d": drizzle,
    "87n": drizzle,
    "88d": rain,
    "88n": rain,
    "89d": rain,
    "89n": rain,
    "90d": rain,
    "90n": rain,
    "91d": clear,
    "91n": clear,
    "92d": cloud,
    "92n": cloud,
    "93d": cloud,
    "93n": cloud,
    "94d": drizzle,
    "94n": drizzle,
    "95d": drizzle,
    "95n": drizzle,
    "96d": drizzle,
    "96n": drizzle,
    "97d": drizzle,
    "97n": drizzle,
    "98d": rain,
    "98n": rain,
    "99d": rain,
    "99n": rain,
    "100d": rain,
    "100n": rain
    

    
  };

  let submitHandler = async (city) => {
    if (city === "") {
      alert("Enter any City Name!");
      return;
    }

    console.log("I am submit handler function");

    try {
      let response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=83922a5a9570ad51b5dda76cec84252f`
      );

      console.log("response: ", response);

      const icon = allIcons[response.data.weather[0].icon || clear];
      setWeatherData({
        humidity: response.data.main.humidity,
        windSpeed: response.data.wind.speed,
        temperature: Math.floor(response.data.main.temp),
        location: response.data.name,
        icon: icon,
      });
    } catch (error) {
      console.log("error in api call: ", error);
    }
  };

  useEffect(() => {
    submitHandler("Lahore");
  }, []);

  return (
    <div className="weather">
      <div className="searchBar">
        <input ref={inputRef} type="text" placeholder="Enter City Name"></input>
        <img
          src={search_icon}
          alt="Search Icon"
          onClick={() => submitHandler(inputRef.current.value)}
        ></img>
      </div>
      <img
        src={weatherData.icon}
        alt="Weather image"
        className="weatherIcon"
      ></img>
      <p className="temperature">{weatherData.temperature} °C</p>
      <p className="location">{weatherData.location}</p>

      {/* Weather Data */}

      <div className="weatherData">
        <div className="column">
          <img src={humidity} alt="Humidity"></img>
          <div>
            <p>{weatherData.humidity}%</p>
            <span>Humidity</span>
          </div>
        </div>

        <div className="column">
          <img src={wind} alt="windSpeed"></img>
          <div>
            <p>{weatherData.windSpeed} Km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;

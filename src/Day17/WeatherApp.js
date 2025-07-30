import { useState } from "react";
import "../App.css";
import axios from "axios";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) {
      setErrorMsg("Please enter a city name.");
      setWeather(null);
      return;
    }
    try {
      setErrorMsg("");
      setLoading(true);
      //axios
      //use axios insetad fetch
      const responce = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: city,
            appid: process.env.REACT_APP_WEATHER_API_KEY,
            units: "metric",
          },
        }
      );
      const data = responce.data;

      console.log("responce: ", data);

      setWeather(data);
      setErrorMsg("");
    } catch (error) {
      console.error("Axios Error:", error); 

      setWeather(null);
      if (error.response?.status === 404) {
        setErrorMsg("City not found.");
      } else {
        setErrorMsg("Unable to fetch weather, try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="weather-app">
      <h2 className="weather-title">Weather App</h2>

      <div className="weather-input-section">
        <input
          value={city}
          className="weather-input"
          type="text"
          placeholder="Enter City Name"
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
        />
        <button className="weather-button" onClick={fetchWeather}>
          Search
        </button>
      </div>

      {errorMsg && <p className="weather-error">{errorMsg}</p>}
      {loading && <p className="weather-loading">Loading weather data...</p>}

      {weather && (
        <div className="weather-details-main">
          <div className="weather-information">
            <h2>{weather.name}</h2>
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Weather: {weather.weather[0].main}</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
            <p>Humidity: {weather.main.humidity}%</p>
          </div>
          <div className="weather-advice">
            <ul>
              {weather.weather[0].main === "Rain" && (
                <li>🌧️ It's rainy — carry an umbrella!</li>
              )}
              {weather.weather[0].main === "Clear" &&
                weather.main.temp > 30 && (
                  <li>☀️ It's hot — stay hydrated and wear sunscreen!</li>
                )}
              {weather.main.temp < 15 && (
                <li>🧥 It's cold — wear warm clothes!</li>
              )}
              {weather.wind.speed > 10 && (
                <li>💨 Windy outside — secure loose items!</li>
              )}
              {weather.main.humidity > 70 && (
                <li>💧 Humidity is high — avoid too much outdoor activity.</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

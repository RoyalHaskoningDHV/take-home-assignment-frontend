import React, { useEffect, useState, useCallback } from "react";
import { getWeather, getForecast } from "./api";
import type { currentWeatherResponse, weatherForecastResponse } from "./types";
import { Header, Loading, WeatherCard, WeatherForecast } from "./components";
import { getGeoLocation } from "./utils";

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isReadingGeolocation, setIsReadingGeolocation] = useState(false);
  const [geolocation, setGeolocation] = useState<{
    lat: number;
    lon: number;
  } | null>(null);
  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState<currentWeatherResponse | null>(
    null
  );
  const [forecastData, setForecastData] =
    useState<weatherForecastResponse | null>(null);

  async function onReadGeolocation() {
    setSearch("");
    setIsReadingGeolocation(true);
    const { successful, data } = await getGeoLocation();
    setIsReadingGeolocation(false);

    if (!successful) return;

    setGeolocation({ lat: data.coords.latitude, lon: data.coords.longitude });
  }
  async function onGetWeatherByGeolocation() {
    if (!geolocation) return;

    try {
      setIsLoading(true);
      const { lat, lon } = geolocation;
      const [weather, forecast] = await Promise.all([
        getWeather({ lat, lon }),
        getForecast({ lat, lon }),
      ]);

      setWeatherData(weather);
      setForecastData(forecast);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      alert(
        "Something went wrong while trying to get weather data. Please try again"
      );
    }
  }
  useEffect(() => {
    onGetWeatherByGeolocation();
  }, [geolocation]);

  const onGetByCityName = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;

    onGetWeatherByCityName();
  };
  async function onGetWeatherByCityName() {
    if (!search) return;

    try {
      setIsLoading(true);
      const [weather, forecast] = await Promise.all([
        getWeather({ cityName: search }),
        getForecast({ cityName: search }),
      ]);

      setWeatherData(weather);
      setForecastData(forecast);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      alert(
        error.message ||
          "Something went wrong while trying to get weather data. Please try again"
      );
    }
  }

  return (
    <div>
      <Header
        shouldShrink={!!weatherData && !!forecastData && !isLoading}
        isLoading={isLoading}
        search={search}
        onSearchChange={setSearch}
        onReadGeolocation={onReadGeolocation}
        onGetByCityName={onGetByCityName}
        isReadingGeolocation={isReadingGeolocation}
      />

      {!!weatherData && !!forecastData && !isLoading && (
        <main>
          <WeatherCard
            title={weatherData.name
              .concat(", ")
              .concat(weatherData.sys.country.toUpperCase())}
            temperature={weatherData.main.temp}
            feelsLike={weatherData.main.feels_like}
            maxTemperature={weatherData.main.temp_max}
            minTemperature={weatherData.main.temp_min}
            icon={weatherData.weather[0].icon}
          />
          {/* <WeatherForecast /> */}
        </main>
      )}

      <Loading isLoading={isLoading} />
    </div>
  );
};

import { useState, useEffect } from "react";
import { getWeather, getForecast } from "../api";
import type { currentWeatherResponse, weatherForecastResponse } from "../types";
import {
  getGeoLocation,
  transformWeatherDataForUi,
  transformForecastDataForUi,
} from "../utils";
import type {
  transformWeatherDataForUiReturn,
  transformForecastDataForUiReturn,
} from "../utils";

export interface useWeatherReturnType {
  isFetchingData: boolean;
  isReadingGeolocation: boolean;
  cityName: string;
  updateCityName(cityName: string): void;
  weatherData: transformWeatherDataForUiReturn | null;
  forecastData: transformForecastDataForUiReturn | null;
  onReadGeolocation(): Promise<void>;
  onGetByCityName(e: React.KeyboardEvent<HTMLInputElement>): void;
}

export function useWeather(): useWeatherReturnType {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isReadingGeolocation, setIsReadingGeolocation] = useState(false);
  const [geolocation, setGeolocation] = useState<{
    lat: number;
    lon: number;
  } | null>(null);
  const [weatherData, setWeatherData] = useState<currentWeatherResponse | null>(
    null
  );
  const [forecastData, setForecastData] =
    useState<weatherForecastResponse | null>(null);

  // an effect to fetch data by geo location whenever ther's geolocation data in state
  useEffect(() => {
    onGetWeatherByGeolocation();
  }, [geolocation]);

  return {
    isFetchingData: isLoading,
    isReadingGeolocation,
    cityName: search,
    updateCityName: setSearch,
    weatherData: weatherData
      ? transformWeatherDataForUi(weatherData)
      : weatherData,
    forecastData: forecastData
      ? transformForecastDataForUi(forecastData)
      : forecastData,
    onReadGeolocation,
    onGetByCityName,
  };

  async function onReadGeolocation(): Promise<void> {
    setSearch("");
    setIsReadingGeolocation(true);
    const { successful, data } = await getGeoLocation();
    setIsReadingGeolocation(false);

    if (!successful) return;

    setGeolocation({ lat: data.coords.latitude, lon: data.coords.longitude });
  }

  async function onGetWeatherByGeolocation(): Promise<void> {
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
        "Something went wrong while trying to get weather data by Geolocation. Please try again"
      );
    }
  }

  function onGetByCityName(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.key !== "Enter") return;

    onGetWeatherByCityName();
  }

  async function onGetWeatherByCityName(): Promise<void> {
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
          "Something went wrong while trying to get weather data by CityName. Please try again"
      );
    }
  }
}

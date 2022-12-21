import { currentWeatherResponse } from "../types";
import { makeLargeIconUrl } from "./make-icon-url";

export interface transformWeatherDataForUiReturn {
  title: string;
  temp: number;
  feelsLike: number;
  maxTemp: number;
  minTemp: number;
  icon: string;
}
export function transformWeatherDataForUi(
  data: currentWeatherResponse
): transformWeatherDataForUiReturn {
  return {
    title: data.name.concat(", ").concat(data.sys.country.toUpperCase()),
    temp: Math.round(data.main.temp),
    feelsLike: Math.round(data.main.feels_like),
    maxTemp: Math.round(data.main.temp_max),
    minTemp: Math.round(data.main.temp_min),
    icon: makeLargeIconUrl(data.weather[0].icon),
  };
}

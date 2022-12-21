import { weatherForecastResponse } from "../types";
import { makeSmallIconUrl } from "./make-icon-url";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export type transformForecastDataForUiReturn = {
  temp: number;
  icon: string;
  day: string;
}[];
export function transformForecastDataForUi(
  data: weatherForecastResponse
): transformForecastDataForUiReturn {
  return data.list
    .filter((w) => w.dt_txt.split(" ")[1] === "12:00:00")
    .map((w) => ({
      temp: Math.round(w.main.temp),
      icon: makeSmallIconUrl(w.weather[0].icon),
      day: DAYS[new Date(w.dt_txt).getDay()],
    }));
}

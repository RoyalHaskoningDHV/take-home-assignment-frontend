import type { currentWeatherResponse, urlParamCompination } from "../types";
import { makeUrl, throwIfNotSuccessful } from "./utils";

export function getWeather(
  params: urlParamCompination
): Promise<currentWeatherResponse> {
  const url = makeUrl(params, "/weather");
  return fetch(url)
    .then((res) => res.json())
    .then(throwIfNotSuccessful);
}

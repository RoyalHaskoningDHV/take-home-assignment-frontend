import type { weatherForecastResponse, urlParamCompination } from "../types";
import { makeUrl, throwIfNotSuccessful } from "./utils";

export function getForecast(
  params: urlParamCompination
): Promise<weatherForecastResponse> {
  const url = makeUrl(params, "/forecast");
  return fetch(url)
    .then((res) => res.json())
    .then(throwIfNotSuccessful);
}

import { urlParams, urlParamCompination } from "../types";
import { OPEN_WEATHER_API_BASEURL } from "./consts";

const APP_ID = "d8f13766532247d78d34dd53f504a95a";

export function createQueryString(params: urlParamCompination): string {
  const searchParams = new URLSearchParams();

  searchParams.set(urlParams.appid, APP_ID);
  searchParams.set(urlParams.units, "metric");
  for (let [key, value] of Object.entries(params)) {
    searchParams.set(urlParams[key as keyof typeof urlParams], `${value}`);
  }

  return searchParams.toString();
}

export function makeUrl(params: urlParamCompination, path: string): string {
  return `${OPEN_WEATHER_API_BASEURL}${path}?${createQueryString(params)}`;
}

export function throwIfNotSuccessful(data: any) {
  const httpStatusCode = Number(data.cod);

  if (httpStatusCode < 200 || httpStatusCode >= 300) {
    throw new Error(
      data.message || "Something went wrond, please try again later"
    );
  }

  return data;
}

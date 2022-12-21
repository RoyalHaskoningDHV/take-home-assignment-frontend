export enum urlParams {
  lat = "lat",
  lon = "lon",
  appid = "appid",
  exclude = "exclude",
  units = "units",
  lang = "lang",
  cityName = "q",
}

export type urlParamCompination =
  | {
      lat: number;
      lon: number;
    }
  | {
      cityName: string;
    };

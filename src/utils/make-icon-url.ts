const OPEN_WEATHER_ICONS_BASEURL = "http://openweathermap.org/img/wn";

export function makeLargeIconUrl(iconPath: string): string {
  return `${OPEN_WEATHER_ICONS_BASEURL}/${iconPath}@4x.png`;
}

export function makeSmallIconUrl(iconPath: string): string {
  return `${OPEN_WEATHER_ICONS_BASEURL}/${iconPath}.png`;
}

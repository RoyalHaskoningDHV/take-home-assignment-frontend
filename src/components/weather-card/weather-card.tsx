import type { transformWeatherDataForUiReturn } from "../../utils";
import styles from "./weather-card.module.css";

interface WeatherCardPrope {
  weather: transformWeatherDataForUiReturn;
}
export function WeatherCard({ weather }: WeatherCardPrope): JSX.Element {
  return (
    <div className={styles.weatherCard}>
      <h4 className={styles.weatherCard__title}>{weather.title}</h4>
      <p className={styles.weatherCard__temp}>
        Current temp: <strong>{weather.temp}°C</strong>
      </p>
      <p className={styles.weatherCard__feelsLike}>
        Feels like: <strong>{weather.feelsLike}°C</strong>
      </p>
      <p className={styles.weatherCard__minMax}>
        Max: <strong>{weather.maxTemp}°C</strong>
        ,
        <span className={styles.weatherCard__minMaxSeparator} />
        Min: <strong>{weather.minTemp}°C</strong>
      </p>

      <img className={styles.weatherCard__weatherIcon} src={weather.icon} />
    </div>
  );
}

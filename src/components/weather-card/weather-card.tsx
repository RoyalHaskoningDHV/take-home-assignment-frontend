import styles from "./weather-card.module.css";

interface WeatherCardPrope {
  title: string;
  temperature: number;
  feelsLike: number;
  maxTemperature: number;
  minTemperature: number;
  icon: string;
}
export function WeatherCard({
  title,
  temperature,
  feelsLike,
  minTemperature,
  maxTemperature,
  icon,
}: WeatherCardPrope): JSX.Element {
  return (
    <div className={styles.weatherCard}>
      <h4 className={styles.weatherCard__title}>{title}</h4>
      <p className={styles.weatherCard__temp}>
        Current temerature: <strong>{Math.round(temperature)}°C</strong>
      </p>
      <p className={styles.weatherCard__feelsLike}>
        Feels like: <strong>{Math.round(feelsLike)}°C</strong>
      </p>
      <p className={styles.weatherCard__minMax}>
        Max: <strong>{Math.round(maxTemperature)}°C</strong>
        ,
        <span className={styles.weatherCard__minMaxSeparator} />
        Min: <strong>{Math.round(minTemperature)}°C</strong>
      </p>

      <img
        className={styles.weatherCard__weatherIcon}
        src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
      />
    </div>
  );
}

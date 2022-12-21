import type { transformForecastDataForUiReturn } from "../../utils";
import styles from "./weather-forecast.module.css";

interface WeatherForecastProps {
  forecast: transformForecastDataForUiReturn;
}
export function WeatherForecast({
  forecast,
}: WeatherForecastProps): JSX.Element {
  return (
    <div className={styles.forecast__container}>
      <h4 className={styles.forecast__title}>Next 5 days Forecast:</h4>
      <ul className={styles.forecast__list}>
        {forecast.map((w) => (
          <li key={w.day}>
            <div className={styles.forecast__listItem}>
              <h5 className={styles.forecast__listItem__temp}>{w.temp}°C</h5>
              <img className={styles.forecast__listItem__icon} src={w.icon} />
              <p className={styles.forecast__listItem__day}>{w.day}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { Header, WeatherCard, WeatherForecast } from "./components";
import { useWeather } from "./hooks";
import styles from "./app.module.css";

export const App: React.FC = () => {
  const {
    isFetchingData,
    isReadingGeolocation,
    cityName,
    updateCityName,
    weatherData,
    forecastData,
    onReadGeolocation,
    onGetByCityName,
  } = useWeather();

  const hasData = !!weatherData && !!forecastData;

  return (
    <div className={styles.app}>
      <Header
        shouldShrink={hasData}
        isLoading={isFetchingData}
        search={cityName}
        onSearchChange={updateCityName}
        onReadGeolocation={onReadGeolocation}
        onGetByCityName={onGetByCityName}
        isReadingGeolocation={isReadingGeolocation}
      />

      {hasData && (
        <main className={styles.mainContent}>
          <WeatherCard weather={weatherData} />
          <WeatherForecast forecast={forecastData} />
        </main>
      )}
    </div>
  );
};

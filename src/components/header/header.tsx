import styles from "./header.module.css";

interface HeaderProps {
  shouldShrink: boolean;
  isLoading: boolean;
  search: string;
  onSearchChange: (newSearch: string) => void;
  onReadGeolocation: () => void;
  onGetByCityName: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  isReadingGeolocation: boolean;
}
export function Header({
  shouldShrink,
  isLoading,
  search,
  onSearchChange,
  onReadGeolocation,
  onGetByCityName,
  isReadingGeolocation,
}: HeaderProps): JSX.Element {
  return (
    <header
      className={styles.header.concat(
        shouldShrink ? ` ${styles.header__hasData}` : ""
      )}
    >
      <h1 className={styles.header__heading}>OpenWeather API app</h1>
      <input
        className={styles.header__search}
        type="text"
        value={search}
        onChange={(ev) => onSearchChange(ev.target.value)}
        onKeyDown={onGetByCityName}
        placeholder="Enter city name and hit `Enter`"
        disabled={isLoading}
      />
      <p className={styles.header__separator}>or</p>
      <button
        className={styles.header__getLocationBtn}
        disabled={isLoading || isReadingGeolocation}
        onClick={onReadGeolocation}
      >
        {isReadingGeolocation
          ? "Reading geolocation from device..."
          : "Get Location from the Browser"}
      </button>
    </header>
  );
}

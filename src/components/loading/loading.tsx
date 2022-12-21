import styles from "./loading.module.css";

export function Loading({ isLoading }: { isLoading: boolean }): JSX.Element {
  return (
    <div
      className={styles.loading.concat(
        isLoading ? ` ${styles.loading__visible}` : ""
      )}
    >
      Loading...
    </div>
  );
}

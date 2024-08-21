import styles from './AvailableLocations.module.css';

export default function AvailableLocations() {
  return (
    <section className={styles.availableLocations}>
      <h2>Locations</h2>

      <div className={styles.ourLocations}>
        <div className={styles.eachLocation}>
          <img src="Photos/icons/location-pin-boldRed.svg" alt="Dubai" />
          <p>Dubai</p>
        </div>

        <span className={styles.verticalLine}></span>

        <div className={styles.eachLocation}>
          <img src="Photos/icons/location-pin-boldRed.svg" alt="Sharjah" />
          <p>Sharjah</p>
        </div>

        <span className={styles.verticalLine}></span>

        <div className={styles.eachLocation}>
          <img src="Photos/icons/location-pin-boldRed.svg" alt="Fujairah" />
          <p>Fujairah</p>
        </div>

        <span className={styles.verticalLine}></span>

        <div className={styles.eachLocation}>
          <img src="Photos/icons/location-pin-boldRed.svg" alt="Abu Dhabi" />
          <p>Abu Dhabi</p>
        </div>

        <span className={styles.verticalLine}></span>

        <div className={styles.eachLocation}>
          <img src="Photos/icons/location-pin-boldRed.svg" alt="Ras Al Khaima" />
          <p>Ras Al Khaima</p>
        </div>
      </div>
    </section>
  );
}

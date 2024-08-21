import styles from './RentalSteps.module.css';

export default function RentalSteps() {
  return (
    <section className={styles.rentalSteps}>
      <h2>Rent/lease in 3 easy steps</h2>

      <div className={styles.threeSteps}>
        <div className={styles.steps}>
          <div className={styles.stepId}>01</div>
          <div className={styles.stepBlock}>
            <img src="Photos/icons/location-pin-red.svg" alt="Location" />
            <p>Select the location. Browse through our available options and find the perfect car to suit your needs</p>
          </div>
        </div>

        <div className={styles.steps}>
          <div className={styles.stepId}>02</div>
          <div className={styles.stepBlock}>
            <img src="Photos/icons/calender-red.svg" alt="Calendar" />
            <p>Choose your desired Pick-Up date and time.</p>
          </div>
        </div>

        <div className={styles.steps}>
          <div className={styles.stepId}>03</div>
          <div className={styles.stepBlock}>
            <img src="Photos/icons/car-red.svg" alt="Car" />
            <p>Make payment and book the car. Select an option to either have the car delivered to your location or pick it up directly from us.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

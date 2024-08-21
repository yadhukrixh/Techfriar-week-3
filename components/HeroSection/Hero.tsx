
import React from 'react';
import LocationSelector from '@/components/LocationSelector/LocationSelector';
import DateTimeSelector from '@/components/DateTimeSelector/DateTimeSlector';
import styles from './Hero.module.css';
import MobilePickup from '../MobilePickup/MobilePickup';

const HeroSection: React.FC = () => {

    


  


  return (
    <section className={styles.hero}>
        <div className={styles.quickPickup}>
            <div className={styles.pickupOptions}>
                <button className={styles.pickupLink}>Same as Pick-Up <span className={styles.line}></span></button>
                <button className={styles.pickupLink}>Different Drop-Off <span className={styles.line}></span></button>
                <select name="vehicle" className={styles.vehicleType}>
                    <option value="" disabled selected style={{ display: 'none' }}>Select vehicle type</option>
                    <option value="sedan">Sedan</option>
                    <option value="coupe">Coupe</option>
                    <option value="suv">SUV</option>
                </select>
            </div>
            <div className={styles.additionalDetails}>
                <LocationSelector/>
                <DateTimeSelector/>
                <DateTimeSelector/>
                <div className={styles.searchButton}>
                    <button>
                    <img src="Photos/icons/search.svg" alt="Search" />
                    </button>
                </div>
                <span className={styles.verticalLine}></span>
                <div className={styles.quickBook}>
                    <button>Quick Book</button>
                </div>
            </div>
            <div className={styles.downloadLinks}>
                <p className={styles.downloadDescription}>
                    Download our App for easy accessibility anytime, anywhere!
                </p>
                <div>
                    <a href="">
                    <img src="Photos/icons/appstore.svg" alt="App Store" />
                    </a>
                    <a href="">
                    <img src="Photos/icons/playstore.svg" alt="Play Store" />
                    </a>
                </div>
            </div>
        </div>

        <div style={{display:"none"}} className={styles.mobilePickup}><MobilePickup/></div>
        

        





    </section>
  );
};

export default HeroSection;

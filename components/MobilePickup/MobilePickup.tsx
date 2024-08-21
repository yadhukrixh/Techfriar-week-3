"use client"

import React, { useState } from 'react';
import styles from './MobilePickup.module.css';

const MobilePickup: React.FC = () => {
    const [isDropOffVisible, setIsDropOffVisible] = useState(false);

    const [isCarBookingVisible , setIsCarBookingVisible] = useState(false);

    const handleBookingVisible = () =>{
        setIsCarBookingVisible(!isCarBookingVisible)
    }

    const handleSameAsPickup = () => {
        setIsDropOffVisible(false);
    };

    const handleDifferentPickup = () => {
        setIsDropOffVisible(true);
    };

    

    return (
        <div>
            {/* Booking buttons for mobile */}
            <div className={styles.bookingButtonsForMobile}>
                <button id="book-a-car" onClick={handleBookingVisible} className={isCarBookingVisible?styles.active:""}>Book a car</button>
                <button id="quick-book">Quick book</button>
            </div>

            {/* Pickup options for mobile */}
            <div style={{display:"none"}}  id="mobile-pickup-options" className={isCarBookingVisible?styles.mobilePickupOptions:""}>
                <div className={styles.primaryPickupDetails}>
                    <span
                        id="same-as-pickup"
                        className={!isDropOffVisible ? styles.pickupLocationActive : ''}
                        onClick={handleSameAsPickup}
                    >
                        Same as pickup
                    </span>
                    <span
                        id="different-pickup"
                        className={isDropOffVisible ? styles.pickupLocationActive : ''}
                        onClick={handleDifferentPickup}
                    >
                        Different Pickup
                    </span>
                    <select name="vehicle" id="" className={styles.vehicleType}>
                        <option value="" disabled selected style={{ display: 'none' }}>
                            Select vehicle type
                        </option>
                        <option value="sedan">Sedan</option>
                        <option value="coupe">Coupe</option>
                        <option value="suv">SUV</option>
                    </select>
                </div>

                {/* Pickup location selector */}
                <div className={styles.location}>
                    <img src="Photos/icons/map-logo.svg" alt="" className={styles.mapPin} />
                    <select name="place" id="" className={styles.locationList}>
                        <option value="" disabled selected>
                            Pick-up location
                        </option>
                        <option value="al-quoz">Al Quoz</option>
                        <option value="al-barsha">Al Barsha</option>
                        <option value="al-satwa">Al Satwa</option>
                    </select>
                </div>

                {/* Drop off location selector */}
                {isDropOffVisible && (
                    <div className={styles.location} id="drop-off-location">
                        <img src="Photos/icons/map-logo.svg" alt="" className={styles.mapPin} />
                        <select name="place" id="" className={styles.locationList}>
                            <option value="" disabled selected>
                                Drop off location
                            </option>
                            <option value="al-quoz">Al Quoz</option>
                            <option value="al-barsha">Al Barsha</option>
                            <option value="al-satwa">Al Satwa</option>
                        </select>
                    </div>
                )}

                {/* Pickup time */}
                <div className={styles.pickupTime}>
                    <div className={styles.icon}>
                        <img src="Photos/icons/calender.svg" alt="Calendar Icon" className={styles.calenderIcon} />
                    </div>
                    <div className={styles.dateTime}>
                        <span className={styles.date} id="selectedDate">Pick-up Date & Time</span>
                    </div>
                </div>

                {/* Arrival time */}
                <div className={styles.pickupTime}>
                    <div className={styles.icon}>
                        <img src="Photos/icons/calender.svg" alt="Calendar Icon" className={styles.calenderIcon} />
                    </div>
                    <div className={styles.dateTime}>
                        <span className={styles.date} id="selectedArrivalDate">Drop off Time & Date</span>
                    </div>
                </div>

                <button className={styles.searchVehicle}>Search</button>
            </div>
        </div>
    );
};

export default MobilePickup;

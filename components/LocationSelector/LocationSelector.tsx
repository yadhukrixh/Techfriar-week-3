// components/LocationSelector.tsx
"use client";

import React from "react";
import styles from "./LocationSelector.module.css";

const LocationSelector: React.FC = () => {
  return (
    <div className={styles.location}>
      <img src="Photos/icons/map-logo.svg" alt="" className={styles.mapPin} />
      <select name="place" className={styles.locationList}>
        <option value="al-quoz">Al Quoz</option>
        <option value="al-barsha">Al Barsha</option>
        <option value="al-satwa">Al Satwa</option>
      </select>
    </div>
  );
};

export default LocationSelector;

import React from "react";
import styles from "./SlideInButton.module.css";
const SlideInButton = () => {
  return (
    <div>
      <div className={styles.slideInButton1} id="slide-in-button-1">
        <button className={styles.slideInContents}>
          <img src="Photos/icons/phone.svg" alt="Phone Icon" />
          <p>8562352452</p>
        </button>
      </div>

      <div className={styles.slideInButton2} id="slide-in-button-2">
        <button className={styles.slideInContents}>
          <img src="Photos/icons/slide-logo.svg" alt="Slide Logo" />
          <p>8562352452</p>
        </button>
      </div>
    </div>
  );
};

export default SlideInButton;

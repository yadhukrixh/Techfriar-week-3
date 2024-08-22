"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
  const notificatinNumber = "2"; // Number of the notification

  const [isNavBarActive, setIsNavBarActive] = useState(false);

  const navBarController = () => {
    setIsNavBarActive(!isNavBarActive);
  };
  return (
    <>
      <div className={styles.navSection}>
        <nav className={styles.nav}>
          <div className={styles.socialLinks}>
            <Link href="#">
              <img src="/Photos/icons/facebook.svg" alt="Facebook" />
            </Link>
            <Link href="#">
              <img src="/Photos/icons/instagram.svg" alt="Instagram" />
            </Link>
            <Link href="#">
              <img src="/Photos/icons/x.svg" alt="X" />
            </Link>
            <Link href="#">
              <img src="/Photos/icons/linkdin.svg" alt="LinkedIn" />
            </Link>
          </div>

          <div className={styles.navMainMenu}>
            <div className={styles.logo}>
              <img
                src="/Photos/logo.svg"
                alt="Logo"
                className={styles.logoImg}
              />
              <img
                src="/Photos/icons/hamburger.svg"
                className={styles.navControl}
                id="navControl"
                style={{ display: "none" }}
                onClick={navBarController}
              />
            </div>
            <div className={styles.navOptions}>
              <ul>
                <li>
                  <Link href="/" className={styles.navLink}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.navLink}>
                    Offers
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.navLink}>
                    Corporate
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.navLink}>
                    Personal
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.navLink}>
                    Locations
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.navLink}>
                    Contact Us
                  </Link>
                </li>
                <li className={styles.messagesLi}>
                  <Link href="#" className={styles.messages}>
                    <i className={`ri-notification-2-fill ${styles.bell}`}></i>
                    <div
                      className={styles.notificationCount}
                      id="notification-count"
                    >
                      {notificatinNumber}
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.navLink}>
                    <span className={styles.profile}>
                      <div className={styles.profilePic}>J</div>John Doe
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            <div
              className={`${isNavBarActive ? styles.active : ""}`}
              style={{ display: "none" }}
            >
              <button
                className={styles.closeButton}
                id="navControl"
                onClick={navBarController}
              >
                &times;
              </button>
              <ul className={styles.mobileMenu}>
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Offers</Link>
                </li>
                <li>
                  <Link href="#">Corporate</Link>
                </li>
                <li>
                  <Link href="#">Personal</Link>
                </li>
                <li>
                  <Link href="#">Locations</Link>
                </li>
                <li>
                  <Link href="#">Contact us</Link>
                </li>
              </ul>
              <button className={styles.loginButton}>Log In/Sign Up</button>
            </div>
          </div>
        </nav>
        <div className={styles.marqueeContainer}>
          <p className={styles.marqueeText}>
            Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis & Habtoor Grand
            Sales Counters | All Rates inclusive of VAT. T&C’s apply | Follow us
            on Social Media for New Offers
          </p>
        </div>
      </div>
    </>
  );
};

export default NavBar;

import React from 'react';
import styles from './Subscribe.module.css'; // Import the CSS module

const Subscribe: React.FC = () => {
    return (
        <section className={styles.subscribe}>
            <div className={styles.offersSubscribe}>
                <h2>Subscribe here for exclusive offers and updates!</h2>
                <form action="" className={styles.subscribeForm}>
                    <div className={styles.nameEmail}>
                        <input type="text" id="name" required placeholder="Name" />
                        <input type="text" id="email" required placeholder="Email" />
                    </div>
                    <p className={styles.subscribePara}>
                        Don t miss out! Enter your email and your name, then hit subscribe to unlock a world of special offers and details.
                    </p>
                    <button type="submit">Subscribe</button>
                </form>
            </div>

            <div className={styles.appDownloadLink}>
                <img src="Photos/mobile-app.svg" alt="Mobile App" />
                <div className={styles.linkShare}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p>Enter your number and receive a direct link to download the app</p>
                        <div className={styles.numberInput}>
                            <input type="number" placeholder="Enter Phone Number" />
                            <button>Get the link</button>
                        </div>
                    </div>
                    <div>
                        <p style={{ marginTop: '45px' }}>Get in on</p>
                        <div className={styles.playstoreAppstore}>
                            <a href="">
                                <img src="Photos/icons/appstoreTransparent.svg" alt="App Store" />
                            </a>
                            <a href="">
                                <img src="Photos/icons/playstoreTransparent.svg" alt="Play Store" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;

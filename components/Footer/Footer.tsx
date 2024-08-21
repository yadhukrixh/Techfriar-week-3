import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
const Footer: React.FC = () => {
    
    return (
        <>
            {/* Desktop Footer section*/}
            <footer className={`${styles.footer} ${styles.DesktopFooter}`}>
                <div>
                    <div className={styles.footerContainer}>
                        <div className={styles.footerLogo}>
                            <img src="Photos/footer-logo.svg" alt="Company Logo" />
                            <p>Member of the Al Habtoor Group</p>
                        </div>
                        <div className={styles.footerLinks}>
                            <div className={styles.footerColumn}>
                                <ul>
                                    <li><Link href="#">Home</Link></li>
                                    <li><Link href="#">Offers</Link></li>
                                    <li><Link href="#">FAQ</Link></li>
                                    <li><Link href="#">Career</Link></li>
                                    <li><Link href="#">About Us</Link></li>
                                    <li><Link href="#">Locations</Link></li>
                                    <li><Link href="#">Privacy Policy</Link></li>
                                    <li><Link href="#">Term & Conditions</Link></li>
                                    <li><Link href="#">Services</Link></li>
                                    <li><Link href="#">Contact US</Link></li>
                                    <li><Link href="#">Service Request</Link></li>
                                </ul>
                            </div>

                            <div className={styles.AlHabthoorCompanyList}>
                                
                                <p>Al Habtoor Company List</p>
                                <ul>
                                    <li><Link href="#">Education</Link></li>
                                    <li><Link href="#">Publishing</Link></li>
                                    <li><Link href="#">Hospitality</Link></li>
                                    <li><Link href="#">Real Estate</Link></li>
                                    <li><Link href="#">Automotive</Link></li>
                                    <li><Link href="#">Vehicle Leasing</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.footerRight}>
                            <div className={styles.socialMedia}>
                                <p>FOLLOW US ON</p>
                                <div className={styles.socialUl}>
                                    <ul>
                                        <li><a href="#"><img src="Photos/icons/facebook-footer.svg" alt="Facebook" /></a></li>
                                        <li><a href="#"><img src="Photos/icons/x-footer.svg" alt="Twitter" /></a></li>
                                        <li><a href="#"><img src="Photos/icons/instagram-footer.svg" alt="Instagram" /></a></li>
                                        <li><a href="#"><img src="Photos/icons/linkdin-footer.svg" alt="LinkedIn" /></a></li>
                                        <li><a href="#"><img src="Photos/icons/youtube-inverted-color.svg" alt="YouTube" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.footerCertificates}>
                                <img src="Photos/icons/site-lock.svg" alt="Certificate 1" />
                                <img src="Photos/icons/site-secure.svg" alt="Certificate 2" />
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className={styles.footerBottom}>
                    <p>&copy; 2018 Diamondlease LLC - All Rights Reserved.</p>
                </div>
            </footer>
            

            {/* Mobile Footer section */}
            <footer className={styles.mobileFooterMainDiv}>
                <div className={styles.mobileFooter}>
                    <div className={styles.mobileFooterTop}>
                        <div className={styles.mobileFooterLogoDiv}>
                            <img src="Photos/mobile-footer-logo.svg" alt="Al Habtoor Group Logo" className={styles.mobileLogo} />
                        </div>
                        <div className={styles.mobileFooterIcons}>
                            <a href="#"><img src="Photos/icons/facebook-inverted-color.svg" alt="Facebook" className={styles.mobileFooterIcon} /></a>
                            <a href="#"><img src="Photos/icons/x-inverted-color.svg" alt="Twitter" className={styles.mobileFooterIcon} /></a>
                            <a href="#"><img src="Photos/icons/instagram-inverted-color.svg" alt="Instagram" className={styles.mobileFooterIcon} /></a>
                            <a href="#"><img src="Photos/icons/linkdin-inverted-color.svg" alt="LinkedIn" className={styles.mobileFooterIcon} /></a>
                            <a href="#"><img src="Photos/icons/youtube-inverted-color.svg" alt="YouTube" className={styles.mobileFooterIcon} /></a>
                        </div>
                    </div>
                    <div className={styles.mobileFooterLinks}>
                        <Link href="#">Home</Link>
                        <Link href="#">Offers</Link>
                        <Link href="#">Career</Link>
                        <Link href="#">About Us</Link>
                        <Link href="#">Locations</Link>
                        <Link href="#">FAQ</Link>
                        <Link href="#">Terms & Conditions</Link>
                        <Link href="#">Service Request</Link>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Services</Link>
                        <Link href="#">Contact Us</Link>
                    </div>
                </div>

                <div className={styles.mobileFooterSection2}>
                    <h2 className={styles.mobileFooterTitle}>Al Habtoor Companies</h2>
                    <div className={styles.mobileFooterServices}>
                        <a href="#">Hospitality</a>
                        <a href="#">Real Estate</a>
                        <a href="#">Publishing</a>
                        <a href="#">Automotive</a>
                        <a href="#">Vehicle Leasing</a>
                    </div>
                    <div className={styles.mobileFooterSeal}>
                        <img src="Photos/icons/site-secure.svg" alt="Secure GlobalSign Seal" className={styles.mobileSealIcon} />
                    </div>
                    <div className={styles.mobileFooterBottom}>
                        <p>&copy; 2018 Diamondlease LLC - All Rights Reserved.</p>
                    </div>
                </div>
                
            </footer>
        </>
    );
};

export default Footer;
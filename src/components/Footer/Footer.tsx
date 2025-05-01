import Link from 'next/link';
import { FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from './Footer.module.css';

// Update social media URLs if necessary
const socialLinks = {
    google: "https://maps.app.goo.gl/oKXu9zvLoEeyAa5v8",
    facebook: "https://www.facebook.com/TheVaperzDenLLC/",
    instagram: "https://www.instagram.com/vaperz_den/",
    twitter: "https://twitter.com/thevaperzden"
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
          <div className={styles.footerContent}>
              <div className={styles.footerSubscribe}>
                  <p>Subscribe for updates!</p>
                  {/* TODO: Add actual subscribe functionality or link */}
                  <button>Subscribe Now</button>
              </div>
              <div className={styles.footerSocial}>
                  <a href={socialLinks.google} aria-label="Google Places" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt /></a>
                  <a href={socialLinks.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                  <a href={socialLinks.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                  <a href={socialLinks.twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              </div>
              <div className={styles.footerLinks}>
                  <Link href="/about">About Us</Link>
                  {/* Link to subscribe page or functionality */}
                  <Link href="#">Subscribe</Link> 
              </div>
          </div>
          <div className={styles.copyright}>
              <p>© {new Date().getFullYear()} by The Vaperz Den, LLC</p>
          </div>
      </div>
    </footer>
  );
} 
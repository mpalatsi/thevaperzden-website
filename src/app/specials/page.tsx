import React from 'react';
import { FaTag, FaStar } from 'react-icons/fa'; // Only keep needed icons
import styles from './page.module.css';
import Header from '@/components/Header/Header'; // Import Header
import Footer from '@/components/Footer/Footer'; // Import Footer

// Removed Image, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt imports
// Removed logo import
// Removed socialLinks constant
// Removed sharedStyles import

export default function SpecialsPage() {
  return (
    <>
      <Header />

      {/* Main Specials Content */}
      <main className={styles.mainSpecials}>
        <div className={styles.specialsContainer}>
            <h1><FaTag /> Our Specials</h1>

            {/* Placeholder: Weekly Juice Special */}
            <section className={styles.specialSection}>
                <h2>Weekly Juice Spotlight</h2>
                <div className={styles.specialItem}>
                    <h3>Placeholder Juice Name</h3>
                    <p>Delicious placeholder description - fruity, refreshing, perfect for summer!</p>
                    <p className={styles.price}>Special Price: $15.99 (Usually $19.99)</p>
                </div>
                 {/* Add more items if needed */}
            </section>

            {/* Placeholder: Hardware Deals */}
            <section className={styles.specialSection}>
                <h2>Hardware Deals</h2>
                <div className={styles.specialItem}>
                    <h3>Placeholder Mod Kit</h3>
                    <p>Get the latest placeholder mod kit with tank included.</p>
                    <p className={styles.price}>Bundle Price: $59.99</p>
                </div>
            </section>

            {/* Placeholder: Membership Info */}
            <section className={styles.specialSection}>
                 <h2><FaStar /> Loyalty Program</h2>
                 <div className={styles.membershipInfo}>
                    <p>Ask us about our loyalty program! Earn points with every purchase towards discounts and exclusive offers.</p>
                    <ul>
                        <li>Tier 1: Benefits description...</li>
                        <li>Tier 2: Benefits description...</li>
                    </ul>
                 </div>
            </section>
        </div>
      </main>

      <Footer />
    </>
  );
} 
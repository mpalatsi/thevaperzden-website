import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import styles from './page.module.css';
import juiceWall from '/public/assets/juice wall.jpg';
import badge2024 from '/public/assets/2024_badge.png';
import badge2023 from '/public/assets/2023_badge.png';
import tastingBar from '/public/assets/tasting_bar.png';
import logo from '/public/assets/logo.png';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

// TODO: Replace placeholder image paths
// const placeholderGoogle = "/placeholder_google_places.png";
// const placeholderFacebook = "/placeholder_facebook.png";
// const placeholderInstagram = "/placeholder_instagram.png";
// const placeholderTwitter = "/placeholder_twitter.png";
// const placeholderTasting = "/placeholder_tasting_station.jpg";

export default function HomePage() {
  return (
    <>
      <Header hideLogo={true} />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <div className={styles.announcement}>
              {/* Comment out the original text heading */}
              {/* <h2>The Vaperz Den</h2> */}
              {/* Add the enlarged logo instead */}
              <div className={styles.heroLogo}>
                <Image 
                  src={logo} 
                  alt="The Vaperz Den" 
                  priority 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Keep sizes prop for optimization
                />
              </div>
            </div>
            <div className={styles.badgesContainer}>
                <Image src={badge2024} alt="Best of Dawson 2024" height={85} />
                <Image src={badge2023} alt="Best of Dawson 2023" height={85} />
            </div>
            <div className={styles.storeInfoAndImage}>
              <div className={styles.storeDetails}>
                {/* Add icons next to address and phone */}
                <div className={styles.detailItem}>
                    <FaMapMarkerAlt className={styles.detailIcon} />
                    <address>
                    391 Quill Drive, Suite 130<br />
                    Dawsonville, GA 30534
                    </address>
                </div>
                <div className={styles.detailItem}>
                    <FaPhoneAlt className={styles.detailIcon} />
                    <p><a href="tel:+17062161687">(706) 216-1687</a></p>
                </div>
                <div className={styles.storeHours}>
                  <p className={styles.hoursTitle}><strong>Store Hours</strong></p>
                  <p>Monday ~ Saturday 10am - 8pm</p>
                  <p>Sunday 10am - 5pm</p>
                </div>
              </div>
              <div className={styles.storeImages}>
                {/* Ensure Image component fills container if needed, check CSS */}
                <Image src={juiceWall} alt="Inside The Vaperz Den Store" style={{ width: '100%', height: 'auto' }} priority />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.productInfo}>
          <div className={styles.tastingStationImage}>
            <Image src={tastingBar} alt="Vaperz Den Tasting Station" />
          </div>
          <div className={styles.productDescription}>
            <p>Mods, coils, build kits, batteries and accessories for the beginner through the advanced hobbyist.</p>
            <p>40+ lines of e-liquids, with more on the way!</p>
            <a href="/juices" className={styles.juiceLink}>Check out our juice lines!</a>
            <h5>140+ Flavors at our tasting station!</h5>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

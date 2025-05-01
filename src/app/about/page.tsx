import Image from 'next/image';
import styles from './about.module.css'; // Import the CSS module
import Header from '@/components/Header/Header'; // Import Header
import Footer from '@/components/Footer/Footer'; // Import Footer
import { FaUsers } from 'react-icons/fa'; // Icon for About Us heading

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className={styles.mainAbout}> {/* Use a main wrapper */}
        <div className={styles.container}> {/* Inner container */}
          <h1 className={styles.heading}>
            <FaUsers /> About Us
          </h1>

          <p className={styles.textContent}>
            Our Dawsonville location first opened on May 1st of 2017, and has been helping the vapers of the Dawson community for over three years! We have progressively grown more and more every year, not only in customer base, but also in the different types of devices and brands we carry! We started out as most small businesses do, but thanks to our staff we made a name for ourselves. So much so that our Dawsonville location won the best of Dawson vote for the best vape shop in Dawsonville of 2020, 2022,2023, and 2024! As our name grew more popular and we started to see more and more customers from further and further away, we decided it was time to branch out.
          </p>

          {/* Awards Section - Centered below text */}
          <div className={styles.awardsSection}>
            <h3 className={styles.awardsTitle}>Best of Dawson Awards</h3>
            <div className={styles.awardImages}>
              <Image
                src="/assets/2023_badge.png"
                alt="Best of Dawson 2023"
                width={150} // Slightly larger awards
                height={150}
                className={styles.awardImage}
              />
              <Image
                src="/assets/2024_badge.png"
                alt="Best of Dawson 2024"
                width={150} // Slightly larger awards
                height={150}
                className={styles.awardImage}
              />
            </div>
          </div>

          <h2 className={styles.teamHeading}>Meet the Team</h2>

          <div className={styles.teamGridContainer}> {/* Team grid */}
            {/* Image 1: Jamie */}
            <div className={styles.gridItem}>
              <div className={styles.gridItemImageWrapper}> {/* Add wrapper */} 
                <Image
                  src="/assets/Jamie.png" // Use local image
                  alt="Jamie Wheatley - Owner"
                  width={200} // Use 200x200 for optimization hint
                  height={200}
                  className={styles.gridItemImage}
                />
              </div>
              <p className={styles.gridItemName}>Jamie Wheatley - Owner</p>
            </div>

            {/* Image 2: Jake */}
            <div className={styles.gridItem}>
              <div className={styles.gridItemImageWrapper}> {/* Add wrapper */} 
                <Image
                  src="/assets/Jake.png" // Use local image
                  alt="Jake"
                  width={200} // Use 200x200
                  height={200}
                  className={styles.gridItemImage}
                />
              </div>
              <p className={styles.gridItemName}>Jake</p>
            </div>

            {/* Image 3: J */}
            <div className={styles.gridItem}>
              <div className={styles.gridItemImageWrapper}> {/* Add wrapper */} 
                <Image
                  src="/assets/J.png" // Use local image
                  alt="Employee JR"
                  width={200} // Use 200x200
                  height={200}
                  className={styles.gridItemImage}
                />
              </div>
              <p className={styles.gridItemName}>JR</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 
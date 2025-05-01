import { FaTint } from 'react-icons/fa'; // Only keep needed icons
import styles from './page.module.css';
import Header from '@/components/Header/Header'; // Import Header
import Footer from '@/components/Footer/Footer'; // Import Footer

const juiceBrands = [
    "Air Factory", "Beard Co", "Bouncing Betty", "Butter cake", "Candy King",
    "Cassadaga", "Chain Vapez", "Cloud Nerdz", "Coastal Clouds", "Cyclops Vapor",
    "Dinner Lady", "Emergency Vape Stash", "Famous Flavors Inc.", "Fruitia",
    "Gentleman's Draw", "Hi - Drip", "Hundo", "I Love Salts", "Juice Head",
    "Keep it 100", "Khali Vapor", "Lemon Twist", "MRKT Place", "Naked 100",
    "Nomenon", "Pancake House", "Reds Apple", "Sad Boy", "Salt Bae",
    "Simple E-Fruit", "Skwezed", "Solace", "Standard", "Stix", "Svrf",
    "Vaperz Venom", "Twist Salts"
];

export default function JuicesPage() {
  // Sort brands alphabetically for easier reading
  const sortedBrands = [...juiceBrands].sort((a, b) => a.localeCompare(b));

  return (
    <>
      <Header />

      {/* Main Juices Content */}
      <main className={styles.mainJuices}>
        <div className={styles.juicesContainer}>
            <h1><FaTint /> Our Juice Brands</h1>
            <p className={styles.introText}>See below for the full list of vape juice brands we carry!</p>

            <div className={styles.brandListContainer}>
                <ul className={styles.brandList}>
                    {sortedBrands.map((brand) => (
                        <li key={brand}>{brand}</li>
                    ))}
                </ul>
            </div>
        </div>
      </main>

      <Footer />
    </>
  );
} 
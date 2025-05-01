'use client'; // Add this directive for hooks like usePathname

import Image from 'next/image';
import Link from 'next/link'; // Use Link for internal navigation
import { usePathname } from 'next/navigation'; // To determine active link
import { FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from './Header.module.css';
import logo from '/public/assets/logo.png'; // Assuming logo path is correct relative to public

// Update social media URLs if necessary
const socialLinks = {
    google: "https://maps.app.goo.gl/oKXu9zvLoEeyAa5v8",
    facebook: "https://www.facebook.com/TheVaperzDenLLC/",
    instagram: "https://www.instagram.com/vaperz_den/",
    twitter: "https://twitter.com/thevaperzden"
};

// Define props interface
interface HeaderProps {
  hideLogo?: boolean; // Optional prop to hide the logo
}

export default function Header({ hideLogo = false }: HeaderProps) { // Destructure prop with default value
  const pathname = usePathname(); // Get current path

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Navigation Links First */}
        <ul className={styles.navList}>
          <li><Link href="/" className={pathname === '/' ? styles.active : ''}>Home</Link></li>
          <li><Link href="/juices" className={pathname === '/juices' ? styles.active : ''}>Juices</Link></li>
          <li><Link href="/specials" className={pathname === '/specials' ? styles.active : ''}>Specials</Link></li>
           <li><Link href="/about" className={pathname === '/about' ? styles.active : ''}>About Us</Link></li>
          {/* Add other links like 'More' if needed */}
        </ul>
        {/* Conditionally render the logo */} 
        {!hideLogo && (
          <div className={styles.logo}>
            <Link href="/"> {/* Make logo clickable */} 
              <Image src={logo} alt="The Vaperz Den Logo" height={85} priority />
            </Link>
          </div>
        )}
        {/* Social Icons Last */}
        <div className={styles.socialIconsNav}>
          <a href={socialLinks.google} aria-label="Google Places" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt /></a>
          <a href={socialLinks.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href={socialLinks.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href={socialLinks.twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
      </nav>
      <div className={styles.subNav}>
        <span>JUICES - MODS - RDAs - TANKS - COILS - <Link href="/specials">Click for Specials</Link></span>
      </div>
    </header>
  );
} 
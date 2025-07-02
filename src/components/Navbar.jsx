import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Senkusha Logo" style={styles.logo} />
      </div>

      <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul
        style={{
          ...styles.navLinks,
          ...(menuOpen ? styles.navLinksMobileOpen : {}),
        }}
      >
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/services" style={styles.link}>Services</Link></li>
        <li><Link to="/product" style={styles.link}>Products</Link></li>
        <li><Link to="/testimonials" style={styles.link}>Testimonials</Link></li> {/* ✅ Added this line */}
        <li><Link to="/contact" style={styles.link}>Contact Us</Link></li>
        <li style={styles.btnWrapper}>
          <button style={styles.button}>Get started</button>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 24px',
    backgroundColor: 'white',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    flexWrap: 'wrap',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '40px',
    width: 'auto',
  },
  hamburger: {
    display: 'none',
    fontSize: '24px',
    cursor: 'pointer',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '20px',
    margin: 0,
    padding: 0,
    alignItems: 'center',
    flexGrow: 1,
    flexWrap: 'wrap',
  },
  navLinksMobileOpen: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: '10px',
    gap: '15px',
  },
  link: {
    textDecoration: 'none',
    color: '#111',
    fontWeight: 500,
    fontSize: '16px',
  },
  btnWrapper: {
    marginLeft: 'auto',
  },
  button: {
    backgroundColor: '#1D4ED8',
    color: 'white',
    border: 'none',
    padding: '8px 18px',
    borderRadius: '999px',
    fontSize: '14px',
    cursor: 'pointer',
    fontWeight: 600,
  },
};

export default Navbar;
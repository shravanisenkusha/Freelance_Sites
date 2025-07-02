import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Column 1: Company */}
        <div style={styles.column}>
          <h4 style={styles.heading}>COMPANY</h4>
          <a href="/">Home</a>
          <a href="/products">Our Products</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Column 2: Programs */}
        <div style={styles.column}>
          <h4 style={styles.heading}>PROGRAMS</h4>
          <a href="/internship">Internship</a>
          <a href="/training">Corporate Training</a>
          <a href="/journey">Hiring Journey</a>
        </div>

        {/* Column 3: Resources */}
        <div style={styles.column}>
          <h4 style={styles.heading}>RESOURCES</h4>
          <a href="/blogs">Blogs</a>
          <a href="/success">Success Stories</a>
          <a href="/events">Events</a>
        </div>

        {/* Column 4: Products */}
        <div style={styles.column}>
          <h4 style={styles.heading}>PRODUCTS</h4>
          <a href="/datagpt">DataGPT</a>
          <a href="/nutrigen">Nutrigen</a>
          <a href="/resume">Resume Analyzer</a>
        </div>

        {/* Column 5: Connect */}
        <div style={styles.column}>
          <h4 style={styles.heading}>CONNECT WITH US</h4>
          <a href="/whatsapp">WhatsApp Chat</a>
          <a href="/form">Form</a>
          <a href="/calendly">Calendly</a>
          <a href="/map">Map</a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottom}>
        <p>© 2025 Senkusha Solutions LLP</p>
        <div>
          <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms</a> | <a href="/cookies">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#0D4A68',
    color: 'white',
    padding: '40px 20px',
    fontSize: '14px',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '150px',
    marginBottom: '20px',
    gap: '8px',
  },
  heading: {
    fontSize: '14px',
    color: '#AFCBDB',
    marginBottom: '8px',
  },
  bottom: {
    borderTop: '1px solid #285f7a',
    marginTop: '30px',
    paddingTop: '15px',
    textAlign: 'center',
    color: '#d9e6f2',
    fontSize: '13px',
  },
};

export default Footer;
import React from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  // Styles for the app components
  const styles = {
    app: {
      display: 'flex',
      width: '100vw',
      height: '100vh',
      fontFamily: "'Helvetica Neue', sans-serif",
      backgroundImage: 'url("/jobhunt.jpg")', // Background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      overflow: 'hidden',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay to make content pop
    },
    sidebar: {
      width: '25%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent white background
      padding: '30px',
      boxShadow: '2px 0 8px rgba(0, 0, 0, 0.3)', // Stronger shadow for depth
      zIndex: 2, // Keeps sidebar above the background
    },
    logo: {
      width: '80%',
      height: 'auto',
      objectFit: 'contain',
      marginBottom: '30px',
    },
    mainContent: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '30px',
      backgroundColor: 'rgba(300, 300, 300, 0.3)', // Semi-transparent white background
      borderRadius: '20px',
      margin: '40px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // More pronounced shadow
      zIndex: 2, // Keeps content above the background
    },
    title: {
      fontSize: '3rem',
      fontWeight: '700',
      color: '#333333', // Dark text for contrast
      marginBottom: '20px',
      textAlign: 'center',
    },
    description: {
      maxWidth: '600px',
      fontSize: '1.4rem',
      marginBottom: '30px',
      lineHeight: '1.8',
      color: '#333333', // Dark text for better contrast
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#ff6f61',
      color: '#ffffff',
      padding: '15px 40px',
      fontSize: '1.4rem',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.2s',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)', // Stronger button shadow
    },
    buttonHover: {
      backgroundColor: '#e35d54', // Darker coral on hover
    },
    footer: {
      width: '100%',
      padding: '10px',
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker footer to match the overlay
      color: '#ffffff',
      fontSize: '1rem',
      position: 'absolute',
      bottom: '0',
      left: '0',
      zIndex: 2,
    },
  };

  // Function to handle navigation
  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  return (
    <div style={styles.app}>
      {/* Overlay for background */}
      <div style={styles.overlay}></div>


      {/* Main Content Area */}
      <div style={styles.mainContent}>
        <h1 style={styles.title}>Welcome to JobList Portal</h1>
        <p style={styles.description}>
          Explore thousands of job opportunities and take the next step in your career.
          We help connect professionals with the right companies.
        </p>
        <button
          style={styles.button}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = styles.button.backgroundColor; // Reset background color
          }}
          onClick={handleGetStarted}
        >
          Let’s Get Started
        </button>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        2024 © JobList Portal.com
      </footer>
    </div>
  );
}

export default App;

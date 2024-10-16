import React from 'react';
import { useNavigate } from 'react-router-dom';
import jobImage from './mama.jpg'; // Importing the background image

function Dashboard() {
  const navigate = useNavigate();

  const styles = {
    dashboard: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundImage: `url(${jobImage})`, // Setting job.jpeg as the background image
      backgroundSize: 'cover', // Cover the entire screen
      backgroundPosition: 'center', // Center the background image
      backgroundRepeat: 'no-repeat', // No repeating of the background image
      color: '#333', // Dark text for readability
      fontFamily: 'Arial, sans-serif',
      position: 'relative',
    },
    title: {
      fontSize: '2.5em',
      marginBottom: '30px',
      fontWeight: '700',
      color: '#fff', // White text to contrast against the background
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add some shadow for readability
    },
    button: {
      background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.9), rgba(41, 128, 185, 0.9))', // Gradient background
      color: '#fff',
      border: 'none',
      padding: '15px 30px', // Slightly reduced padding for a sleeker look
      fontSize: '1.6em',
      borderRadius: '5px',
      cursor: 'pointer',
      marginBottom: '20px',
      width: '250px', // Slightly smaller width
      transition: 'background 0.3s, transform 0.2s',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // More pronounced shadow
      outline: 'none', // Remove outline on focus
    },
    buttonHover: {
      transform: 'scale(1.05)', // Slightly scale up on hover
      background: 'linear-gradient(135deg, rgba(41, 128, 185, 0.9), rgba(52, 152, 219, 0.9))', // Reverse gradient on hover
    },
    backButton: {
      background: 'linear-gradient(135deg, rgba(231, 76, 60, 0.9), rgba(192, 57, 43, 0.9))', // Gradient for back button
      color: '#fff',
      border: 'none',
      padding: '15px 30px',
      fontSize: '1.6em',
      borderRadius: '5px',
      cursor: 'pointer',
      width: '250px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      transition: 'background 0.3s, transform 0.2s',
      outline: 'none',
    },
    backButtonHover: {
      transform: 'scale(1.05)', // Slightly scale up on hover
      background: 'linear-gradient(135deg, rgba(192, 57, 43, 0.9), rgba(231, 76, 60, 0.9))', // Reverse gradient on hover
    },
  };

  return (
    <div style={styles.dashboard}>
      <h1 style={styles.title}>JOBLIST</h1>
      <button
        style={styles.button}
        onMouseEnter={(e) => {
          e.target.style.transform = styles.buttonHover.transform;
          e.target.style.background = styles.buttonHover.background;
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.background = styles.button.background;
        }}
        onClick={() => navigate('/registration')}
      >
        Add Job
      </button>
      <button
        style={styles.button}
        onMouseEnter={(e) => {
          e.target.style.transform = styles.buttonHover.transform;
          e.target.style.background = styles.buttonHover.background;
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.background = styles.button.background;
        }}
        onClick={() => navigate('/jobs')}
      >
        More Opportunities
      </button>
      <button
        style={styles.button}
        onMouseEnter={(e) => {
          e.target.style.transform = styles.buttonHover.transform;
          e.target.style.background = styles.buttonHover.background;
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.background = styles.button.background;
        }}
        onClick={() => navigate('/work')}
      >
        View Jobs
      </button>
      <button
        style={styles.backButton}
        onMouseEnter={(e) => {
          e.target.style.transform = styles.backButtonHover.transform;
          e.target.style.background = styles.backButtonHover.background;
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.background = styles.backButton.background;
        }}
        onClick={() => navigate('/')}
      >
        Back
      </button>
    </div>
  );
}

export default Dashboard;

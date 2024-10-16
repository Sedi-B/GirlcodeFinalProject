import React from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure you're using react-router for navigation

function JobSites() {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate('/dashboard'); // Redirect to the dashboard
  };

  const styles = {
    page: {
      width: '100vw',
      height: '100vh', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundImage: 'url("OPP.png")', // Make sure OPP.jpg is in the public folder
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '20px',
      boxSizing: 'border-box',
    },
    container: {
      width: '90%',
      backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent background for readability
      borderRadius: '12px',
      padding: '25px',
      overflowY: 'scroll',
      height: '75vh',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)', // More defined shadow for modern look
    },
    header: {
      fontSize: '2.8rem', // Larger header
      marginBottom: '25px',
      textAlign: 'center',
      color: '#003366', // Darker blue for a professional look
      fontWeight: 'bold',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '20px',
    },
    th: {
      padding: '15px',
      backgroundColor: '#007BFF', // Darker blue
      color: '#fff',
      borderBottom: '3px solid #0056b3',
      fontWeight: 'bold',
    },
    td: {
      padding: '12px',
      borderBottom: '1px solid #ccc',
    },
    link: {
      color: '#007BFF',
      textDecoration: 'none',
    },
    exitButton: {
      marginTop: '25px',
      padding: '12px 25px',
      backgroundColor: '#f44336',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1.3rem',
      fontWeight: 'bold',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
  };

  const jobWebsites = [
    // Job website data (same as before)
    {
      country: 'South Africa',
      websites: [
        { name: 'CareerJet', link: 'https://www.careerjet.co.za', description: 'CareerJet is an extensive job search engine that lists jobs across all industries in South Africa.' },
        { name: 'JobVine', link: 'https://www.jobvine.co.za', description: 'JobVine offers a wide range of job postings, from entry-level to executive positions.' }
      ]
    },
    {
      country: 'Canada',
      websites: [
        { name: 'Indeed Canada', link: 'https://ca.indeed.com', description: 'Indeed Canada offers a wide range of job listings for all professions across Canada.' },
        { name: 'Workopolis', link: 'https://www.workopolis.com', description: 'Workopolis is one of Canada’s leading job boards with a range of job opportunities.' }
      ]
    },
    {
      country: 'USA',
      websites: [
        { name: 'LinkedIn', link: 'https://www.linkedin.com', description: 'LinkedIn is a global platform for professional networking and job searching.' },
        { name: 'Glassdoor', link: 'https://www.glassdoor.com', description: 'Glassdoor allows you to search for jobs and read reviews about companies and their work culture.' }
      ]
    },
    {
      country: 'France',
      websites: [
        { name: 'Pôle emploi', link: 'https://www.pole-emploi.fr', description: 'Pôle emploi is France’s national employment agency, offering job listings and career resources.' },
        { name: 'Apec', link: 'https://www.apec.fr', description: 'Apec is a popular job search website in France, focused on executives and professionals.' }
      ]
    },
    {
      country: 'China',
      websites: [
        { name: 'Zhaopin', link: 'https://www.zhaopin.com', description: 'Zhaopin is one of the largest job portals in China, offering millions of job listings.' },
        { name: '51Job', link: 'https://www.51job.com', description: '51Job is another major job site in China, providing job opportunities in various fields.' }
      ]
    },
    {
      country: 'Rest of Africa',
      websites: [
        { name: 'Jobberman', link: 'https://www.jobberman.com', description: 'Jobberman is a leading job board across various African countries, helping candidates find jobs easily.' },
        { name: 'BrighterMonday', link: 'https://www.brightermonday.com', description: 'BrighterMonday offers job postings in multiple African countries, including Kenya, Nigeria, and Uganda.' }
      ]
    }
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.header}>Job Seeking Websites OPPOTUNITIES</h1>

        {jobWebsites.map((category, index) => (
          <div key={index}>
            <h2>{category.country}</h2>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Website Name</th>
                  <th style={styles.th}>Link</th>
                  <th style={styles.th}>Description</th>
                </tr>
              </thead>
              <tbody>
                {category.websites.map((website, index) => (
                  <tr key={index}>
                    <td style={styles.td}>{website.name}</td>
                    <td style={styles.td}>
                      <a href={website.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
                        {website.link}
                      </a>
                    </td>
                    <td style={styles.td}>{website.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

        <button style={styles.exitButton} onClick={handleExit}>
          Exit to Dashboard
        </button>
      </div>
    </div>
  );
}

export default JobSites;

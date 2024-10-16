import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'; // Importing styled-components
import TowerImage from './Tower.jpg'; // Importing the image to use as the header

// Style for the header image
const HeaderImage = styled.div`
    background-image: url(${TowerImage}); /* Set image for the header */
    background-size: cover; /* Cover the entire header area */
    background-position: center; /* Center the image */
    height: 200px; /* Adjust height to make it a proper header size */
    width: 100%; /* Full width */
    margin-bottom: 20px; /* Space below the header */
`;

// Style for the page content
const WorkPage = styled.div`
    padding: 20px;
    min-height: 100vh; /* Ensure the page covers the full height */
    display: flex;
    flex-direction: column;
    align-items: center; /* Center the content horizontally */
`;

const Title = styled.h1`
    text-align: center;
    color: black; /* Change text color for visibility */
    margin-bottom: 20px; /* Add some space between the title and the table */
`;

// Adjusted the table width to fit within the screen
const JobTable = styled.table`
    width: 100%; /* Make the table take 100% of available width */
    max-width: 1200px; /* Restrict the max width for readability */
    border-collapse: collapse;
    margin: 20px 0;
    background-color: rgba(200, 200, 200, 0.6); /* Slightly transparent background for table */
`;

const TableHeader = styled.th`
    border: 1px solid #ddd; /* Light grey border */
    padding: 10px; /* Padding for cells */
    text-align: left; /* Align text to the left */
    background-color: #4CAF50; /* Green background for header */
    color: white; /* White text color */
`;

const TableData = styled.td`
    border: 1px solid #ddd; /* Light grey border */
    padding: 10px; /* Padding for cells */
    text-align: left; /* Align text to the left */
`;

const DeleteButton = styled.button`
    background-color: #f44336; /* Red button */
    color: white; /* White text */
    border: none; /* No border */
    border-radius: 5px; /* Rounded corners */
    padding: 5px 10px; /* Padding for button */
    cursor: pointer; /* Pointer cursor on hover */

    &:hover {
        background-color: #d32f2f; /* Darker red on hover */
    }
`;

const BackButton = styled.button`
    background-color: #4CAF50; /* Green button */
    color: white; /* White text */
    padding: 10px 20px; /* Padding for button */
    border: none; /* No border */
    border-radius: 5px; /* Rounded corners */
    cursor: pointer; /* Pointer cursor on hover */
    margin-top: 20px; /* Space above the button */

    &:hover {
        background-color: #45a049; /* Darker green on hover */
    }
`;

const Work = () => {
    const [jobs, setJobs] = useState([]); // State to hold job data
    const navigate = useNavigate(); // Hook for navigation

    // Function to fetch job data from the server
    const fetchJobs = async () => {
        try {
            const response = await axios.get('http://localhost:5000/get-jobs'); // Adjusting URL as needed
            if (response.data.success) {
                setJobs(response.data.jobs); // Setting the jobs from response
            } else {
                console.error('Failed to fetch jobs');
            }
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };

    // Function to delete a job by ID
    const handleDelete = async (jobId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/delete-job/${jobId}`); // Adjust URL as needed
            if (response.data.success) {
                setJobs(jobs.filter(job => job.id !== jobId)); // Remove the deleted job from state
            } else {
                console.error('Failed to delete job');
            }
        } catch (error) {
            console.error('Error deleting job:', error);
        }
    };

    useEffect(() => {
        fetchJobs(); // Fetch job data on component mount
    }, []);

    // Function to handle navigation back to Dashboard
    const handleBackToDashboard = () => {
        navigate('/Dashboard'); // Navigate back to Dashboard
    };

    return (
        <WorkPage>
            <HeaderImage /> {/* This is the new header */}
            <Title>Job Listings</Title>
            {jobs.length > 0 ? (
                <JobTable>
                    <thead>
                        <tr>
                            <TableHeader>Company Name</TableHeader>
                            <TableHeader>Job Type</TableHeader>
                            <TableHeader>Industry</TableHeader>
                            <TableHeader>Description</TableHeader>
                            <TableHeader>Responsibilities</TableHeader>
                            <TableHeader>Qualification</TableHeader>
                            <TableHeader>Experience</TableHeader>
                            <TableHeader>Job Perks</TableHeader>
                            <TableHeader>Salaries</TableHeader>
                            <TableHeader>Closing Date</TableHeader>
                            <TableHeader>Actions</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job) => (
                            <tr key={job.id}>
                                <TableData>{job.companyName}</TableData>
                                <TableData>{job.jobType}</TableData>
                                <TableData>{job.industry}</TableData>
                                <TableData>{job.description}</TableData>
                                <TableData>{job.responsibilities}</TableData>
                                <TableData>{job.qualification}</TableData>
                                <TableData>{job.experience}</TableData>
                                <TableData>{job.jobPerks}</TableData>
                                <TableData>{job.salaries}</TableData>
                                <TableData>{job.closingDate}</TableData>
                                <TableData>
                                    <DeleteButton onClick={() => handleDelete(job.id)}>Delete</DeleteButton>
                                </TableData>
                            </tr>
                        ))}
                    </tbody>
                </JobTable>
            ) : (
                <p>No job listings available.</p> // Message displayed when no jobs are found
            )}
            <BackButton onClick={handleBackToDashboard}>
                Back to Dashboard
            </BackButton>
        </WorkPage>
    );
};

export default Work;

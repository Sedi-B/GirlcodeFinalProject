import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Assuming you have some styles here

const JobPostForm = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        jobType: '',
        industry: '',
        description: '',
        responsibilities: '',
        qualification: '',
        experience: '',
        jobPerks: '',
        salaries: '',
        closingDate: '' // Allow user to enter any date
    });

    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate that all fields are filled out
        if (Object.values(formData).some(field => !field)) {
            setMessage('Please fill out all fields.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/post-job', formData);

            if (response.data.success) {
                setMessage('Job posted successfully!');
                setFormData({
                    companyName: '',
                    jobType: '',
                    industry: '',
                    description: '',
                    responsibilities: '',
                    qualification: '',
                    experience: '',
                    jobPerks: '',
                    salaries: '',
                    closingDate: ''
                });
            } else {
                setMessage('An error occurred. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred. Please try again later.');
        }
    };

    const handleClear = () => {
        setFormData({
            companyName: '',
            jobType: '',
            industry: '',
            description: '',
            responsibilities: '',
            qualification: '',
            experience: '',
            jobPerks: '',
            salaries: '',
            closingDate: ''
        });
        setMessage('');
    };

    const handleExit = () => {
        navigate('/Dashboard');
    };

    return (
        <div className="job-post-form">
            <form onSubmit={handleSubmit}>
                <h1>Job Posting</h1>
                <div className="content">
                    <div className="input-field">
                        <label>Company Name</label>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            placeholder="Company Name"
                            autoComplete="off"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-field">
                        <label>Job Type</label>
                        <input
                            type="text"
                            name="jobType"
                            value={formData.jobType}
                            placeholder="Job Type"
                            autoComplete="off"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-field">
                        <label>Industry</label>
                        <input
                            type="text"
                            name="industry"
                            value={formData.industry}
                            placeholder="Industry"
                            autoComplete="off"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-field">
                        <label>Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            placeholder="Job Description"
                            autoComplete="off"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-field">
                        <label>Responsibilities</label>
                        <textarea
                            name="responsibilities"
                            value={formData.responsibilities}
                            placeholder="Responsibilities"
                            autoComplete="off"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-field">
                        <label>Qualification</label>
                        <input
                            type="text"
                            name="qualification"
                            value={formData.qualification}
                            placeholder="Qualification"
                            autoComplete="off"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-field">
                        <label>Experience</label>
                        <input
                            type="text"
                            name="experience"
                            value={formData.experience}
                            placeholder="Experience"
                            autoComplete="off"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-field">
                        <label>Job Perks</label>
                        <textarea
                            name="jobPerks"
                            value={formData.jobPerks}
                            placeholder="Job Perks"
                            autoComplete="off"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-field">
                        <label>Salaries</label>
                        <input
                            type="text"
                            name="salaries"
                            value={formData.salaries}
                            placeholder="Salaries"
                            autoComplete="off"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-field">
                        <label>Closing Date</label>
                        <input
                            type="text"
                            name="closingDate"
                            value={formData.closingDate}
                            placeholder="Closing Date"
                            autoComplete="off"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="action">
                    <button type="submit">Post Job</button>
                    <button type="button" onClick={handleClear}>Clear</button>
                    <button type="button" onClick={handleExit}>Exit</button>
                </div>
                {message && <p className="message">{message}</p>}
            </form>
        </div>
    );
};

export default JobPostForm;

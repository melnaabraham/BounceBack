import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  // State variables to hold user inputs
  const [reason, setReason] = useState('');
  const [role, setRole] = useState('');
  const [excitingWork, setExcitingWork] = useState('');
  const [supportRequest, setSupportRequest] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the data (you can send it to an API or store it)
    console.log({
      reason,
      role,
      excitingWork,
      supportRequest,
    });

    // Navigate to the industry page after submission
    navigate('/industry');
  };

  return (
    <div className="content"> {/* This class is already set */}
      <h1>Welcome to BounceBack</h1>
      <p>What brings you here?</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>1) What brings you to us?</label>
          <select value={reason} onChange={(e) => setReason(e.target.value)} required>
            <option value="">Select...</option>
            <option value="Returning to work after a break">Returning to work after a break</option>
            <option value="Transitioning to a new career">Transitioning to a new career</option>
            <option value="Starting my first job">Starting my first job</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label>2) What type of role are you looking for?</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="">Select...</option>
            <option value="Entry-level">Entry-level</option>
            <option value="Mid-level">Mid-level</option>
            <option value="Freelancer/Contractor">Freelancer/Contractor</option>
            <option value="Internship">Internship</option>
            <option value="Still exploring options">I’m still exploring options</option>
          </select>
        </div>

        <div>
          <label>3) What’s a type of work that sounds exciting or fulfilling to you?</label>
          <select value={excitingWork} onChange={(e) => setExcitingWork(e.target.value)} required>
            <option value="">Select...</option>
            <option value="Building and designing">Building and designing</option>
            <option value="Analyzing data">Analyzing data</option>
            <option value="Helping people">Helping people</option>
            <option value="Teaching others">Teaching others</option>
            <option value="Organizing projects">Organizing projects</option>
            <option value="Working with numbers">Working with numbers</option>
          </select>
        </div>

        <div>
          <label>4) Is there something specific that would make you feel more supported or comfortable in this process?</label>
          <input
            type="text"
            value={supportRequest}
            onChange={(e) => setSupportRequest(e.target.value)}
            placeholder="Optional"
          />
        </div>

        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Home;

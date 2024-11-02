import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Industry.css';

const Industry = () => {
  const navigate = useNavigate();

  // State variables
  const [industry, setIndustry] = useState('');
  const [field, setField] = useState('');
  const [role, setRole] = useState('');
  const [subfield, setSubfield] = useState('');
  const [developmentArea, setDevelopmentArea] = useState('');

  // Define options for the dropdowns
  const industries = [
    'Healthcare',
    'Technology (IT)',
    'Finance',
    'Construction',
    'Education',
    'Manufacturing',
    'Retail',
    'Professional Services',
    'Transportation',
  ];

  const fields = {
    'Healthcare': [
      'Nursing',
      'Healthcare Administration',
      'Public Health',
      'Pharmaceuticals',
      'Health Informatics',
    ],
    'Technology (IT)': [
      'Data Science',
      'Web Development',
      'Computer Networking',
      'Artificial Intelligence/Machine Learning',
      'Cybersecurity',
      'Software Development',
      'Cloud Computing',
      'User Experience Design',
      'Database Management',
    ],
    'Finance': [
      'Investment Banking',
      'Financial Analysis',
      'Actuarial Science',
      'Risk Management',
      'Financial Technology',
    ],
    // Add other industries and their fields here...
  };

  // Roles based on the second dropdown
  const roles = {
    'Artificial Intelligence/Machine Learning': [
      'Data Scientist',
      'Machine Learning Engineer',
      'AI Researcher',
      'Software Developer',
      'User Experience Designer',
    ],
    // Add other fields and their roles here...
  };

  // Subfields available regardless of the role selected
  const subfields = [
    'Deep Learning',
    'Natural Language Processing',
    'Computer Vision',
    'Recommender Systems',
    'Robotics and Autonomous Systems',
    'AI Ethics and Fairness',
    'AI in Healthcare',
    'AI in Finance',
    'AI in Gaming',
  ];

  const handleIndustryChange = (e) => {
    setIndustry(e.target.value);
    setField(''); // Reset field when industry changes
    setRole('');  // Reset role when industry changes
    setSubfield(''); // Reset subfield when industry changes
  };

  const handleFieldChange = (e) => {
    setField(e.target.value);
    setRole(''); // Reset role when field changes
    setSubfield(''); // Reset subfield when field changes
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setSubfield(''); // Reset subfield when role changes
  };

  const handleDevelopmentAreaClick = (area) => {
    // Check if all required fields are filled before navigating
    if (industry && field && role && subfield) {
      navigate('/skills'); // Navigate only if all fields are filled
    } else {
      alert('Please fill in all fields before proceeding to the Skills page.');
    }
  };

  return (
    <div className="content">
      <h1>Industry Exploration</h1>
      <form>
        <div>
          <label>1) What industry are you looking for? If you’re unsure, that’s totally okay—feel free to pick a few that interest you!</label>
          <select value={industry} onChange={handleIndustryChange} required>
            <option value="">Select...</option>
            {industries.map((ind, index) => (
              <option key={index} value={ind}>{ind}</option>
            ))}
          </select>
        </div>

        <div>
          <label>2) Are there any specific fields within that industry that you’re curious about or would like to explore?</label>
          <select value={field} onChange={handleFieldChange} disabled={!industry} required>
            <option value="">Select...</option>
            {industry && fields[industry].map((f, index) => (
              <option key={index} value={f}>{f}</option>
            ))}
          </select>
        </div>

        <div>
          <label>3) Is there a particular role you’ve thought about?</label>
          <select value={role} onChange={handleRoleChange} disabled={!field} required>
            <option value="">Select...</option>
            {field && roles[field]?.map((r, index) => (
              <option key={index} value={r}>{r}</option>
            ))}
          </select>
        </div>

        <div>
          <label>4) Let’s get even more specific! Any specific subfields you’re interested in?</label>
          <select value={subfield} onChange={(e) => setSubfield(e.target.value)} required>
            <option value="">Select...</option>
            {subfields.map((s, index) => (
              <option key={index} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="development-area">
          <h2>Select a Development Area</h2>
          <button type="button" onClick={() => handleDevelopmentAreaClick('Skills Development')}>Skills Development</button>
          <button type="button" onClick={() => handleDevelopmentAreaClick('Career Development')}>Career Development</button>
          <button type="button" onClick={() => handleDevelopmentAreaClick('Professional Mentorship')}>Professional Mentorship</button>
        </div>

      </form>
    </div>
  );
};

export default Industry;

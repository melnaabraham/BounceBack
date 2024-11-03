import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for API calls
import './Industry.css';

const Industry = () => {
  const navigate = useNavigate();

  // State variables
  const [industry, setIndustry] = useState('');
  const [field, setField] = useState('');
  const [role, setRole] = useState('');
  const [subfield, setSubfield] = useState('');

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
    // Define fields based on industries
    'Healthcare': ['Patient Care', 'Health Informatics', 'Pharmaceuticals'],
    'Technology (IT)': ['Software Development', 'Cybersecurity', 'Data Science', 'Artificial Intelligence/Machine Learning'],
    'Finance': ['Investment Banking', 'Accounting', 'Financial Analysis'],
    'Construction': ['Project Management', 'Architecture', 'Civil Engineering'],
    'Education': ['Teaching', 'Curriculum Development', 'Educational Technology'],
    'Manufacturing': ['Quality Control', 'Manufacturing Supply Chain Management', 'Production'],
    'Retail': ['Sales Management', 'Inventory Control', 'Customer Service'],
    'Professional Services': ['Consulting', 'Legal Services', 'Human Resources'],
    'Transportation': ['Logistics', 'Transportation upply Chain Management', 'Fleet Management'],
  };

  const roles = {
    // Healthcare roles
    'Patient Care': ['Registered Nurse', 'Medical Assistant', 'Patient Care Technician'],
    'Health Informatics': ['Health Information Technician', 'Clinical Data Analyst', 'Health IT Specialist'],
    'Pharmaceuticals': ['Pharmacist', 'Pharmacy Technician', 'Pharmaceutical Sales Representative'],
    
    // Technology (IT) roles
    'Software Development': ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'],
    'Cybersecurity': ['Security Analyst', 'Penetration Tester', 'Security Engineer'],
    'Data Science': ['Data Analyst', 'Data Scientist', 'Machine Learning Engineer'],
    'Artificial Intelligence/Machine Learning': ['AI Research Scientist', 'Machine Learning Engineer', 'NLP Engineer'],

    // Finance roles
    'Investment Banking': ['Investment Banker', 'Financial Analyst', 'Portfolio Manager'],
    'Accounting': ['Accountant', 'Auditor', 'Tax Specialist'],
    'Financial Analysis': ['Risk Analyst', 'Budget Analyst', 'Financial Consultant'],

    // Construction roles
    'Project Management': ['Construction Project Manager', 'Site Supervisor', 'Project Coordinator'],
    'Architecture': ['Architect', 'Architectural Drafter', 'Urban Planner'],
    'Civil Engineering': ['Civil Engineer', 'Structural Engineer', 'Surveyor'],

    // Education roles
    'Teaching': ['Elementary Teacher', 'High School Teacher', 'Special Education Teacher'],
    'Curriculum Development': ['Instructional Designer', 'Curriculum Specialist', 'Educational Consultant'],
    'Educational Technology': ['EdTech Specialist', 'Learning Management System Administrator', 'E-Learning Developer'],

    // Manufacturing roles
    'Quality Control': ['Quality Control Inspector', 'Quality Assurance Manager', 'Process Improvement Specialist'],
    'Manufacturing Supply Chain Management': ['Supply Chain Analyst', 'Logistics Coordinator', 'Inventory Manager'],
    'Production': ['Production Supervisor', 'Assembly Line Worker', 'Manufacturing Engineer'],

    // Retail roles
    'Sales Management': ['Store Manager', 'Sales Associate', 'Sales Analyst'],
    'Inventory Control': ['Inventory Specialist', 'Warehouse Manager', 'Merchandise Planner'],
    'Customer Service': ['Customer Service Representative', 'Customer Success Manager', 'Call Center Agent'],

    // Professional Services roles
    'Consulting': ['Management Consultant', 'Strategy Consultant', 'Business Analyst'],
    'Legal Services': ['Lawyer', 'Paralegal', 'Legal Assistant'],
    'Human Resources': ['HR Manager', 'Recruiter', 'Employee Relations Specialist'],

    // Transportation roles
    'Logistics': ['Logistics Manager', 'Freight Coordinator', 'Supply Chain Planner'],
    'Transportation Supply Chain Management': ['Transportation Planner', 'Procurement Specialist', 'Logistics Analyst'],
    'Fleet Management': ['Fleet Manager', 'Fleet Coordinator', 'Vehicle Maintenance Specialist']
  };

  const subfields = {
    // Healthcare subfields
    'Patient Care': ['Nursing', 'Emergency Care', 'Home Health Services'],
    'Health Informatics': ['Electronic Health Records', 'Health Data Analytics', 'Telemedicine'],
    'Pharmaceuticals': ['Drug Development', 'Pharmacology', 'Clinical Trials'],

    // Technology (IT) subfields
    'Software Development': ['Frontend Development', 'Backend Development', 'Mobile App Development'],
    'Cybersecurity': ['Network Security', 'Threat Intelligence', 'Incident Response'],
    'Data Science': ['Statistical Analysis', 'Predictive Modeling', 'Data Wrangling'],
    'Artificial Intelligence/Machine Learning': ['Deep Learning', 'NLP (Natural Language Processing)', 'Computer Vision', 'Generative AI'],

    // Finance subfields
    'Investment Banking': ['Mergers & Acquisitions', 'Equity Research', 'Private Equity'],
    'Accounting': ['Tax Accounting', 'Auditing', 'Forensic Accounting'],
    'Financial Analysis': ['Financial Forecasting', 'Risk Analysis', 'Portfolio Management'],

    // Construction subfields
    'Project Management': ['Scheduling', 'Budgeting', 'Resource Allocation'],
    'Architecture': ['Urban Design', 'Building Design', 'Landscape Architecture'],
    'Civil Engineering': ['Structural Engineering', 'Transportation Engineering', 'Environmental Engineering'],

    // Education subfields
    'Teaching': ['Classroom Instruction', 'Special Education', 'Adult Education'],
    'Curriculum Development': ['Instructional Design', 'Assessment Development', 'Program Evaluation'],
    'Educational Technology': ['E-Learning Development', 'EdTech Support', 'Technology Integration'],

    // Manufacturing subfields
    'Quality Control': ['Product Testing', 'Compliance', 'Process Improvement'],
    'Manufacturing Supply Chain Management': ['Inventory Control', 'Supplier Relations', 'Demand Planning'],
    'Production': ['Assembly Line Supervision', 'Machinery Operation', 'Production Scheduling'],

    // Retail subfields
    'Sales Management': ['Sales Strategy', 'Team Management', 'Sales Analytics'],
    'Inventory Control': ['Stock Management', 'Order Fulfillment', 'Demand Forecasting'],
    'Customer Service': ['Customer Support', 'Client Relationship Management', 'Complaint Resolution'],

    // Professional Services subfields
    'Consulting': ['Business Strategy', 'Process Optimization', 'Market Research'],
    'Legal Services': ['Corporate Law', 'Litigation', 'Contract Law'],
    'Human Resources': ['Recruitment', 'Employee Relations', 'Compensation and Benefits'],

    // Transportation subfields
    'Logistics': ['Transportation Planning', 'Warehousing', 'Freight Management'],
    'Transportation Supply Chain Management': ['Supplier Management', 'Inventory Planning', 'Distribution Management'],
    'Fleet Management': ['Vehicle Maintenance', 'Driver Scheduling', 'Fuel Management']
  };

  const handleIndustryChange = (e) => {
    setIndustry(e.target.value);
    setField(''); // Reset field when industry changes
    setRole('');  // Reset role when industry changes
    setSubfield(''); // Reset subfield when industry changes
  };

  const handleFieldChange = (e) => {
    setField(e.target.value);
    setRole(''); // Reset role when field changes
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async () => {
    if (industry && field && role && subfield) {
      try {
        // Prepare data to send to the backend
        const careerInfo = {
          field: industry,
          sector: field,
          subsector: subfield,
          role: role,
        };

        // Call the backend API to get questions based on career info
        const response = await axios.post('http://localhost:8000/get_questions', JSON.stringify(careerInfo), { headers: { 'Content-Type': 'application/json' }});
        // Store questions in local storage or pass them directly to the next screen
        localStorage.setItem('careerInfo', JSON.stringify(careerInfo));
        localStorage.setItem('questions', JSON.stringify(response.data.questions));

        // Navigate to the skills page after fetching questions
        navigate('/skills');
      } catch (error) {
        console.error('Error fetching questions:', error);
        alert('There was an error fetching questions. Please try again.');
      }
      
    } else {
      alert('Please fill in all fields before proceeding to the Skills page.');
    }
  };

  return (
    <div className="content">
      <h1>Industry Exploration</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <div>
          <label>1) What industry are you looking for?</label>
          <select value={industry} onChange={handleIndustryChange} required>
            <option value="">Select...</option>
            {
            industries.map((ind, index) => (
              <option key={index} value={ind}>{ind}</option>
            ))}
          </select>
        </div>

        <div>
          <label>2) Are there any specific fields within that industry that you’re curious about?</label>
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
          <select value={subfield} onChange={(e) => setSubfield(e.target.value)}  disabled={!field} required>
            <option value="">Select...</option>
            {field && subfields[field].map((s, index) => (
              <option key={index} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="development-area">
          <h2>Select a Development Area</h2>
          <button type="button" onClick={handleSubmit}>Skills Development</button>
          <button type="button" onClick={handleSubmit}>Career Development</button>
          <button type="button" onClick={handleSubmit}>Professional Mentorship</button>
        </div>
      </form>
    </div>
  );
};

export default Industry;

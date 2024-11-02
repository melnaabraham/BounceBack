import React from 'react';
import { useLocation } from 'react-router-dom';
import './Plan.css';

const Plan = () => {
  const location = useLocation();
  const { industry, field, role, subfield, skills } = location.state || {};

  return (
    <div>
      <h1>Your Development Plan</h1>
      <h2>Industry: {industry}</h2>
      <h2>Field: {field}</h2>
      <h2>Role: {role}</h2>
      <h2>Subfield: {subfield}</h2>
      <h2>Skills Development Goals:</h2>
      <ul>
        <li>{skills.skill1}</li>
        <li>{skills.skill2}</li>
        <li>{skills.skill3}</li>
        <li>{skills.skill4}</li>
        <li>{skills.skill5}</li>
      </ul>
    </div>
  );
};

export default Plan;

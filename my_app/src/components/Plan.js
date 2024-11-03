import React from 'react';
import { useLocation } from 'react-router-dom';
import './Plan.css';

const Plan = () => {
  const careerPlan = JSON.parse(localStorage.getItem('careerPlan'));
  // const location = useLocation();
  // const { industry, field, role, subfield } = location.state || {};

  return (
    <div id="results">
      {/* <h1>Your Development Plan</h1>
      <h2>Industry: {industry}</h2>
      <h2>Field: {field}</h2>
      <h2>Role: {role}</h2>
      <h2>Subfield: {subfield}</h2> */}
      <p>{careerPlan}</p>
    </div>
  );
};

export default Plan;

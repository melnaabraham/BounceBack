import React from 'react';
import { useLocation } from 'react-router-dom';

const Plan = () => {
  const location = useLocation();
  const { skills } = location.state || { skills: {} };

  return (
    <div>
      <h2>Your Development Plan</h2>
      <ul>
        {Object.entries(skills).map(([skill, rating]) => (
          <li key={skill}>
            {skill}: {rating}
          </li>
        ))}
      </ul>
      <p>This is a placeholder for your personalized development plan!</p>
    </div>
  );
};

export default Plan;

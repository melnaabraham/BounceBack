import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Skills = () => {
  const [skills, setSkills] = useState({
    JavaScript: 0,
    Python: 0,
    React: 0,
  });

  const handleRatingChange = (skill, value) => {
    setSkills((prev) => ({
      ...prev,
      [skill]: value,
    }));
  };

  return (
    <div>
      <h2>Rate your skills</h2>
      {Object.keys(skills).map((skill) => (
        <div key={skill}>
          <label>{skill}:</label>
          <input
            type="number"
            min="0"
            max="5"
            value={skills[skill]}
            onChange={(e) => handleRatingChange(skill, e.target.value)}
          />
        </div>
      ))}
      <Link to="/plan">
        <button>Create my development plan</button>
      </Link>
    </div>
  );
};

export default Skills;

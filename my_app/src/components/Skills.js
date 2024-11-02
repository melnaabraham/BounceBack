import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Skills.css';

const Skills = () => {
  const navigate = useNavigate();

  // State variables for the text fields
  const [skill1, setSkill1] = useState('');
  const [skill2, setSkill2] = useState('');
  const [skill3, setSkill3] = useState('');
  const [skill4, setSkill4] = useState('');
  const [skill5, setSkill5] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the data
    console.log({
      skill1,
      skill2,
      skill3,
      skill4,
      skill5,
    });

    // Navigate to the Plan page
    navigate('/plan');
  };

  return (
    <div>
      <h1>Skills Development</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>1) What skills do you want to develop?</label>
          <input type="text" value={skill1} onChange={(e) => setSkill1(e.target.value)} required />
        </div>

        <div>
          <label>2) What resources or support do you need to develop these skills?</label>
          <input type="text" value={skill2} onChange={(e) => setSkill2(e.target.value)} required />
        </div>

        <div>
          <label>3) Are there any specific projects you would like to work on to enhance these skills?</label>
          <input type="text" value={skill3} onChange={(e) => setSkill3(e.target.value)} required />
        </div>

        <div>
          <label>4) What is your timeline for achieving these skill development goals?</label>
          <input type="text" value={skill4} onChange={(e) => setSkill4(e.target.value)} required />
        </div>

        <div>
          <label>5) Is there anything else you would like to share regarding your skills development?</label>
          <input type="text" value={skill5} onChange={(e) => setSkill5(e.target.value)} />
        </div>

        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Skills;

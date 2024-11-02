import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Industry = () => {
  const [industry, setIndustry] = useState('');

  const handleInputChange = (event) => {
    setIndustry(event.target.value);
  };

  return (
    <div>
      <h2>What industry are you in?</h2>
      <input 
        type="text" 
        value={industry} 
        onChange={handleInputChange} 
        placeholder="Enter your industry" 
      />
      <p>Would you like to focus on skills development?</p>
      <Link to="/skills">
        <button>Yes, let's proceed!</button>
      </Link>
      {/* No action needed for career development as per your requirement */}
    </div>
  );
};

export default Industry;

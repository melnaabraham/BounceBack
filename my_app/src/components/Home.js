import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to [Your Website Name]</h1>
      <p>What brings you here?</p>
      <Link to="/industry">Let's get started!</Link>
    </div>
  );
};

export default Home;

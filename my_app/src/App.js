import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Industry from './components/Industry';
import Skills from './components/Skills';
import Plan from './components/Plan';
import './App.css'; // Ensure you have a CSS file for overall app styles

function App() {
  return (
    <div>
      <div className="home-button">
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/plan" element={<Plan />} />
      </Routes>
    </div>
  );
}

export default App;

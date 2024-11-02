import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Industry from './components/Industry';
import Skills from './components/Skills';
import Plan from './components/Plan';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/industry">Industry</Link>
          </li>
          <li>
            <Link to="/skills">Skills Development</Link>
          </li>
        </ul>
      </nav>

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

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Skills.css';

const Skills = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // Retrieve career info from local storage
        // const careerInfo = JSON.parse(localStorage.getItem('careerInfo'));
        const questions = JSON.parse(localStorage.getItem('questions'));
        // Fetch questions from the backend
        // const response = await axios.post('/get_questions', careerInfo);
        setQuestions(questions);
      } catch (error) {
        console.error('Error fetching questions:', error);
        alert('There was an error loading the questions. Please try again.');
      }
    };

    fetchQuestions();
  }, []);

  const handleResponseChange = (questionIndex, value) => {
    setResponses(prev => ({
      ...prev,
      [questionIndex]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const careerInfo = JSON.parse(localStorage.getItem('careerInfo'));
      
      const planData = {
        career_info: careerInfo, 
        responses: responses
      };

      console.log(planData);

      // Send responses to the backend
      const response = await axios.post(
         'http://localhost:8000/generate_plan',
         JSON.stringify(planData),
         { headers: { 'Content-Type': 'application/json' }}
      );
      
      // Store the generated plan
      localStorage.setItem('careerPlan', JSON.stringify(response.data.plan));

      // Navigate to the Plan page
      navigate('/plan');
    } catch (error) {
      console.error('Error generating plan:', error);
      alert('There was an error generating your plan. Please try again.');
    }
  };

  return (
    <div>
      <h1>Skills Assessment</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index}>
            <label>{question}</label>
            <input 
              type="text" 
              value={responses[index] || ''} 
              onChange={(e) => handleResponseChange(index, e.target.value)} 
              required 
            />
          </div>
        ))}
        <button type="submit">Generate Plan</button>
      </form>
    </div>
  );
};

export default Skills;
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SurveyPage from './pages/SurveyPage';
import SurveyResultsPage from './pages/SurveyResultsPage';

const App = () => {
  const [ surveyResults, setSurveyResults ] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/survey" element={<SurveyPage resultCallback={setSurveyResults} />} />
        <Route path="/results" element={<SurveyResultsPage results={surveyResults} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

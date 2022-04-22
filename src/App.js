import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SurveyPage from './pages/SurveyPage';
import SurveyResultsPage from './pages/SurveyResultsPage';
import ConsentForm from './pages/ConsentForm';
import AboutUs from './pages/AboutUs';
import NavigationBar from './pages/NavigationBar';
import FullConsentForm from './pages/FullConsentForm';

const App = () => {
  const [ surveyResults, setSurveyResults ] = useState(null);

  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/consentform" element={<ConsentForm />}/>
        <Route path="/survey" element={<SurveyPage resultCallback={setSurveyResults} />} />
        <Route path="/results" element={<SurveyResultsPage results={surveyResults} />} />
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/fullconsentform" element={<FullConsentForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

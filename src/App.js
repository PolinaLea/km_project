/* App.js */

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './StartPage';
import DecisionTree from './DecisionTree';
import WorkerAllocation from './WorkerAllocation';
import ErrorRiskIdentEval from './ErrorRiskIdentEval';
import AtbMain from './AtbMain';
import ChatbotComponent from './ChatbotComponent';
import { question_data } from './global';

function App() {
  return (
    <div className="app-container">
      <div className="left-container">
        <div className="header-container">
          {<h1 className="header-text">Production online business helper</h1>}
        </div>
        <div className="button-container">
          <Router>
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/worker_allocation" element={<WorkerAllocation />} />
              <Route path="/error_identification_main" element={<ErrorRiskIdentEval />} />
              <Route path="/automated_test_building" element={<AtbMain />} />
              {question_data.map((t, index) => (
                <Route key={index} path={t.path} element={<DecisionTree title={t.title} data={t.data} />} />
              ))}
            </Routes>
          </Router>
        </div>
      </div>
      <div className="right-container">
        <ChatbotComponent />
      </div>
    </div>
  );
}

export default App;

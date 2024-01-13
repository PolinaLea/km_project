
import './App.css';
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './StartPage';
import DecisionTree from './DecisionTree';
import WorkerAllocation from './WorkerAllocation';
import ErrorRiskIdentEval from './ErrorRiskIdentEval';
import AtbMain from './AtbMain';
import ChatbotComponent from './ChatbotComponent'
import { question_data } from './global';

function App() {
    return (
    <div className="App">
        <header className="App-header">
            <h1>Knowledge Management Project</h1>
            <h2>Production online business helper</h2>
            <Router>
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="/worker_allocation" element={<WorkerAllocation />} />
                    <Route path="/error_identification_main" element={<ErrorRiskIdentEval/>} />                    
                    <Route path="/automated_test_building" element={<AtbMain/>} />
                    {question_data.map((t, index) => {
                    return <Route key={index} path={t.path} element={<DecisionTree title={t.title} data={t.data} />}/>})}
                </Routes>
            </Router>
            
            <ChatbotComponent />
        </header>
    </div>
  );
}

export default App;

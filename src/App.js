
import './App.css';
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './StartPage';
import DecisionTree from './DecisionTree';
import questions_coc from './questions_coc.json';
import questions_prr from './questions_prr.json';
import questions_atb from './questions_atb.json';
import questions_wam from './questions_wam.json';
import questions_wag from './questions_wag.json';
import questions_atbra from './questions_atbra.json';
import questions_atbhr from './questions_atbhr.json';
import questions_qee from './questions_qee.json';
import questions_eri from './questions_eri.json';
import WorkerAllocation from './WorkerAllocation';
import ErrorRiskIdentEval from './ErrorRiskIdentEval';
import AtbMain from './AtbMain';

function App() {
    return (
    <div className="App">
        <header className="App-header">
            <h1>Knowledge Management Project</h1>
            <h2>Production online business helper</h2>
            <Router>
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="/custom_order_completion" element={<DecisionTree data={questions_coc} title="Custom Order Completion" />} />
                    <Route path="/worker_allocation" element={<WorkerAllocation />} />
                    <Route path="/error_identification_main" element={<ErrorRiskIdentEval/>} />                    
                    <Route path="/automated_test_building" element={<AtbMain/>} />
                    <Route path="/automated_test_building_robot_requirements" element={<DecisionTree data={questions_atb} title="Automated Test Building - Robot Requirements" />} />
                    <Route path="/automated_test_building_robot_risk_assessment" element={<DecisionTree data={questions_atbra} title="Automated Test Building - Risk assessment" />} />
                    <Route path="/automated_test_building_robot_human_robot_interaction" element={<DecisionTree data={questions_atbhr} title=" Automated Test Building - Human-Robot Interaction" />} />
                    <Route path="/worker_allocation_geom" element={<DecisionTree data={questions_wag} title="Worker allocation - geometry" />} />
                    <Route path="/worker_allocation_machine" element={<DecisionTree data={questions_wam} title="Worker Allocation - machine" />} />
                    <Route path="/quality_error_evaluation" element={<DecisionTree data={questions_qee} title="Quality error evaluation" />} />
                    <Route path="/error_identification" element={<DecisionTree data={questions_eri} title="Error identification" />} />
                    <Route path="/production_reschedule" element={<DecisionTree data={questions_prr} title="Production reschedule" />} />

                </Routes>
            </Router>
        </header>
    </div>
  );
}

export default App;

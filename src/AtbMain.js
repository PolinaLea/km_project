
import './App.css';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function AtbMain() {
    const horizontalStyle = {
        display: 'flex',   // Enables flexbox
        flexDirection: 'row',  // Aligns children in a row
        justifyContent: 'center',  // Centers the buttons in the container
        alignItems: 'center', // Centers the buttons vertically (if needed)
        padding: '10px',  // Padding inside the container
    };

    const navigate = useNavigate();
    const [activeQuestion, setActiveQuestion] = useState('activeQuestion');
    const gotoLink = (link) => {
        setActiveQuestion("1", true);
        navigate(link);
    }






return (
    <div className="button-container">
    
      <Button className="button-neu" onClick={() => gotoLink("/automated_test_building_robot_requirements")}>
        Custom Order Completion
      </Button>
      <Button className="button-neu" onClick={() => gotoLink("/automated_test_building_robot_risk_assessment")}>
        Worker Allocation
      </Button>
      <Button className="button-neu" onClick={() => gotoLink("/automated_test_building_robot_human_robot_interaction")}>
        Error Identification and Evaluation
      </Button>
        <br>
        </br>
    <Button className="button-neu" href="/">
        Restart
    </Button>
    </div>


  );
}



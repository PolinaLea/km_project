
import './App.css';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function ATB_main() {
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

    const buttonStyle = {
        margin: '0 10px', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    };
    
    const imageStyle = {
        width: '100px', // adjust as needed
        height: '100px', // adjust as needed
        marginBottom: '10px', // space between image and text
    };

    return (
            <div>
            <div style={horizontalStyle}>
                <Button variant="contained" style={buttonStyle} onClick={() => gotoLink("/automated_test_building_robot_requirements")}>
                <img src="/automated_test_building_robot__requirement.png" alt="Automated Test Building Robot requirements Image" style={imageStyle} /> Automated Test Building - Robot Requirements </Button>
            <Button variant="contained" style={buttonStyle} onClick={() => gotoLink("/automated_test_building_robot_risk_assessment")}>
            <img src="/automated_test_building_risk_assessment.png" alt="Automated Test Building Risk assessment" style={imageStyle} />Automated Test Building - Risk assessment</Button>
            <Button variant="contained" style={buttonStyle} onClick={() => gotoLink("/automated_test_building_robot_human_robot_interaction")}>
                <img src="/automated_test_building_human_robot.png" alt="Automated Test Building Human Robot Image" style={imageStyle} /> Automated Test Building - Human-Robot Interaction </Button>
            </div>
                <Button variant="contained" style={buttonStyle} href="/">
                    Restart
                </Button>
            </div>
   );
}



import './App.css';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function StartPage() {
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
                <Button variant="contained" style={buttonStyle} onClick={() => gotoLink("/custom_order_completion")}>
                <img src="/custom_order_completion_logo.png" alt="Custom Order Completion" style={imageStyle} /> Custom Order Completion</Button>
            <Button variant="contained" style={buttonStyle} onClick={() => gotoLink("/worker_allocation")}>
                <img src="/worker_allocation_main.png" alt="Worker allocation main" style={imageStyle} />Worker Allocation</Button>

            <Button variant="contained" style={buttonStyle} onClick={() => gotoLink("/error_identification_main")}>
            <img src="/error_iden_eval_main.png" alt="Error_iden_eval main" style={imageStyle} />Error Identification and Evaluation</Button>

            <Button variant="contained" style={buttonStyle} onClick={() => gotoLink("/automated_test_building")}>
            <img src="/automated_test_building_main.png" alt="Automated test building main Image" style={imageStyle} />Automated Test Building</Button> 
            <Button variant="contained" style={buttonStyle} onClick={() => gotoLink("/production_reschedule")}>
            <img src="/producton_re.png" alt="Worker allocation main" style={imageStyle} />Production reschedule</Button>
            </div>
            </div>
   );
}


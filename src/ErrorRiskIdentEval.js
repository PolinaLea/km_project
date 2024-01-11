
import './App.css';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function ErrorRiskIdentEval() {
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
                <Button variant="contained" style={buttonStyle} onClick={() => gotoLink("/quality_error_evaluation")}>
                <img src="/quality_error_eval.png" alt="Quality Error Evaluation Image" style={imageStyle} /> Quality error evaluation</Button>
            <Button variant="contained" style={buttonStyle} onClick={() => gotoLink("/error_identification")}>
            <img src="/error_ident.png" alt="Error identification Image" style={imageStyle} />Error Identification</Button>

            </div>
            <Button variant="contained" style={buttonStyle} href="/">
                    Restart
                </Button>
            </div>
   );
}


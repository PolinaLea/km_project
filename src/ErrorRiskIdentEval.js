
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
        gap: '40px'
    };

    const navigate = useNavigate();
    const [activeQuestion, setActiveQuestion] = useState('activeQuestion');
    const gotoLink = (link) => {
        setActiveQuestion("1", true);
        navigate(link);
    }

   
    


    return     <div className="button-container">
    
            <Button className="button-neu"  onClick={() => gotoLink("/quality_error_evaluation")}>
                    Quality error evaluation
            </Button>
            <Button className="button-neu"  onClick={() => gotoLink("/error_identification")}>
                    Error Identification
            </Button>
            <br>
            </br>
            <Button className="button-neu" href="/">
            Restart
            </Button>
            </div>










}


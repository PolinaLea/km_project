import './App.css';
import Button from '@mui/material/Button';
import * as globals from './global.js';
import React, { useState, useEffect } from 'react';

export default function Decision(props) {
    const containerStyle = {
        display: 'flex',   // Enables flexbox
        flexDirection: 'row',  // Aligns children in a row
        justifyContent: 'center',  // Centers the buttons in the container
        alignItems: 'center', // Centers the buttons vertically (if needed)
        padding: '10px',  // Padding inside the container
        // Add more container styling as needed
    };
    const [activeQuestion, setActiveQuestion] = useState(globals.getActiveQuestion());

    useEffect(() => {
        const unsubscribe = globals.subscribe((newQuestion) => {
            setActiveQuestion(newQuestion);
        });
        return unsubscribe;
    }, []);

    const buttonStyle = {
        margin: '0 5px', // Adds horizontal space between buttons
        // Add more button styling as needed
    };

    const handleButtonClick = (index) => {
        globals.setActiveQuestion(props.data[activeQuestion].goTo[index]);
    };
    
    return (
        <div>
            <h3>{props.data[activeQuestion].text}</h3>
            { props.data[activeQuestion].answers ? 
              <div style={containerStyle}>
                {props.data[activeQuestion].answers.map((answer, index) => (
                    <Button
                        key={index}
                        variant="contained"
                        color="primary"
                        style={buttonStyle}
                        onClick={() => handleButtonClick(index)}
                    >
                        {answer}
                    </Button>
                ))}
              </div>
              : null
            }
        </div>
   );
}



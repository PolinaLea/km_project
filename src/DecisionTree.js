
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Decision from './Decision';
import Result from './Result';
import * as globals from './global.js';

export default function DecisionTree(props) {
    const containerStyle = {
    display: 'flex',   // Enables flexbox
    flexDirection: 'row',  // Aligns children in a row
    justifyContent: 'center',  // Centers the buttons in the container
    alignItems: 'center', // Centers the buttons vertically (if needed)
    padding: '10px',  // Padding inside the container
  };

  const buttonStyle = {
    margin: '0 5px', // Adds horizontal space between buttons
  };
    const [activeQuestion, setActiveQuestion] = useState(globals.getActiveQuestion());
    const [havePreviousQuestion, setHavePreviousQuestion] = useState(globals.havePreviousQuestion());

    useEffect(() => {
        const unsubscribe = globals.subscribe((newQuestion) => {
            setActiveQuestion(newQuestion);
            setHavePreviousQuestion(globals.havePreviousQuestion());
        });
        return unsubscribe;
    }, []);

    return (
        <div>
            <h2>{ props.title }</h2>
            { props.data[activeQuestion].type === 'question' && <Decision data={props.data} /> }
            { props.data[activeQuestion].type === 'result' && <Result data={props.data} /> }
            <div style={containerStyle}>
                <Button variant="contained" style={buttonStyle}
                        onClick={() => globals.setPreviousQuestion() }
                        disabled={!havePreviousQuestion}>
                    Back
                </Button>
                <Button variant="contained" style={buttonStyle} href="/">
                    Restart
                </Button>
            </div>
        </div>
    );
}


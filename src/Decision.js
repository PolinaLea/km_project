/*Decision.js*/

import './App.css';
import Button from '@mui/material/Button';
import * as globals from './global.js';
import React, { useState, useEffect } from 'react';

export default function Decision(props) {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    gap: '40px',
  };
  const [activeQuestion, setActiveQuestion] = useState(globals.getActiveQuestion());

  useEffect(() => {
    const unsubscribe = globals.subscribe((newQuestion) => {
      setActiveQuestion(newQuestion);
    });
    return unsubscribe;
  }, []);





  const handleButtonClick = (index) => {
    globals.setActiveQuestion(props.data[activeQuestion].goTo[index]);
  };

  return (
    <div>
      <h3>{props.data[activeQuestion].text}</h3>
      {props.data[activeQuestion].answers ? (
        <div style={containerStyle}>
          {props.data[activeQuestion].answers.map((answer, index) => (
            <Button
              key={index}
              className="button-neu"
              onClick={() => handleButtonClick(index)}
            >
              {answer}
            </Button>
          ))}
        </div>
      ) : null}
    </div>
  );
  
}

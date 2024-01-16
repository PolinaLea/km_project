/* DecisionTree.js */

import './App.css';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Decision from './Decision';
import Result from './Result';
import * as globals from './global.js';

export default function DecisionTree(props) {
    const containerStyle = {
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: '10px',
    gap: '10px'
    
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
                <br></br>
                <br></br>
                <br></br>
                <Button className="button-neu"
                        onClick={() => globals.setPreviousQuestion() }
                        disabled={!havePreviousQuestion}>
                    Back
                </Button>
                <br></br>
                <Button className="button-neu" href="/">
                    Restart
                </Button>
            </div>
        </div>
    );
}


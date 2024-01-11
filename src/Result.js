import './App.css';
import Button from '@mui/material/Button';
import * as globals from './global.js';
import React, { useState, useEffect } from 'react';

export default function Result(props) {
    const [activeQuestion, setActiveQuestion] = useState(globals.getActiveQuestion());

    return (
        <div>
            <h3>{props.data[activeQuestion].text}</h3>
        </div>
   );
}


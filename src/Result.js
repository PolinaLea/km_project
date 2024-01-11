import './App.css';
import * as globals from './global.js';
import React, { useState } from 'react';

export default function Result(props) {
    const [activeQuestion, setActiveQuestion] = useState(globals.getActiveQuestion());

    return (
        <div>
            <h3>{props.data[activeQuestion].text}</h3>
        </div>
   );
}


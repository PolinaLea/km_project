// WorkerAllocation.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function WorkerAllocation() {
    const navigate = useNavigate();
    const [activeQuestion, setActiveQuestion] = useState('activeQuestion');

    const gotoLink = (link) => {
        setActiveQuestion("1", true);
        navigate(link);
    };

    

 



    const horizontalStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        gap: '20px', 
      };

    return (
        <div className="button-container">
        
          <Button className="button-neu" onClick={() => gotoLink("/worker_allocation_geom")}>
          Worker allocation <br></br> - geometry -
          </Button>
          <Button className="button-neu" onClick={() => gotoLink("/worker_allocation_machine")}>
          Worker Allocation <br></br> - machine -
          </Button>
       
            <br>
            </br>
        <Button className="button-neu" href="/">
            Restart
        </Button>
        </div>
    
    
      );
    
}



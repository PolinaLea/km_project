/* StartPage.js */

import './App.css';
import Button from '@mui/material/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function StartPage() {
  const navigate = useNavigate();

  const gotoLink = (link) => {
    navigate(link);
  }

  return (
    <div className="button-container">
    
      <Button className="button-neu" onClick={() => gotoLink("/custom_order_completion")}>
        Custom Order Completion
      </Button>
      <Button className="button-neu" onClick={() => gotoLink("/worker_allocation")}>
        Worker Allocation
      </Button>
      <Button className="button-neu" onClick={() => gotoLink("/error_identification_main")}>
        Error Identification and Evaluation
      </Button>
      <Button className="button-neu" onClick={() => gotoLink("/automated_test_building")}>
        Automated Test Building
      </Button>
      <Button className="button-neu" onClick={() => gotoLink("/production_reschedule")}>
        Production Reschedule
      </Button>
    </div>
  );
}

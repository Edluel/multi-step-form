import React from 'react'
import { useLocation } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar() {
    const location = useLocation();
  return (
    <div className="side-bar">
        <div className="side-bar-step  frist">
            <button className={location.pathname === '/' ? 'selected' : ''}>1</button>
            <div className="side-bar-step-text">
                <h2>STEP 1</h2>
                <p>YOUR INFO</p>
            </div>
        </div>
        <div className="side-bar-step">
        <button className={location.pathname === '/step2' ? 'selected' : ''}>2</button>
            <div className="side-bar-step-text">
                <h2>STEP 2</h2>
                <p>SELECT PLAN</p>
            </div>
        </div>
        <div className="side-bar-step">
            <button className={location.pathname === '/step3' ? 'selected' : ''}>3</button>
            <div className="side-bar-step-text">
                <h2>STEP 3</h2>
                <p>ADD-ONS</p>
            </div>
        </div>
        <div className="side-bar-step">
        <button className={location.pathname === '/step4' ? 'selected' : ''}>4</button>
            <div className="side-bar-step-text">
                <h2>STEP 4</h2>
                <p>SUMMARY</p>
            </div>
        </div>
    </div>
  )
}

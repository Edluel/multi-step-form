import React from 'react'
import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="side-bar">
        <div className="side-bar-step  frist">
            <button>1</button>
            <div className="side-bar-step-text">
                <h2>STEP 1</h2>
                <p>YOUR INFO</p>
            </div>
        </div>
        <div className="side-bar-step">
            <button>2</button>
            <div className="side-bar-step-text">
                <h2>STEP 2</h2>
                <p>SELECT PLAN</p>
            </div>
        </div>
        <div className="side-bar-step">
            <button>3</button>
            <div className="side-bar-step-text">
                <h2>STEP 3</h2>
                <p>ADD-ONS</p>
            </div>
        </div>
        <div className="side-bar-step">
            <button>4</button>
            <div className="side-bar-step-text">
                <h2>STEP 4</h2>
                <p>SUMMARY</p>
            </div>
        </div>
    </div>
  )
}

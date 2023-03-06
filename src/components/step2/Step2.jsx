import React, { useState } from 'react'
import './step2.css'

export default function Step2() {
  const [activeOption, setActiveOption] = useState('Monthly');

  const handleOptionClick = (option) => {
    setActiveOption(option);
  }

  return (
    <div className="step-2">
      <h1>Select your plan</h1>
      <p>
        You have the option of monthly or yearly billing.
      </p>
      <div className="step-2-plan">
        <div className="step-2-plan-arcade">
          <div className="step-2-plan-arcade-img"/>
          <div className="step-2-arcade-text">
            Arcade
          </div>
        </div>
        <div className="step-2-plan-advanced">
          <div className="step-2-plan-advanced-img"/>
          <div className="step-2-advanced-text">
            Advanced
          </div>
        </div>
        <div className="step-2-plan-pro">
          <div className="step-2-plan-pro-img"/>
          <div className="step-2-pro-text">
            Pro
          </div>                       
        </div>
      </div>
      <div className="step-2-billing">
        <div 
          className={`step-2-billing-option ${activeOption === 'Monthly' ? 'active' : ''}`}
          onClick={() => handleOptionClick('Monthly')}
        >
          Monthly
        </div>
        <div className="step-2-billing-switch">
          <div className="step-2-billing-switch-pointer"></div>
        </div>
        <div 
          className={`step-2-billing-option ${activeOption === 'Yearly' ? 'active' : ''}`}
          onClick={() => handleOptionClick('Yearly')}
        >
          Yearly
        </div>
      </div>
    </div>
  )
}
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './step3.css';

export default function Step3(props) {
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const { setFormData } = props;
  const history = useHistory();

  const handleAddOnClick = (event, addOnName) => {
    event.stopPropagation();
    const isSelected = selectedAddOns.includes(addOnName);
    if (isSelected) {
      setSelectedAddOns(selectedAddOns.filter((name) => name !== addOnName));
    } else {
      setSelectedAddOns([...selectedAddOns, addOnName]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      addOns: selectedAddOns,
    }));
    history.push('/step4');
    
  };
  

  return (
    <div className="step-3">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="step-3-add-ons">
        <div className={`step-3-add-ons-add-on${selectedAddOns.includes('Online service') ? ' selected' : ''}`} onClick={(event) => handleAddOnClick(event, 'Online service')}>
          <input type="checkbox" checked={selectedAddOns.includes('Online service')} onChange={() => {}} />
          <div className="step-3-add-ons-add-on-text">
            <h3>Online service</h3>
            <p>Access to multiplayer games</p>
          </div>
          <div className="step-3-add-ons-add-on-price">
            <h4>+$1/mo</h4>
          </div>
        </div>
        <div className={`step-3-add-ons-add-on${selectedAddOns.includes('Larger storage') ? ' selected' : ''}`} onClick={(event) => handleAddOnClick(event, 'Larger storage')}>
          <input type="checkbox" checked={selectedAddOns.includes('Larger storage')} onChange={() => {}} />
          <div className="step-3-add-ons-add-on-text">
            <h3>Larger storage</h3>
            <p>Extra 1TB of cloud save</p>
          </div>
          <div className="step-3-add-ons-add-on-price">
            <h4>+$2/mo</h4>
          </div>
        </div>
        <div className={`step-3-add-ons-add-on${selectedAddOns.includes('Customizable Profile') ? ' selected' : ''}`} onClick={(event) => handleAddOnClick(event, 'Customizable Profile')}>
          <input type="checkbox" checked={selectedAddOns.includes('Customizable Profile')} onChange={() => {}} />
          <div className="step-3-add-ons-add-on-text">
            <h3>Customizable Profile</h3>
            <p>Custom theme on your profile</p>
          </div>
          <div className="step-3-add-ons-add-on-price">
            <h4>+$2/mo</h4>
          </div>
        </div>
      </div>
      <div className="step-3-footer">
        <button className='step-3-footer-back' onClick={() => history.push('/step2')} >Go Back</button>
        <button className='step-3-footer-next' onClick={handleSubmit}>Next Step</button>
      </div>
    </div>
  );
}

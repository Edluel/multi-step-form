import React from 'react'
import { useHistory } from 'react-router-dom';
import './step4.css'

export default function Step4(props) {
  const { formData } = props;
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push('/tks');
  };

  const addOnValue = {
    'Monthly': {
      'Online service': '$1/mo',
      'Larger storage': '$2/mo',
      'Customizable Profile': '$2/mo'
    },
    'Yearly': {
      'Online service': '$10/yr',
      'Larger storage': '$20/yr',
      'Customizable Profile': '$20/yr'
    }
  };

  function calculateTotal(plan, addons, billing) {
    let total = 0;
    if (plan === 'Arcade') {
      total += parseFloat(billing === 'Monthly' ? '9' : '90');
    } else if (plan === 'Advanced') {
      total += parseFloat(billing === 'Monthly' ? '12' : '120');
    } else {
      total += parseFloat(billing === 'Monthly' ? '15' : '150');
    }
    addons.forEach(addon => {
      total += parseFloat(addOnValue[billing][addon].slice(1));
    });
    return total.toFixed(0);
  }

  return (
    <div className="step-4">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="step-4-car">
        <div className="step-4-car-plan">
          <div className="step-4-car-plan-selelected">
            <h3>{formData.plan} ({formData.billing})</h3>
            <p onClick={() => history.push('/step2')} >Change</p>
          </div>
          <div className="step-4-car-plan-value">
            <h3>{formData.billing === "Monthly" ? "$9/mo" : "$90/yr"}</h3>
          </div>
        </div>
        <div className="step-4-car-addons">
          <div className="step-4-car-addons-selected">
            {formData.addOns.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <div className="step-4-car-addons-value">
              {formData.addOns.map((item) => (
                <h4 key={item}>+{addOnValue[formData.billing][item]}</h4>
              ))}
          </div>
        </div>
      </div>
      <div className="step-4-total">
        <p>Total (per {formData.billing === 'Monthly' ? 'month' : 'year'})</p>
        <h4>${calculateTotal(formData.plan, formData.addOns, formData.billing)}/{formData.billing==='Monthly' ? "mo" : "yr"}</h4>
      </div>
      <div className="step-4-footer">
        <button className='step-4-footer-back' onClick={() => history.push('/step3')} >Go Back</button>
        <button className='step-4-footer-next' onClick={handleSubmit}>Confirm</button>
      </div>
    </div>
  )
}

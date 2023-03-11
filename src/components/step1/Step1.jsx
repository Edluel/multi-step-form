import React, { useState } from 'react'
import './step1.css';
import { useHistory } from "react-router-dom";


export default function Step1(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const { setFormData } = props;
    const history = useHistory();


    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            name: name,
            email: email,
            phone: phone,
        });
        history.push('/step2');
    };

    
  return (
    <div className="step-1">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <form className="step-1-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter your name"
                required
            />

            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                required
            />

            <label htmlFor="phone">Phone</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{2}[0-9]{9}"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="Enter your phone number"
                required
            />

            <button type="submit">Next Step</button>
        </form>

    </div>
  )
}

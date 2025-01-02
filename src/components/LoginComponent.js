import React, { useState } from 'react';
import './LoginComponent.css';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');

  const sendOtp = () => {
    if (!phone) {
      setError('Please enter a valid phone number.');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    const otpCode = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
    setGeneratedOtp(otpCode);
    alert(`OTP sent to ${phone}: ${otpCode}`);
    setStep(2); // Move to the OTP verification step
    setError('');
  };

  const verifyOtp = () => {
    if (otp === generatedOtp.toString()) {
      alert('OTP Verified Successfully!');
      // Proceed to next step (e.g., login success, redirect, etc.)
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-card">
        <h2>OTP Login</h2>
        {error && <div className="error-message">{error}</div>}

        {step === 1 && (
          <div className="form-group">
            <label>Enter Phone Number:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="input-field"
            />
            <button onClick={sendOtp} className="primary-button">Send OTP</button>
          </div>
        )}

        {step === 2 && (
          <div className="form-group">
            <label>Enter OTP:</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="input-field"
            />
            <button onClick={verifyOtp} className="primary-button">Verify OTP</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;

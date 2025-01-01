import React, { useState } from 'react';
import './LoginComponent.css'; // Make sure to create this CSS file to style the component.

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
      <h2>OTP Login</h2>
      {error && <div className="error-message">{error}</div>}

      {step === 1 && (
        <div>
          <label>Enter Phone Number:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
          />
          <button onClick={sendOtp}>Send OTP</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <label>Enter OTP:</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </div>
      )}
    </div>
  );
};

export default Login;

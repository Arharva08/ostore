import React from 'react';
import LoginComponent from '../components/LoginComponent'; // Rename the imported Login to LoginComponent
import Header from '../components/Header';

const AboutUs = () => (
  <div>
    <LoginComponent /> {/* Use the renamed LoginComponent */}
  </div>
);

export default AboutUs;

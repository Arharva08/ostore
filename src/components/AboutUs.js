import React from 'react';
import './AboutUs.css';

const AboutUs = () => (
  <div className="about-us-container">
    {/* Intro Section */}
    <div className="intro-section">
      <h2 className="section-title">Welcome to Our Store</h2>
      <p className="intro-text">
        We are passionate about delivering the best quality products for our customers. 
        Our mission is to provide excellent customer service and top-quality items to cater to your needs.
      </p>
    </div>

    {/* Mission Section */}
    <div className="mission-section">
      <h2 className="section-title">Our Mission</h2>
      <p className="mission-text">
        Our mission is to be the leading online store by offering high-quality products at the best prices 
        while maintaining excellent customer service.
      </p>
    </div>

    {/* Team Section */}
    <div className="team-section">
      <h2 className="section-title">Meet Our Team</h2>
      <div className="team-members">
        {/* Example Team Member */}
        <div className="team-member">
          <img src="team-member-1.jpg" alt="Team Member" className="team-image" />
          <h3 className="team-name">John Doe</h3>
          <p className="team-role">CEO</p>
        </div>
        <div className="team-member">
          <img src="team-member-2.jpg" alt="Team Member" className="team-image" />
          <h3 className="team-name">Jane Smith</h3>
          <p className="team-role">COO</p>
        </div>
        {/* Add more team members as needed */}
      </div>
    </div>
  </div>
);

export default AboutUs;

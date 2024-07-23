import React from 'react';
import './aboutus.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="left-section">
        <h2>About Us</h2>
        <section className="history">
          <h3>History</h3>
          <p>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
        </section>
        <section className="vision-mission">
          <h3>Vision</h3>
          <p>To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
          <h3>Mission</h3>
          <p>To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
        </section>
        <section className="infrastructure">
          <h3>Infrastructure and Facilities</h3>
          <ul>
            <li>State-of-the-art science and computer labs</li>
            <li>Spacious and well-equipped classrooms</li>
            <li>Library with a vast collection of books and digital resources</li>
            <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
          </ul>
        </section>
      </div>
      <div className="right-section">
        <section className="principal-message">
          <h3>Principal's Message</h3>
          <p><u>"At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future."</u></p>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;

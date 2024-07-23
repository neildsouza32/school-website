import React from 'react';
import './home.css';
import logol from'./olgo.jpg'

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="header">
        <img src = {logol} alt="Springdale Public School Logo" className="logo" />
        <h1 className="school-name">Springdale Public School, Dholakpur</h1>
      </header>
      <p className="introduction">
        Welcome to Springdale Public School, where we nurture young minds for a brighter future. At Springdale Public School, we are dedicated to fostering a nurturing and dynamic learning environment that empowers students to achieve their full potential. Our commitment to academic excellence is complemented by a rich array of extracurricular activities, including sports, arts, and robotics, which provide students with a well-rounded education. Our experienced faculty members are passionate about inspiring and guiding students through their educational journey, ensuring they are well-prepared for future success. We pride ourselves on our inclusive community and innovative teaching methods that cater to diverse learning needs. Join us at Springdale Public School, where every student is valued, and every achievement is celebrated. Together, we build the foundation for a brighter tomorrow.
      </p>
      <div className="carousel-container">
        <h2 className="carousel-title">Highlights of Our School</h2>
        <div className="carousel">
          <div className="carousel-item">Annual Sports Day - Celebrating Excellence in Sports</div>
          <div className="carousel-item">Science Exhibition - Showcasing Student Innovations</div>
          <div className="carousel-item">Cultural Fest - Embracing Diversity and Creativity</div>
        </div>
      </div>
      {/* <nav className="quick-links">
        <a href="/about">About Us</a>
        <a href="/admissions">Admissions</a>
        <a href="/academics">Academics</a>
        <a href="/contact">Contact Us</a>
      </nav> */}
    </div>
  );
}

export default HomePage;

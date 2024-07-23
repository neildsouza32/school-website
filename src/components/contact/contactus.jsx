import React, { useState } from 'react';
import './contactus.css';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-us">
      <section className="contact-form">
        <h3>Contact Form</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={form.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
      <section className="google-maps">
        <h3>Our Location</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097373!2d144.95373531531888!3d-37.816279779751595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727b4f243f2330!2sEducation%20Lane!5e0!3m2!1sen!2sau!4v1625378981773!5m2!1sen!2sau"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </section>
      <section className="contact-info">
        <h3>Contact Information</h3>
        <p><strong>Address:</strong> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p><strong>Email:</strong> info@springdale.edu</p>
      </section>
    </div>
  );
}

export default ContactUs;

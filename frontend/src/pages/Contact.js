import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css'; // CSS file for styling
import Navbar from '../components/Navbar';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/contact', formData);
            setSubmissionStatus(response.data.message);
            setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form
        } catch (error) {
            setSubmissionStatus('Failed to send message. Please try again.');
        }
    };

    return (
        <div className="ContactPage">
      {/* NavBar */}
      < Navbar />
        <div className="contact-us-container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {submissionStatus && <p className="status-message">{submissionStatus}</p>}

            <div className="contact-grid-section">
                <h2>Drop Your Mail and Telephone</h2>
                <div className="contact-grid">
                    <div className="contact-option">
                        <a href="mailto:support@alumnimanagement.com" className="contact-link">
                            <span className="contact-icon">✉️</span>
                            <span className="contact-text">support@alumnimanage.com</span>
                        </a>
                    </div>
                    <div className="contact-option">
                        <a href="tel:+11234567890" className="contact-link">
                            <span className="contact-icon">📞</span>
                            <span className="contact-text">+91 - 8883427896</span>
                        </a>
                    </div>
                </div>
            </div>

             {/* Footer */}
      
  </div>
  <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Connectify. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </footer>
  </div>
  );
};

export default ContactUs;
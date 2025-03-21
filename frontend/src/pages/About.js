import React from 'react';
import './About.css';
import Navbar from '../components/Navbar';
import abouthero from '../images/abouthero.webp';
import vaibhav from '../images/vaibhav.jpg';
import tejas from '../images/tejas.jpg';
import taneem from '../images/taneem.jpg';
import John from '../images/John.webp';
import Jane from '../images/Jane.webp';
import Alex from '../images/Alex.webp';



const AboutPage = () => {
    document.documentElement.style.setProperty('--hero-bg', `url(${abouthero})`)
    
  return (
    <div className="about-page">
    {/* NavBar */}
    < Navbar />

      {/* Hero Section */}
      <section className="hero-section" >
        <div className="hero-content">
          <h1>About Us</h1>
          <p>Connecting alumni, fostering growth, and building a stronger community.</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="introduction-section">
        <div className="container">
          <h2>Our Story</h2>
          <p>
            Connectify was founded in 2020 with the mission to bring together alumni from all over the world. We aim to create a platform where alumni can reconnect, share experiences, and support each other in their personal and professional journeys.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower alumni by providing them with resources, networking opportunities, and a platform to give back to their alma mater. We believe in the power of community and the impact it can have on individuals and institutions.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src={taneem}  alt="Team Member 1" />
              <h3>Taneem Sajjan</h3>
              <p>Team member</p>
            </div>
            <div className="team-member">
            <img src={vaibhav} alt="Team Member 2" />
              <h3>Vaibhav Kale</h3>
              <p>Team member</p>
            </div>
            <div className="team-member">
            <img src={tejas} alt="Team Member 3" />
              <h3>Tejas Tanpure</h3>
              <p>Team member</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2>What Our Alumni Say</h2>
          <div className="testimonials">
            <div className="testimonial">
            <img src={John} alt="John Doe" className="testimonial-image" />
              <p>"Alumni Connect helped me reconnect with old friends and expand my professional network. Highly recommended!"</p>
              <h4>- John Doe, Class of 2015</h4>
            </div>
            <div className="testimonial">
            <img src={Jane} alt="Jane Smith" className="testimonial-image" />
              <p>"The mentorship program is amazing! I found my dream job through Alumni Connect."</p>
              <h4>- Jane Smith, Class of 2010</h4>
            </div>
            <div className="testimonial">
            <img src={Alex} alt="Alex Johnson" className="testimonial-image" />
              <p>"The alumni events are fantastic! I learned so much and met inspiring people."</p>
              <h4>- Alex Johnson, Class of 2018</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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

export default AboutPage;
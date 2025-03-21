import React from 'react';
import Navbar from '../components/Navbar';
import heroImage from '../images/hero_bg.webp';
import alumnidirectory from '../icons/alumnidirectory.png';
import events from '../icons/events.png';
import job from '../icons/job.png';
import mentorship from '../icons/mentorship.png';
import donations from '../icons/donations.png';
import login from '../icons/login.png';
import signup from '../icons/signup.png';
import elena from '../images/elena.webp';
import John from '../images/John.webp';
import Jane from '../images/Jane.webp';
import Alex from '../images/Alex.webp';
import './Home.css'; // Import the CSS file
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper core styles
import 'swiper/css/pagination'; // Pagination styles
import 'swiper/css/navigation'; // Navigation styles
import { Pagination, Navigation, Autoplay } from 'swiper/modules'; // Swiper modules

const Home = () => {
  document.documentElement.style.setProperty('--hero-image', `url(${heroImage})`)
  return (
    <div className="home">
      {/* NavBar */}
      < Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Connectify!</h1>
          <p>Reconnect, Grow, and Give Back to Your Alma Mater</p>
          <div className="hero-buttons">
            <a href="/login" className="btn-primary">
            <img src={login} alt="Login Icon" className="btn-icon" /> Login</a>
            <a href="/signup" className="btn-secondary">
            <img src={signup} alt="Sign up Icon"  className="btn-icon" />Sign Up</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Key Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
          <img src={alumnidirectory} alt="Alumni Directory Icon" className="feature-icon" /> 
            <h3>Alumni Directory</h3>
            <p>Find and connect with alumni from your institution.</p>
          </div>
          <div className="feature-card">
          <img src={job} alt="Job Icon" className="feature-icon" /> 
            <h3>Job Board</h3>
            <p>Explore job opportunities shared by alumni and companies.</p>
          </div>
          <div className="feature-card">
          <img src={mentorship} alt="Mentorship Icon" className="feature-icon" /> 
            <h3>Mentorship Program</h3>
            <p>Get career guidance from experienced alumni mentors.</p>
          </div>
          <div className="feature-card">
          <img src={events} alt="Events Icon" className="feature-icon" /> 
            <h3>Events</h3>
            <p>Attend workshops, webinars, and networking events.</p>
          </div>
          <div className="feature-card">
          <img src={donations} alt="Donations Icon" className="feature-icon" /> 
            <h3>Donations</h3>
            <p>Strengthen Your Alumni Community—One Donation at a Time.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <h2>About Alumni Connect</h2>
          <p>
            Alumni Connect is a platform designed to bring together alumni from your institution. Whether you're looking to reconnect with old friends, explore job opportunities, or give back to your alma mater, we've got you covered.
          </p>
          <a href="/about" className="btn-primary">Learn More</a>
        </div>
      </section>

     {/* Testimonials Section */}
<section className="testimonials">
  <h2>What Our Alumni Say</h2>
  <Swiper
    pagination={{ clickable: true }} // Add pagination dots
    navigation // Add navigation arrows
    autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay with 3-second delay
    loop={true} // Infinite loop
    modules={[Pagination, Navigation, Autoplay]} // Enable modules
    className="mySwiper"
    breakpoints={{
      // Responsive breakpoints
      320: { slidesPerView: 1 }, // 1 slide on small screens
      768: { slidesPerView: 2 }, // 2 slides on tablets
      1024: { slidesPerView: 3 }, // 3 slides on desktops
    }}
  >
    {/* Testimonial 1 */}
    <SwiperSlide>
      <div className="testimonial-card">
      <img src={John} alt="John Doe" className="testimonial-image" />
        <p>"Alumni Connect helped me find my dream job. The mentorship program is amazing!"</p>
        <h4>- John Doe, Class of 2015</h4>
      </div>
    </SwiperSlide>

    {/* Testimonial 2 */}
    <SwiperSlide>
      <div className="testimonial-card">
      <img src={Jane} alt="Jane Smith" className="testimonial-image" />
        <p>"I reconnected with old friends and expanded my professional network."</p>
        <h4>- Jane Smith, Class of 2010</h4>
      </div>
    </SwiperSlide>

    {/* Testimonial 3 */}
    <SwiperSlide>
      <div className="testimonial-card">
      <img src={Alex} alt="Alex Johnson" className="testimonial-image" />
        <p>"The alumni events are fantastic! I learned so much and met inspiring people."</p>
        <h4>- Alex Johnson, Class of 2018</h4>
      </div>
    </SwiperSlide>

    {/* Testimonial 3 */}
    <SwiperSlide>
      <div className="testimonial-card">
      <img src={elena} alt="Elena Gilbert" className="testimonial-image" />
        <p>"Great platform for learning,growing and experiencing with community."</p>
        <h4>- Elena Gilbert, Class of 2020</h4>
      </div>
    </SwiperSlide>

    {/* Add more testimonials as needed */}
  </Swiper>
</section>
      {/* Events Section */}
      <section className="events">
        <h2>Upcoming Events</h2>
        <div className="event-cards">
          <div className="event-card">
            <h3>Career Fair 2023</h3>
            <p>Date: October 15, 2023</p>
            <p>Location: Virtual</p>
            <a href="/events/career-fair" className="btn-primary">Learn More</a>
          </div>
          <div className="event-card">
            <h3>Webinar: Data Science Trends</h3>
            <p>Date: November 5, 2023</p>
            <p>Location: Online</p>
            <a href="/events/webinar" className="btn-primary">Learn More</a>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Join Our Alumni Community Today</h2>
        <p>Reconnect, grow, and give back to your alma mater.</p>
        <a href="/signup" className="btn-primary">Sign Up Now</a>
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

export default Home;
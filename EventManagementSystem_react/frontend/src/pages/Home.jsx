import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/event.css';

const Event = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    "/assets/4.jpg",
    "/assets/6.jpg",
    "/assets/9.jpg",
    "/assets/12.jpg"
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setSlideIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 2000);

    return () => clearInterval(slideInterval); // Clear interval on component unmount
  }, [slides.length]);

  return (
    <div>
      <div className="title"></div>
      <div id="home" className="home">
        <header>
          <div className="TopLeft"></div>
          <div className="navbar">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><Link to="/login">Login</Link></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <img src="/assets/kelly-sikkema-7Wybl_UQM2E-unsplash.jpg" className="background" alt="background" />
          <img src="/assets/43.png" className="foreground" alt="foreground" />
          <h1 className="title">Elegant Edge Events<br />welcome!</h1>
        </header>
        <section>
          <h1>Welcome to &quot;Elegant Edge Events&quot;</h1>
          We specialize in turning your dreams into reality. From intimate gatherings to grand celebrations, we are dedicated to creating unforgettable experiences that exceed your expectations. With our passion for creativity, attention to detail, and commitment to excellence, we will make your event one to remember.
          <br />
          <h2>Why Choose Us?</h2>
          With years of experience in the industry, our team brings a wealth of knowledge and expertise to every event we undertake. We have successfully executed a wide range of events, from corporate conferences and weddings to festivals and fundraisers.
          We understand that every event is unique, which is why we take the time to listen to your needs and tailor our services accordingly. Whether you have a specific vision in mind or need help bringing your ideas to life, we will work closely with you to create a customized plan that reflects your style and preferences.
        </section>
      </div>
      <div id="events" className="wrapper">
        <h1>Events</h1>
      </div>
      <div className="two">
        <p>
          Event Planning: From concept development and budget management to vendor coordination and timeline creation, we handle every aspect of event planning with precision and expertise.
          <br />
          Venue Selection: We work closely with a network of top-tier venues to find the perfect setting for your event, whether it is a scenic outdoor space or a unique unconventional venue.
          <br />
          Décor and Design: Our talented team of designers will transform your venue into a breathtaking space that reflects your style and theme, from elegant floral arrangements to stunning lighting effects.
          <br />
          Catering and Hospitality: We partner with renowned catering companies to provide exquisite culinary experiences that tantalize the taste buds and leave a lasting impression on your guests.
          <br />
          Entertainment and Production: From live music and DJs to multimedia presentations and interactive experiences, we offer a wide range of entertainment options to keep your guests entertained and engaged throughout the event.
        </p>
      </div>
      <div className="slideShow">
        <h1 id="headEvent">EVENT MANAGED</h1>
      </div>
      <div className="slide">
        <img className="emySlides" src={slides[slideIndex]} alt={`slide ${slideIndex + 1}`} />
      </div>
      <div id="contact" className="contact">
        <h3 style={{ color: '#f70776' }}>CONTACT</h3>
        <p>Email: eventmnm@gmail.com</p>
        <p>Phone: 982345678</p>
        <p>Address: no 123, st Street, Chennai, Tamil Nadu</p>
      </div>
    </div>
  );
};

export default Event;

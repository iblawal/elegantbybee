"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./globals.css"; 



export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 col-lg-7"></div>
            <div className="hero-text-box">
              <h1>
                <span className="gold-text">Elegance</span> Meets Experience
              </h1>
              <p>Your go to for unforgettable events, style, and moments that matter.</p>
              <a href="/planmyevent" className="btn btn-gold mt-4">Plan My Event</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-5 service-section text-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Our Signature Services</h2>
          <p className="mb-5">Crafted with flair, curated with elegance.</p>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="card service-card h-100 text-black">
                <img src="/event planning 2.jpg" className="card-img-top" alt="Event Planning" />
                <div className="card-body">
                  <h4 className="fw-bold">Event Blogging & Planning</h4>
                  <p>Documenting luxury moments and crafting unforgettable experiences.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card service-card h-100 text-black">
                <img src="/birthday shoutout.jpg" className="card-img-top" alt="Birthday Shoutouts" />
                <div className="card-body">
                  <h4 className="fw-bold">Birthday Shoutouts</h4>
                  <p>Luxury shoutouts for spotlight moments and digital elegance.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card service-card h-100 text-black">
                <img src="/fashion influencer.jpg" className="card-img-top" alt="Fashion Influencer" />
                <div className="card-body">
                  <h4 className="fw-bold">Fashion Influencer</h4>
                  <p>Elevating brands through visual storytelling and lifestyle content.</p>
                </div>
              </div>
            </div>
          </div>
          <a href="/services" className="btn btn-gold mt-4">Learn More</a>
        </div>
      </section>

      {/* Power Section */}
      <section className="py-5 bg-light">
        <div className="overlay"></div>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">The Power Behind ELEGANTE BEE</h2>
            <p>More than services, we build perception, experience, and lasting value.</p>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div className="col-md-4 text-center">
              <img src="https://via.placeholder.com/600x400?text=Positioning+Power" className="img-fluid rounded shadow mb-3" alt="Positioning Power" />
              <h4 className="fw-bold">Positioning Power</h4>
              <p>We don’t just show up, we stand out...</p>
            </div>
            <div className="col-md-4 text-center">
              <img src="/elle img 2.png" className="img-fluid rounded shadow mb-3" alt="Experience Centric" />
              <h4 className="fw-bold">Experience-Centric Phrase</h4>
              <p>Every client journey is designed as a luxury experience...</p>
            </div>
            <div className="col-md-4 text-center">
              <img src="/event pic 4.jpg" className="img-fluid rounded shadow mb-3" alt="Service Oriented" />
              <h4 className="fw-bold">Service-Oriented Language</h4>
              <p>Our capital is in the service we provide rooted in trust...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="workflow-section py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold text-gold">How We Bring Events to Life</h2>
          <p className="mb-5">Our process isn’t transactional, it’s transformational...</p>
          <div className="row g-4 justify-content-center">
            <div className="col-md-3">
              <div className="workflow-box">
                <div className="workflow-icon">📞</div>
                <h4 className="fw-bold">Discovery Call</h4>
                <p>We begin with a deep conversation...</p>
                <a href="/discovery" className="learn-btn">Learn More</a>
              </div>
            </div>
            {/* repeat for Proposal, Concept, Execution */}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-5 about-section">
        <div className="container">
          <div className="row align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img src="/elle img3.jpg" className="img-fluid rounded shadow" alt="About Elegante Bee" />
            </div>
            <div className="col-md-6">
              <h2 className="section-title">Who We Are</h2>
              <p>At <strong>ELEGANTE BEE SERVICE</strong>, we don’t just plan events...</p>
              <p><em>"We believe elegance is a language..."</em></p>
              <a href="/about" className="learn-btn mt-3">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial-section">
        <h2>What our clients say</h2>
        <div className="testimonial-container">
          <button className="prev">&#10094;</button>
          <div className="testimonial">
            <p className="quote">"Everything you saw yesterday..."</p>
          </div>
          <div className="testimonial">
            <p className="quote">"When choosing vendors, go with spirits..."</p>
          </div>
          <button className="next">&#10095;</button>
        </div>
      </section>

      {/* Founder */}
      <section className="py-5 meet-founder">
        <div className="container">
          <div className="row align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
              <h2 className="fw-bold text-uppercase">Meet Our Founder</h2>
              <p>Elegance begins with vision and our founder is the heart of it all...</p>
              <h5 className="mt-4 fw-bold">Mrs Bukola Zubair Lawal</h5>
            </div>
            <div className="col-md-6 text-center">
              <img src="/founder.jpg" alt="Founder" className="founder-img img-fluid rounded-circle shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="elegant-contact-touch">
        <div className="container">
          <h2 className="contact-heading">GET IN TOUCH WITH US</h2>
          <p className="sub-heading">You can reach us via any of the channels below:</p>
          <div className="contact-info-grid">
            <div className="contact-box">
              <h4>Visit Us</h4><p><br /></p>
            </div>
            <div className="contact-box">
              <h4>Call Us</h4>
              <p>US: +1 (240) 604-0025</p>
              <p>Nigeria: +234 9167796186</p>
            </div>
            <div className="contact-box">
              <h4>Working Hours</h4>
              <p>Mon–Fri: 9AM – 5PM<br />Saturday: 10AM – 3PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

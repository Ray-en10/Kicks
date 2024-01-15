import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../css/contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="topcon">
        <Navbar />
      </div>
      <div className="maincon">
        <section className="part2">
          <div className="form-main">
            <div id="form-div">
              <form className="form" id="form1">
                <input
                  type="text"
                  className="feedback-input"
                  name="name"
                  placeholder="Full Name"
                  required
                />
                <input
                  type="email"
                  className="feedback-input"
                  name="email"
                  placeholder="Email"
                  required
                />
                <textarea
                  type="text"
                  className="feedback-input"
                  name="text"
                  placeholder="Comment"
                  required
                />
                <div class="button-borders">
                  <button class="primary-button"> BUTTON</button>
                </div>
              </form>
            </div>
          </div>
          <div className="Contact">
            <h1 className="title2">
              Contact US
              <br />
              KicksHub
            </h1>
            <p className="undertitle2">
              Use this form to contact us
              <br />
              if you have any questions.
            </p>
          </div>
        </section>
        <section className="section2">
          <h2 className="section-heading text-uppercase">Our Location</h2>
          <div className="location">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12785.711775826701!2d10.2699248!3d36.7603!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd49fa15643927%3A0xad64c8c462b52435!2sInstitut%20Sup%C3%A9rieur%20des%20Etudes%20Technologiques%20de%20Rades!5e0!3m2!1sfr!2stn!4v1683846280381!5m2!1sfr!2stn"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
      <div className="fot2">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;

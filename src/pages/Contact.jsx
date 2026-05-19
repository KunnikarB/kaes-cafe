import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Contact.css';

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const bookingDate = formData.get('booking_date');
    const bookingTime = formData.get('booking_time');

    // Current date/time
    const now = new Date();

    // Selected booking date/time
    const selectedDateTime = new Date(`${bookingDate}T${bookingTime}`);

    // Prevent past booking
    if (selectedDateTime < now) {
      setMessageSent('Please choose a future booking time ♡');
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        'service_xzcywie',
        'template_0e6u8sf',
        form.current,
        'fZp6h6XmkV-7xnv0i',
      )
      .then(
        () => {
          setLoading(false);
          setMessageSent('Table reserved successfully ♡');

          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setMessageSent('Something went wrong.');

          console.log(error.text);
        },
      );
  };

  return (
    <>
      <Navbar />

      <section className="contact">
        <div className="contact-overlay">
          <div className="contact-container">
            {/* LEFT SIDE */}
            <div className="contact-info">
              <p className="contact-subtitle">Get in Touch ♡</p>

              <h1 className="contact-title">
                Visit
                <span> Kae’s </span>
                Café
              </h1>

              <p className="contact-description">
                Step into our dreamy pink Parisian café and enjoy handcrafted
                coffee, delicate pastries, and romantic French-inspired vibes.
              </p>

              <div className="contact-details">
                <div className="detail-card">
                  <h3>Location</h3>
                  <p>25 Rue de Paris, France</p>
                </div>

                <div className="detail-card">
                  <h3>Email</h3>
                  <p>hello@kaescafe.com</p>
                </div>

                <div className="detail-card">
                  <h3>Opening Hours</h3>
                  <p>Mon - Sun • 8:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="contact-form-container">
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <h2>Book a Table</h2>

                {/* Name */}
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                />

                {/* Email */}
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                />

                {/* Phone */}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                />

                {/* Guests */}
                <select name="guests" required className="contact-select">
                  <option value="">Number of Guests</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5 People</option>
                  <option value="6+">6+ People</option>
                </select>

                {/* Date */}
                <input
                  type="date"
                  name="booking_date"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />

                {/* Time */}
                <input
                  type="time"
                  name="booking_time"
                  min="08:00"
                  max="18:00"
                  required
                />

                {/* Message */}
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Special Requests..."
                ></textarea>

                {/* Button */}
                <button type="submit">
                  {loading ? 'Sending...' : 'Reserve Table'}
                </button>

                {messageSent && (
                  <p className="success-message">{messageSent}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;

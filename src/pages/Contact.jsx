import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Contact.css';

function Contact() {
  return (
    <>
      <Navbar />

      <section className="contact">
        <div className="contact-overlay">
          <div className="contact-container">
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
                We would love to welcome you to Kae’s Café.
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

            <div className="contact-form-container">
              <form className="contact-form">
                <h2>Book a Table</h2>

                <input type="text" placeholder="Your Name" />

                <input type="email" placeholder="Your Email" />

                <input type="text" placeholder="Phone Number" />

                <textarea rows="5" placeholder="Your Message"></textarea>

                <button type="submit">Send Message</button>
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
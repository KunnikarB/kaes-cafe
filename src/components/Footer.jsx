import { FaInstagram, FaPinterest, FaFacebook, FaTiktok } from 'react-icons/fa';
import footerLogo from '../assets/logo.webp'
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay">
        <div>
          <div className="footer-container footer-card">
            <div className="footer-links">
              <h2>Quick Links</h2>

              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/menu">Menu</a>
              <a href="/gallery">Gallery</a>
              <a href="/contact">Contact</a>
            </div>
            <div className="footer-contact">
              <div className="footer-brand">
                <h2>Visit Us</h2>
                <img src={footerLogo} alt="Kae's caffe logo" />
              </div>
              <p>25 Rue de Paris, France</p>
              <p>hello@kaescafe.com</p>
              <p>
                Mon - Sun <span>✿</span> 8AM - 10PM
              </p>
            </div>
            <div className="footer-socials">
              <h2>Follow Us</h2>

              <div className="social-icons">
                <a href="/">
                  <FaInstagram className="icon" />
                  Instagram
                </a>

                <a href="/">
                  <FaPinterest className="icon" />
                  Pinterest
                </a>

                <a href="/">
                  <FaFacebook className="icon" />
                  Facebook
                </a>

                <a href="/">
                  <FaTiktok className="icon" />
                  TikTok
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom ">
            <p>
              {' '}
              <span>©</span> 2026 Kae's Café <span>✿</span> Made with ♡ in Paris{' '}
              <span>✿</span>{' '}
            </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;

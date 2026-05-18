import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import aboutMeImage from '../assets/about-me.webp';
import '../styles/About.css';

function About() {
  return (
    <>
      <Navbar />

      <section className="about">
        <div className="about-container">
          <div className="about-content">
            <p className="about-subtitle">Bonjour, I'm Kae ♡</p>

            <h1 className="about-title">
              About
              <span> Kae's </span>
              Café
            </h1>

              <img className="about-image" src={aboutMeImage} alt="Kae sitting at a pink café table with a cup of coffee, wearing a beret and smiling warmly" />

            <p className="about-text">
              Welcome to Kae's Café — a dreamy little pink café inspired by the
              beauty and romance of Paris. Created with love, warmth, and
              elegant French charm, Kae's Café is more than just a coffee shop —
              it's a cozy escape where every detail is designed to make you feel
              special.
            </p>

            <p className="about-text">
              From delicate pastries and creamy lattes to blush pink interiors
              and candlelit corners, every part of our café is inspired by
              beautiful moments, meaningful conversations, and the joy of
              slowing down.
            </p>

            <p className="about-text">
              My passion for coffee, baking, and aesthetics started from a
              simple dream — to create a space filled with happiness,
              creativity, and comfort. Kae's Café brings together Parisian
              elegance, feminine style, and a warm welcoming atmosphere for
              everyone who walks through our doors.
            </p>

            <p className="about-text">
              Whether you're here for your morning coffee, a sweet dessert, or a
              quiet moment to yourself, I hope Kae's Café feels like your own
              little escape to Paris.
            </p>

            <div className="about-signature">
              <span>With love,</span>
              <h2>Kae ♡</h2>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
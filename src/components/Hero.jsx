import { Link } from 'react-router-dom';
import '../styles/Hero.css';
import coffeeImg from '../assets/coffee.webp';
import miniCakeImg from '../assets/mini.webp';

const Hero = () => {
  return (
    <section className="hero">
      {' '}
      <div className="overlay">
        {' '}
        <div className="hero-content">
          {' '}
          <p className="subtitle">Bienvenue à</p>{' '}
          <h1 className="title">Kae’s Café</h1>{' '}
          <h2 className="location">PARIS</h2>{' '}
          <p className="description ">
            {' '}
            A luxurious pink French café inspired by the beauty of Paris. Enjoy
            handcrafted pastries, creamy lattes, romantic interiors, and dreamy
            moments made with love.{' '}
          </p>{' '}
          <div className="buttons">
            {' '}
            <Link to="/menu">
              {' '}
              <button className="primary-btn">View Menu</button>{' '}
            </Link>{' '}
            <Link to="/contact">
              {' '}
              <button className="secondary-btn">Book a Table</button>{' '}
            </Link>{' '}
          </div>{' '}
          <div className="features">
            {' '}
            <div className="feature-card">
              {' '}
              <h3>Premium Coffee</h3>{' '}
              <p>Freshly brewed with love and elegance.</p>{' '}
              <img src={coffeeImg} alt="Premium Coffee" />{' '}
            </div>{' '}
            <div className="feature-card">
              {' '}
              <h3>French Pastries</h3>{' '}
              <p>Delicate desserts inspired by Paris.</p>{' '}
              <img src={miniCakeImg} alt="French Pastries" />{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
};
export default Hero;

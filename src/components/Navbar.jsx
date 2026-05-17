import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, House, Coffee, Camera, Flower2, Mail } from 'lucide-react';
import logoImg from '../assets/logo.webp';
import '../styles/Nav.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        {/* Logo */}
        <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
          <img src={logoImg} alt="Kae's Café logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li>
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              <House size={18} /> Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/menu" onClick={() => setIsOpen(false)}>
              <Coffee size={18} /> Menu
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>
              <Flower2 size={18} /> About
            </NavLink>
          </li>

          <li>
            <NavLink to="/gallery" onClick={() => setIsOpen(false)}>
              <Camera size={18} /> Gallery
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>
              <Mail size={18} /> Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Button */}
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          <X size={32} />
        </button>

        <NavLink to="/" onClick={() => setIsOpen(false)}>
          <House size={20} /> Home
        </NavLink>

        <NavLink to="/menu" onClick={() => setIsOpen(false)}>
          <Coffee size={20} /> Menu
        </NavLink>

        <NavLink to="/about" onClick={() => setIsOpen(false)}>
          <Flower2 size={20} /> About
        </NavLink>

        <NavLink to="/gallery" onClick={() => setIsOpen(false)}>
          <Camera size={20} /> Gallery
        </NavLink>

        <NavLink to="/contact" onClick={() => setIsOpen(false)}>
          <Mail size={20} /> Contact
        </NavLink>
      </div>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </header>
  );
}

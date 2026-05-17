import pinkCafeBg from '../assets/pink-bg.webp';
import Navebar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Gallery.css';
import coffeeImg from '../assets/coffee.avif';
import macaronsImg from '../assets/macarons.avif';
import croissantsImg from '../assets/croissants.webp';
import coffeeMomentImg from '../assets/coffee-moment.avif';
import strawberryCakeImg from '../assets/strawberry-cake.avif';
import englishTeaImg from '../assets/english-tea-small.webp';
import fruitsIceTea from '../assets/fruits-ice-tea.webp';

const galleryImages = [
  {
    image: pinkCafeBg,
    title: 'Paris Café Interior',
  },
  {
    image: coffeeImg,
    title: 'Luxury Coffee',
  },
  {
    image: macaronsImg,
    title: 'French Macarons',
  },
  {
    image: croissantsImg,
    title: 'Fresh Croissants',
  },
  {
    image: coffeeMomentImg,
    title: 'Romantic Coffee Moments',
  },
  {
    image: strawberryCakeImg,
    title: 'Pink Strawberry Cake',
  },
  {
    image: englishTeaImg,
    title: 'English Tea',
  },
  {
    image: fruitsIceTea,
    title: 'Fruits Ice Tea'
  }
];

const Gallery = () => {
  return (
    <>
      <Navebar />
      <section className="gallery">
        <div className="gallery-overlay">
          <div className="gallery-header">
            <p className="gallery-subtitle">Parisian Moments ♡</p>

            <h1 className="gallery-title">
              <span>Kae’s </span>
              Café Gallery
            </h1>

            <p className="gallery-description">
              Explore the dreamy pink atmosphere of Kae’s Café — from elegant
              coffee creations to romantic Paris-inspired interiors filled with
              warmth and beauty.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((item, index) => (
              <div className="gallery-card" key={index}>
                <img src={item.image} alt={item.title} loading="lazy" width="600" height="400"/>
                <div className="gallery-card-overlay">
                  <h2>{item.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Gallery;

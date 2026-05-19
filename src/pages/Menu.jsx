import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import macaronsImg from '../assets/macarons.avif';
import strawberryCakeImg from '../assets/strawberry-cake.avif';
import croissantsImg from '../assets/croissants.webp';
import cappuccinoImg from '../assets/coffee-moment.avif';
import berryCake from '../assets/berry-cheesecake.avif';
import coffeeImg from '../assets/coffee.webp';
import fruitsIceTea from '../assets/fruits-ice-tea.webp';
import englishTeaImg from '../assets/english-tea-small.webp';
import fruitsYohurt from '../assets/fruits-yohurt.webp';
import '../styles/Menu.css';

const menuItems = [
  {
    title: 'Pink Macarons',
    price: '€12',
    image: macaronsImg,
  },
  {
    title: 'Strawberry Cake',
    price: '€14',
    image: strawberryCakeImg,
  },
  
  {
    title: 'Berry Cheesecake',
    price: '€15',
    image: berryCake,
  },
  
  {
    title: 'Rose Latte',
    price: '€8',
    image: coffeeImg,
  },
  {
    title: 'Paris Cappuccino',
    price: '€9',
    image: cappuccinoImg,
  },
  
  {
    title: 'Tea',
    price: '€5',
    image: englishTeaImg,
  },
];

const Menu = () => {
  return (
    <>
      <Navbar />

      <section className="menu">
        <div className="menu-overlay">
          <div className="menu-header">
            <p className="menu-subtitle">Made with Love ♡</p>

            <h1 className="menu-title">
              <span>Kae’s</span> Café Menu
            </h1>

            <p className="menu-description">
              Discover our dreamy Paris-inspired coffee creations, handcrafted
              desserts, and elegant pastries made fresh daily.
            </p>
          </div>

          <div className="menu-grid">
            {menuItems.map((item, index) => (
              <div className="menu-card" key={index}>
                <img src={item.image} alt={item.title} />

                <div className="menu-card-content">
                  <h2>{item.title}</h2>

                  <p>{item.price}</p>

                  <button>Order Now</button>
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

export default Menu;

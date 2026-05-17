import '../styles/CustomerReviews.css';

const reviews = [
  {
    id: 1,
    name: 'Sophia Bennett',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    review:
      'Absolutely the prettiest café I’ve ever visited. The rose latte was heavenly and the atmosphere felt magical.',
  },
  {
    id: 2,
    name: 'Emily Carter',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
    review:
      'Kae’s Cafe is my favorite weekend spot. Elegant décor, amazing desserts, and the sweetest staff.',
  },
  {
    id: 3,
    name: 'Olivia Johnson',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    review:
      'The aesthetic is stunning and every coffee tastes handcrafted with love. Highly recommended.',
  },
];

function CustomerReviews() {
  return (
    <section className="reviews-section">
      <div className="reviews-container">
        {/* Heading */}
        <div className="reviews-heading">
          <p className="reviews-subtitle">Sweet Words From Our Guests</p>

          <h2 className="reviews-title">Customer Reviews</h2>

          <p className="reviews-description">
            Every visit to Kae’s Cafe is crafted to feel warm, elegant, and
            unforgettable.
          </p>
        </div>

        {/* Cards */}
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div className="review-card" key={review.id}>
              {/* Stars */}
              <div className="stars">★★★★★</div>

              {/* Review */}
              <p className="review-text">“{review.review}”</p>

              {/* User */}
              <div className="review-user">
                <img
                  src={review.image}
                  alt={review.name}
                  className="review-img"
                />

                <div>
                  <h3>{review.name}</h3>
                  <p>Cafe Guest</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;

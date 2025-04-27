import React from 'react';
import './Csection.css';
import img5 from '../../images/5.jpg';
import img6 from '../../images/6.jpg';
import img7 from '../../images/7.jpg';
import img8 from '../../images/8.jpg';

const products = [
  {
    id: 1,
    image: img5,
    title: 'Coque transparente avec MagSafe pour iPhone 16',
    price: '349,00 TND',
  },
  {
    id: 2,
    image: img6,
    title: 'Coque en silicone avec MagSafe pour iPhone 16 Pro - Denim',
    price: '349,00 TND',
  },
  {
    id: 3,
    image: img7,
    title: 'Coque transparente avec MagSafe pour iPhone 16 Pro Max',
    price: '349,00 TND',
  },
  {
    id: 4,
    image: img8,
    title: 'Coque en silicone avec MagSafe pour iPhone 16 - Noir',
    price: '349,00 TND',
  },
];

const Csection = () => {
  return (
    <div className="csection">
      <h2>Les coques MagSafe pour iPhone 16 et 16 Pro</h2>
      <p>Protection élégante et pratique</p>
      <a href="#" className="view-more">Voir plus →</a>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Csection;
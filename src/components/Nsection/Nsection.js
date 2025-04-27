import React from 'react';
import './Nsection.css';
import img9 from '../../images/9.jpg';
import img10 from '../../images/10.jpg';
import img11 from '../../images/11.jpg';
import img12 from '../../images/12.jpg';

const products = [
  {
    id: 1,
    image: img9,
    title: 'iPhone 16 128 Go White',
    price: '5 199,00 TND',
  },
  {
    id: 2,
    image: img10,
    title: 'iPhone 16 Pro 128 Go Black Titanium',
    price: '6 599,00 TND',
  },
  {
    id: 3,
    image: img11,
    title: 'iPhone 16 128 Go Pink',
    price: '5 199,00 TND',
  },
  {
    id: 4,
    image: img12,
    title: 'iPhone 16 Pro Max 256 Go White Titanium',
    price: '7 999,00 TND',
  },
];

const Nsection = () => {
  return (
    <div className="nsection">
      <h2>Le nouvel iPhone</h2>
      <p>Encore plus innovant et séduisant</p>
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

export default Nsection;
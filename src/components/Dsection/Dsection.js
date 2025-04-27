import React from 'react';
import './Dsection.css';
import img13 from '../../images/13.jpg';
import img14 from '../../images/14.jpg';
import img15 from '../../images/15.jpg';
import img16 from '../../images/16.jpg';

const products = [
  {
    id: 1,
    image: img13,
    title: 'Disque dur LaCie d2 PRO 4TB USB-C 7200 Tr/min',
    price: '999,00 TND',
  },
  {
    id: 2,
    image: img14,
    title: 'Disque dur externe LaCie Rugged USB-C 2To Orange-Argent',
    price: '599,00 TND',
  },
  {
    id: 3,
    image: img15,
    title: 'Disque dur externe LaCie Mobile Drive 2To Lune-argentée',
    price: '549,00 TND',
  },
  {
    id: 4,
    image: img16,
    title: 'Disque dur externe LaCie Mobile Drive 1To Lune-argentée',
    price: '429,00 TND',
  },
];

const Dsection = () => {
  return (
    <div className="dsection">
      <h2>Disque dur LaCie</h2>
      <p>Boostez votre productivité</p>
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

export default Dsection;
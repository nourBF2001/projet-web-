import React, { useState } from 'react';
import './PPsection.css';
import img19 from '../../images/19.jpg';
import img20 from '../../images/20.jpg';
import img21 from '../../images/21.jpg';
import img22 from '../../images/22.jpg';
import img23 from '../../images/23.jpg';
import img24 from '../../images/24.jpg';
import img25 from '../../images/25.jpg';
import img26 from '../../images/26.jpg';
import img27 from '../../images/27.jpg';
import img28 from '../../images/28.jpg';
import img29 from '../../images/29.jpg';

const images = [img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29];

const PPsection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 4 : (prevIndex - 4 + images.length) % images.length
    );
  };

  return (
    <div className="ppsection">
      <h2>PRODUITS POPULAIRES</h2>
      <div className="carousel">
        <div
          className="carousel-images"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={image} alt={`Product ${index + 1}`} />
              <h3>Product Title {index + 1}</h3>
              <p>Price {index + 1},00 TND</p>
            </div>
          ))}
        </div>
        <div className="carousel-controls">
          <button className="arrow left-arrow" onClick={prevSlide}>
            <span>&#8249;</span>
          </button>
          <button className="arrow right-arrow" onClick={nextSlide}>
            <span>&#8250;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PPsection;
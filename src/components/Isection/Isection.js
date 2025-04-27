import React, { useState, useEffect } from 'react';
import './Isection.css';
import img1 from '../../images/1.png';
import img2 from '../../images/2.png';
import img3 from '../../images/3.png';
import img4 from '../../images/4.png';

const images = [img1, img2, img3, img4];

const Isection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div
        className="carousel-images"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </div>
      <button
        className="arrow left-arrow"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        &#8249;
      </button>
      <button
        className="arrow right-arrow"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        &#8250;
      </button>
    </div>
  );
};

export default Isection;
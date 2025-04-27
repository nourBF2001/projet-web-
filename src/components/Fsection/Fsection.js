import React from 'react';
import './Fsection.css';
import { FaTruck, FaHeadset, FaCreditCard } from 'react-icons/fa';

const Fsection = () => {
  return (
    <div className="fsection">
      <div className="feature">
        <FaTruck className="icon" />
        <div className="text">
          <h3>Livraison gratuite</h3>
          <p>à partir de 499 DT d'achat</p>
        </div>
      </div>
      <div className="feature">
        <FaHeadset className="icon" />
        <div className="text">
          <h3>Service client</h3>
          <p>de 8h à 18h / +216 71669124</p>
        </div>
      </div>
      <div className="feature">
        <FaCreditCard className="icon" />
        <div className="text">
          <h3>Paiement sécurisé</h3>
          <p>par carte bancaire</p>
        </div>
      </div>
    </div>
  );
};

export default Fsection;
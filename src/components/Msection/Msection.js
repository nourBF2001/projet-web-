import React from 'react';
import './Msection.css';
import { FaEnvelope } from 'react-icons/fa';

const Msection = () => {
  return (
    <div className="msection">
      <div className="msection-content">
        <FaEnvelope className="msection-icon" />
        <h2>S'INSCRIRE À LA NEWSLETTER</h2>
        <p>
          Inscrivez-vous à la newsletter pour recevoir les nouvelles sur nos promotions et la 
          disponibilité des nouveaux produits
        </p>
        <div className="msection-form">
          <input type="email" placeholder="Votre adresse e-mail" />
          <button>S'abonner</button>
        </div>
      </div>
    </div>
  );
};

export default Msection;
import React from 'react';
import './Bsection.css';
import teamImage from '../../images/30.png'; // Adjust the path if necessary

const Bsection = () => {
  return (
    <div className="bsection">
      <div className="bsection-image">
        <img src={teamImage} alt="Team" />
      </div>
      <div className="bsection-content">
        <h2>iStore SAV</h2>
        <p>
          iStore Tunisie assure la maintenance software et hardware de vos produits Apple en Tunisie. 
          Confiez vos produits Apple à des pros pour un résultat de qualité.
        </p>
        <p><strong>Adresse:</strong> iStore Montplaisir</p>
        <p><strong>Téléphone:</strong> (+216) 71 908 400</p>
        <p><strong>Jours ouvrables:</strong> Lundi à Vendredi</p>
        <p><strong>Horaires:</strong> 8H30 - 17H30</p>
        <button className="bsection-button">En savoir plus</button>
      </div>
    </div>
  );
};

export default Bsection;
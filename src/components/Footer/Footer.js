import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin, FaTiktok, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaStore } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>SUIVEZ NOUS</h3>
        <div className="footer-icons">
          <FaFacebook />
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
          <FaLinkedin />
          <FaTiktok />
        </div>
      </div>
      <div className="footer-section">
        <h3>LIENS UTILES</h3>
        <ul>
          <li>A propos de iStore Tunisie</li>
          <li>Mentions légales</li>
          <li>Politique de confidentialité</li>
          <li>La vente flash</li>
          <li>Commande en ligne</li>
          <li>Service entreprise</li>
          <li>Promotions</li>
          <li>Nouveaux produits</li>
          <li>Plan du site</li>
          <li>Blog</li>
          <li>Cadeaux</li>
          <li>Bonnes Affaires</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>VOTRE COMPTE</h3>
        <ul>
          <li>Informations personnelles</li>
          <li>Commandes</li>
          <li>Avoirs</li>
          <li>Adresses</li>
          <li>Bons de réduction</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>INFORMATIONS</h3>
        <ul>
          <li><FaMapMarkerAlt /> ISTORE TUNISIE</li>
          <li>RUE ABOU BAKR EL BOKRI - IMMEUBLE CIMEF</li>
          <li>1073 MONTPLAISIR - TUNIS</li>
          <li><FaPhoneAlt /> +216 71 908 400</li>
          <li><FaEnvelope /> Contactez-nous</li>
          <li><FaStore /> Nos magasins</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
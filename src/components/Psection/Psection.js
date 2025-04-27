import React from 'react';
import './Psection.css';
import img17 from '../../images/17.jpg';
import img18 from '../../images/18.jpg';

const Psection = () => {
  return (
    <div className="psection">
      <img src={img17} alt="Photo 17" className="photo" />
      <img src={img18} alt="Photo 18" className="photo" />
    </div>
  );
};

export default Psection;
import React from 'react';
import oliviaLogo from '../assets/olivia.png';
import './ButtonOfelia.css';

const ButtonOfelia = () => {
  return (
    <>
      <button className="ButtonOfelia">
        <img src={oliviaLogo} alt="Imagen de perfil del usuario" />
        <span>Olivia</span>
      </button>
    </>
  )
}

export default ButtonOfelia;

import React from 'react';
import { Link } from 'react-router-dom';
import oliviaLogo from '../assets/olivia.png';
import MiEcommerce from '../assets/MiEcommerce.svg';

import './Sidebar.css'

const Sidebar = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <aside className={`mainSidebar ${isOpen ? 'open' : 'close'}`}>
        <img className="mainLogo" src={MiEcommerce} alt="MiEcommerce" />
        <nav className="mainNavigation">
          <Link to="/">Inicio</Link>
          <Link to="/products">Productos</Link>
          <Link to="/">Tiendas</Link>
        </nav>
        <div className="linkPerfil">
          <img src={oliviaLogo} alt="Imagen de perfil del usuario" />
          <span>Olivia</span>
        </div>
      </aside>
      {isOpen ? <div className="overlay" onClick={toggleMenu}></div> : null}
    </>
  )
}

export default Sidebar;

import React from "react";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <div className="headerSection">
            <h1>HEADER</h1>
            <form action="">
                <input type="search" placeholder="Buscar productos"/>
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    
            </form>
        </div>
    )
}

export default Header;
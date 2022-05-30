import React from "react";
import './Header.css';

import {faBox, faShop} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="headerSection">
            <h1>HEADER</h1>
            <form action="">
                <input type="search" placeholder="Buscar productos" icon={faShop}/>
                    <i />  
                    
            </form>
        </div>
    )
}

export default Header;
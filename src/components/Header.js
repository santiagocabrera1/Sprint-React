import React, { useEffect, useState } from "react";
import './Header.css';
import {faBox, faShop} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [products,setProducts] = useState ([]);
    const [filtro,setFiltro] = useState ([]);
    const [input,setInput] = useState ("");
    useEffect (() => {
        fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then (data => (setProducts(data)))

    },[])
    useEffect (() => {
        setFiltro(products.filter(product => product.title.toLowerCase().indexOf(input.toLowerCase()) != -1))
        console.log(filtro);
    },[input])
    const inputChange = (e) =>{
        setInput(e.target.value);
    }
    return (
        <div className="headerSection">
            <h1>HEADER</h1>
            <form action="">
                <input type="search" placeholder="Buscar productos" icon={faShop} onChange={inputChange}/>
                    <i />  
            </form>
        </div>
    )
}

export default Header;
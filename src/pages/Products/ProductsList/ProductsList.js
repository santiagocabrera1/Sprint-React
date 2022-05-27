import React, { Fragment } from 'react';
import {useEffect,useState } from 'react';
import {useNavigate} from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';


const ProductList = () => {

    
    const handleNavegation = () =>{
        navigate ('/products/:id')
    }

    const handleAgregarProducto = () =>{
        navigate ('.productos/new')

    }

    const [products, setProducts] = useState([])
    useEffect (() =>{
        console.log(useFetch());
    },[])

    return (

        <Fragment>
            {/* {console.log(products)} */}
            <div>
                <button className='agregarProducto' onClick={handleAgregarProducto}></button>

            </div>


        </Fragment>
    )


}
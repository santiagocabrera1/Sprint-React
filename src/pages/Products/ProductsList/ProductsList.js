import React, { Fragment } from 'react';
import {useEffect,useState } from 'react';
import {useNavigate} from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import ArticleProducts from '../../../components/ArticleProducts';
import Loader from '../../../components/Loader';


const ProductList = () => {

    const navigate = useNavigate() 

    const handleNavegation = () =>{
        navigate ('/products/:id')
    }
    const handleAgregarProducto = () =>{
        navigate ('.productos/new')

    }
    const [loading,setLoading] = useState(false);

    const {producto} = useFetch()
    // const [products, setProducts] = useState([])
    // useEffect (() =>{
    //     fetch('http://localhost:3000/products')
    //     .then( response=> response.json() )
    //     .then(data => console.log(data))
    // console.log(useFetch());
        console.log(producto,);
    return (
         <Fragment>
             <div>
             {producto?.map(product => (
                    <ArticleProducts title = {product.title} id = {product.id} img ={product.image} key = {product.id}/>
                ))}
                {loading && <Loader/>}
            </div>
        </Fragment>
    )
}

export default ProductList;
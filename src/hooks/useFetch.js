import React, { Fragment } from 'react';
import {useEffect,useState } from 'react';


const useFetch = () => {
    const [producto, setProducto] = useState ()

    useEffect(()=>{
        fetch('http://localhost:3000/products')
        .then (data =>data.json())
        .then (info => setProducto(info))
        console.log(producto);
    }, [])
    return {producto}
}

export default useFetch;
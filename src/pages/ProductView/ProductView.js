import React from 'react';
import { useState, useEffect } from 'react';
import './ProductView.css';
import ButtonOfelia from '../../components/ButtonOfelia';
import { useParams } from 'react-router-dom';

const ProductView = () => {
  const id = useParams().id;

  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
  }, [])

  return (
    <>
      <div><h3 className='titleProduct'>Productos{product.id}</h3></div>
      <div className='productContainer'>
        <div className='imgProducts'>
          <img src={product.image} />
        </div>
        <div className='productDescription'>
          <h3>{product.title}</h3>
          <div className='puntosSuperClub'>
            <p>19.990</p>
            <span>Puntos SuperClub</span>
          </div>
          <div>
            <p>999</p>
            <span>Stock Disponble</span>
          </div>
          <ButtonOfelia />
        </div>
      </div>

      <FormProducts/>
    </>
  )
}

export default ProductView;
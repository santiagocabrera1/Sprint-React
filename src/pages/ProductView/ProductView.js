import React from 'react'
import { useState, useEffect } from 'react'
import './ProductView.css'
import Header from '../../components/Header'
import Btn from '../../components/Btn'
import ButtonOfelia from '../../components/ButtonOfelia'
import FormProducts from '../../components/FormProducts'
import { useNavigate, useParams } from 'react-router-dom'

const ProductView = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState([])

  const handleDelete = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/products/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(() => {
      navigate('/products')
    })
  }

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
  }, [id])

  return (
    <>
<<<<<<< HEAD
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
=======
      {product?.id ? (
        <>
          <Header title={`Productos > #${product.id}`}>
            <Btn handleClick={handleDelete}>Eliminar</Btn>
          </Header>
          <div className="productView">
            <div className="productContainerView">
              <div className="imgProductsView">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="productDescriptionView">
                <h3 className="titleProductView">{product.title}</h3>

                <div className="puntosSuperClub">
                  <p>{product.price}</p>
                  <span>Puntos SuperClub</span>
                  <p>{product.stock}</p>
                  <span>Stock Disponble</span>
                  <ButtonOfelia />
                </div>
              </div>
            </div>

            {product?.id ? <FormProducts type="edit" product={product} /> : null}
          </div>
        </>
      ) : (
        <h1>No Se encontro el producto</h1>
      )}
>>>>>>> 2062920181063e324b7274375a29430d3c6839ec
    </>
  )
}

export default ProductView

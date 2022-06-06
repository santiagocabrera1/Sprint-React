import React from 'react'
import './NewProduct.css'
import FormProducts from '../../../components/FormProducts'
import Header from '../../../components/Header'

const NewProduct = () => {
  return (
    <>
      <Header title="Agregar Producto" />
      <div className="newProduct">
        <FormProducts type="create" />
      </div>
    </>
  )
}

export default NewProduct

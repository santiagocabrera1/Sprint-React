import React from 'react'
import './NewProduct.css'
import FormProducts from '../../../components/FormProducts'
import Header from '../../../components/Header'

const NewProduct = () => {
  return (
    <>
      <Header title="Agregar Producto" />
      <div className="newProduct">
        <FormProducts type="create" action={"/"} product = {{}} />
      </div>
    </>
  )
}

export default NewProduct

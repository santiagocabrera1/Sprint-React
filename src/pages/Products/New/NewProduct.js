import React from 'react'
import './NewProduct.css'
import FormProducts from '../../../components/FormProducts'
<<<<<<< HEAD
const NewProduct = () => {
    return (
        <div className='formContainer' >
            <FormProducts type="" action='/'/>
        </div >
    )
=======
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
>>>>>>> main
}

export default NewProduct

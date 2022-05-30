import React from 'react'
import './NewProduct.css'
import FormProducts from '../../../components/FormProducts'
const NewProduct = () => {
    return (
        <div className='formContainer' >
            <FormProducts type="create" action='/'/>
        </div >
    )
}

export default NewProduct;
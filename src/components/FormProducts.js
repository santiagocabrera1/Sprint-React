import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Btn from '../components/Btn'

import './FormProducts.css'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

const FormProducts = ({ type, action, product }) => {
  const navigate = useNavigate()
  const [error, setError] = useState(false)
  const [form, setForm] = useState(product || {})
  let { title, price, stock, description, image, store, file } = form

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/products/', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(form),
    })
      .then(() => {
        navigate('/')
      })
      .catch(() => {
        setError(true)
      })
  }
  const handleEdit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/products/${product.id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(form),
    })
      .then(() => {
        navigate('/products')
      })
      .catch(() => {
        setError(true)
      })
  }

  return (
    <section className="formContainer">
      <h3>Informacion</h3>
      <form action={action}>
        <fieldset>
          <label htmlFor="title">Titulo</label>
          <input
            onInput={(e) => handleChange(e)}
            type="text"
            placeholder="Titulo"
            name="title"
            id="title"
            value={title}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="price">Precio</label>
          <input
            onInput={(e) => handleChange(e)}
            type="number"
            placeholder="Precio"
            name="price"
            id="price"
            value={price}
          />
        </fieldset>

        <fieldset className="relative">
          <label htmlFor="stock">Stock</label>
          <input
            onInput={(e) => handleChange(e)}
            type="number"
            placeholder="Stock"
            name="stock"
            id="stock"
            value={stock}
          />
          <FontAwesomeIcon icon={faPlus} />
          <FontAwesomeIcon icon={faMinus} />
        </fieldset>

        <fieldset>
          <label htmlFor="description">Descripción</label>
          <textarea
            onChange={(e) => handleChange(e)}
            id="description"
            name="description"
            cols="30"
            rows="10"
            placeholder="Descripción"
            value={description}
          ></textarea>
        </fieldset>

        <fieldset>
          <label htmlFor="Store">Tienda</label>
          <select name="store" id="Store" defaultValue="-1">
            <option value="-1">Seleccione una Tienda</option>
            <option value="1">Otra opcion </option>
          </select>
        </fieldset>

        <h3>Galeria de Imagenes</h3>
        <fieldset>
          <label>Nueva Imagen</label>
          <input type="text" name="image" value={image} onChange={(e) => handleChange(e)} />
        </fieldset>

        <div className="buttonsContainer">
          {type === 'create' && <Btn handleClick={handleSubmit}>Guardar</Btn>}
          {type === 'edit' && <Btn handleClick={handleEdit}>Guardar</Btn>}
          <Btn to="/">Cancelar</Btn>
        </div>

        {error && <p style={{ color: 'red' }}>Ha ocurrido un error.</p>}
      </form>
    </section>
  )
}

export default FormProducts

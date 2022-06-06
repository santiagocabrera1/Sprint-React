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
  let { title, price, stock, description, image, store } = form

  const handleChange = (e) => {
    if (e.target.value === "") {
      e.target.parentNode.classList.add('error')
      e.target.parentNode.querySelector('small').innerHTML = `${e.target.parentNode.querySelector('label').innerHTML} no puede estar vacio`
      e.target.parentNode.querySelector('small').style.display = "block";
      e.target.style.border = " #F20789 3px solid"
    } else {
      e.target.parentNode.classList.remove('error')
      e.target.parentNode.querySelector('small').style.display = "none";
      e.target.style.border = ""
    }
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
          <small></small>
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
          <small></small>
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
          <small></small>
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
          <small></small>
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
          <label htmlFor= "imagen">Nueva Imagen</label>
          <input type="text" name="image" id="imagen" value={image} onChange={(e) => handleChange(e)} />
          <small></small>
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

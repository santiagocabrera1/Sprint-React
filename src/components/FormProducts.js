import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './FormProducts.css'


const FormProducts = ({ type, action, product }) => {
    const navigate = useNavigate();
    const [form, setForm] = useState({});
    let { title, price, stock, description, store, file } = form;
    const handleChage = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/products/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });
        navigate('/');

    }
    const handleEdit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/products/${product.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
    }
    const handleDelete = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/products/${product.id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }

    return (
        <section>
            <h3>Informacion</h3>
            <form action={action}>
                <fieldset>
                    <label htmlFor="title" >Titulo</label>
                    <input onInput={(e) => handleChage(e)} type="text" placeholder='Titulo' name='title' id='title' value={type === "edit" ? product.title : title} />
                </fieldset>

                <fieldset>
                    <label htmlFor="price" >Precio</label>
                    <input onInput={(e) => handleChage(e)} type="number" placeholder='Precio' name='price' id='price' value={type === "edit" ? product.price : price} />
                </fieldset>

                <fieldset className='relative'>
                    <label htmlFor="stock" >Stock</label>
                    <input onInput={(e) => handleChage(e)} type="number" placeholder='Stock' name='stock' id='stock' value={type === "edit" ? product.stock : stock} />
                    <FontAwesomeIcon icon={faPlus} />
                    <FontAwesomeIcon icon={faMinus} />
                </fieldset>

                <fieldset>
                    <label htmlFor="description" >Descripción</label>
                    <textarea onChange={(e) => handleChage(e)} id='description' name="description" cols="30" rows="10" placeholder="Descripción" value={type === "edit" ? product.description : description}></textarea>
                </fieldset>

                <fieldset >
                    <label htmlFor='Store'>Tienda</label>
                    <select name="store" id='Store' defaultValue="-1">
                        <option value="-1" >Seleccione una Tienda</option>
                        <option value="1">Otra opcion </option>
                    </select>
                </fieldset>

                <h3>Galeria de Imagenes</h3>
                <fieldset>
                    <label>Nueva Imagen</label>
                    <input type="file" name="images" multiple />
                </fieldset>

                {type=="create" && <button onClick={(e) => handleSubmit(e)}>Guardar</button>}
                {type=="edit" && <button onClick={(e) => handleEdit(e)}>Guardar</button>}
                <button>Cancelar</button>
            </form>
        </section>
    )
}

export default FormProducts;
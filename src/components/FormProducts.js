import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'
import './FormProducts.css'

const formProducts = ({type, action, product}) => {
    return (
        <section>
            <h3>Informacion</h3>
            <form action={action}>
                <fieldset>
                    <label for="title" >Titulo</label>
                    <input type="text" placeholder='Titulo' name='title' id='title' value={type === "edit" ? product.title : "" } />
                </fieldset>

                <fieldset>
                    <label for="price" >Precio</label>
                    <input type="number" placeholder='Precio' name='price' id='price' value={type === "edit" ? product.price : "" }/>
                </fieldset>

                <fieldset className='relative'>
                    <label for="stock" >Stock</label>
                    <input type="number" placeholder='Stock' name='stock' id='stock' value={type === "edit" ? product.stock : "" }/>
                    <FontAwesomeIcon icon={faPlus} />
                    <FontAwesomeIcon icon={faMinus} />
                </fieldset>

                <fieldset>
                    <label for="description" >Descripción</label>
                    <textarea id='description' name="description" cols="30" rows="10" placeholder="Descripción" value={type === "edit" ? product.description : "" }></textarea>
                </fieldset>

                <fieldset >
                    <label class="" for='Store'>Tienda</label>
                    <select name="brand" class="" id='Store'>
                        <option value="-1" selected>Seleccione una Tienda</option>
                        <option value></option>
                    </select>
                </fieldset>

                <h3>Galeria de Imagenes</h3>
                <fieldset>
                    <label>Nueva Imagen</label>
                    <input type="file" name="images" multiple />
                </fieldset>

                <button>Guardar</button>
                <button>Cancelar</button>
            </form>
        </section>
    )
}

export default formProducts
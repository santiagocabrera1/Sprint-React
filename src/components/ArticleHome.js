import React from 'react'
import './style/ArticleHome.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ArticleHome = ({titulo, cantidad, icon}) => {
    return (
        <article className='categoryContainer'>
            <div>
                <FontAwesomeIcon icon={icon} />
                <p><b>{cantidad}</b> {titulo}</p>
            </div>
            <div>
                <button>Ver listado</button>
                <button>Agregar {titulo}</button>
            </div>
        </article>
    )
}

export default ArticleHome;
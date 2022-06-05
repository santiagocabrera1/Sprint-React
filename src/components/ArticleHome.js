import React from 'react'
import './ArticleHome.css'
import Btn from './Btn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ArticleHome = ({ titulo, url, cantidad, icon }) => {
  return (
    <article className="categoryContainer">
      <div>
        <FontAwesomeIcon icon={icon} />
        <p>
          <b>{cantidad}</b> {titulo}
        </p>
      </div>
      <div className="buttonsContainer">
        <Btn to={url}>Ver listado</Btn>
        <Btn to={`${url}/new`}>Agregar {titulo}</Btn>
      </div>
    </article>
  )
}

export default ArticleHome

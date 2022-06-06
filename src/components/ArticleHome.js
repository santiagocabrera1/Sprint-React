import React, { useEffect, useState } from 'react';
import './ArticleHome.css';
import Btn from './Btn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ArticleHome = ({ titulo, url, cantidad, icon}) => {
  const [cantidadProductos, setCantidadProductos] = useState(0)
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => setCantidadProductos(data.length))
  })
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

export default ArticleHome;

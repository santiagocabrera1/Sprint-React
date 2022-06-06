import React, { useEffect, useState } from 'react'
import ArticleHome from '../../components/ArticleHome'
import { faBox, faShop } from '@fortawesome/free-solid-svg-icons'

import './Home.css'
const Home = () => {
  const [cantidadProductos, setCantidadProductos] = useState(0)
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => setCantidadProductos(data.length))
  })
  return (
    <div className="homeContainer">
      <section>
        <h1>¡Hola User! </h1>
        <ArticleHome titulo="Productos" url={'/products'} cantidad={cantidadProductos} icon={faBox} />
        <ArticleHome titulo="Tienda" url={'/store'} cantidad={10} icon={faShop} />
      </section>
    </div>
  )
}

export default Home

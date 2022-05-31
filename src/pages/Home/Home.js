import React from 'react'
import ArticleHome from '../../components/ArticleHome'
import { faBox, faShop } from '@fortawesome/free-solid-svg-icons'

import './Home.css'
const Home = () => {
  return (
    <div className="homeContainer">
      <section>
        <h1>¡Hola User! </h1>
        <ArticleHome titulo="Productos" cantidad={123} icon={faBox} />
        <ArticleHome titulo="Tienda" cantidad={10} icon={faShop} />
      </section>
    </div>
  )
}

export default Home

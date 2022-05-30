import React from 'react'
<<<<<<< HEAD
import MainArea from '../../components/MainArea'
=======
import ArticleHome from '../../components/ArticleHome'
import {faBox, faShop} from '@fortawesome/free-solid-svg-icons'
>>>>>>> erik

import './Home.css'
const Home = () => {
<<<<<<< HEAD
  
  return (
    <main>
    </main>
  )
=======
    
    return (
        <div className='homeContainer'>
            <section >
                <h1>¡Hola User! </h1>
                <ArticleHome titulo="Productos" cantidad={123} icon={faBox} />
                <ArticleHome titulo="Tienda"  cantidad={10} icon={faShop} />
            </section>
        </div>
    )
>>>>>>> erik
}

export default Home;
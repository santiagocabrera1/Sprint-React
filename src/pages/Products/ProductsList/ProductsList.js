import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import ArticleProducts from '../../../components/ArticleProducts'
import Header from '../../../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Loader from '../../../components/Loader';

const ProductList = () => {
  const [search, setSearch] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])
  const { producto } = useFetch()
  const [loading,setLoading] = useState(false);

  const handleChange = (event) => setSearch(event.target.value)

  useEffect(() => {
    const productResults = producto?.filter(({ title }) => title.toLowerCase().indexOf(search.toLowerCase()) != -1)
    setFilteredProducts(productResults)
  }, [producto, search])

  return (
    <>
      <Header title={'Productos'}>
        <div className="searchHeader">
          <FontAwesomeIcon icon={faSearch} />
          <input type="search" value={search} onChange={handleChange} placeholder="Buscar productos" />
        </div>
        {/* <Link to="/products/new" className="agregarProducto">
          Agregar Producto
        </Link> */}
      </Header>
      <div>
        {filteredProducts?.map((product) => (
          <ArticleProducts title={product.title} id={product.id} img={product.image} key={product.id} />
        ))}
        {loading && <Loader/>}
      </div>
    </>
  )
}

export default ProductList;

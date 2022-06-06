import React from 'react'
import './ArticleProducts.css'
import { Link } from 'react-router-dom'

function ArticleProducts({ title, id, img }) {
  return (
    <>
      <Link to={`/products/${id}`} className="productContainer">
        <div className="imgProducts">
          <img src={img} alt={title} />
        </div>
        <div className="productDescription">
          <h3 className="productTitle">{title}</h3>
          <p className="productNumber">#{id}</p>
        </div>
      </Link>
    </>
  )
}
export default ArticleProducts

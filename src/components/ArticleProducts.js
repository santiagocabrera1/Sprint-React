import React from 'react';
import './ArticleProducts.css'
import { useEffect, useState, } from 'react';
import {Link} from 'react-router-dom';

function ArticleProducts({ title, id, img }) {

    return (
        <>
         <Link to = {`/products/${id}`}className='productContainer'>
            <div className='imgProducts'>
                <img src={img} />
            </div>
            <div className='productDescription'>
                <h3 className='productTitle'>{title}</h3>
                <p className='productNumber'>#23123{id}</p>
            </div>
            </Link>
        </>
    )
}
export default ArticleProducts;
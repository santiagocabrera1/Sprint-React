import React from 'react';
import {useEffect } from 'react';

function Test() {

    useEffect (()=> {
        const obj ={
            "id":5,
            "name":"sillas",
            "shopId":2
        }
    
        const requestOptions = {
            metod: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(obj)
        };
    
        fetch('http://localhost:3000/ProductsList', requestOptions)
        .then (data => data.json())
        .then(info => console.log(info))

    },[])
  return (
    <div>test</div>
  )
}

export default Test;
import React, { Fragment } from 'react'
import { useEffect, useState } from 'react'

const useFetch = () => {
  const [loading, setLoading] = useState()
  const [producto, setProducto] = useState()

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:3000/products')
      .then((data) => data.json())
      .then((info) => {
        setProducto(info)
        setLoading(false)
      })
  }, [])
  return { producto, loading }
}

export default useFetch

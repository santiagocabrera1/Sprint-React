import React from 'react'
import { Link } from 'react-router-dom'

import './Btn.css'

const Btn = ({ to, handleClick, children }) => {
  return (
    <>
      {to ? (
        <Link to={to} className="buttonComponent">
          {children}
        </Link>
      ) : (
        <button className="buttonComponent" onClick={handleClick}>
          {children}
        </button>
      )}
    </>
  )
}

export default Btn

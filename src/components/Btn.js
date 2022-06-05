import React from 'react'
import { Link } from 'react-router-dom'

import './Btn.css'

const Btn = ({ to, children }) => {
  return (
    <Link to={to} className="buttonComponent">
      {children}
    </Link>
  )
}

export default Btn

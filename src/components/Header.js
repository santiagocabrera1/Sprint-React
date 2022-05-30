import React from 'react'
import './Header.css'

import { faBox, faShop } from '@fortawesome/free-solid-svg-icons'

const Header = ({ title, children }) => {
  return (
    <div className="headerSection">
      <h1>{title}</h1>
      {children}
    </div>
  )
}

export default Header

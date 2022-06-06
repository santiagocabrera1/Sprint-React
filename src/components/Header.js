import React from 'react'
import './Header.css'

const Header = ({ title, children }) => {
  return (
    <div className="headerSection">
      <h1>{title}</h1>
      {children}
    </div>
  )
}

export default Header

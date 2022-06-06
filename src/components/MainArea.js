import React from 'react'
import './MainArea.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const MainArea = ({ children, toggleMenu }) => {
  return (
    <div className="mainArea">
      <button className="menuToggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {children}
    </div>
  )
}

export default MainArea

import React from 'react'
import './MainArea.css'

const MainArea = ({children, toggleMenu}) => {
  return (
    <div className='mainArea'>
    <button onClick={toggleMenu}>✅</button>
        {children}
    </div>
  )
}

export default MainArea;

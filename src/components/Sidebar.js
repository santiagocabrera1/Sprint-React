import React from 'react'
import './Sidebar.css'

const Sidebar = ({isOpen, toggleMenu}) => {
  return ( 
    <aside className={`mainSidebar ${isOpen ? 'open' : 'close'}`} >
        <button onClick={toggleMenu}>❌</button>
    </aside>
  )
}

export default Sidebar;

import './App.css'
import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import './App.css';
import React, { useState } from 'react';
import MainArea from './components/MainArea';
import Header from './components/Header';
import Content from './components/Content';
import MainRoutes from './Routes/routes'
import Sidebar from './components/Sidebar'

function App() {
  const [menuOpened, setMenuOpened] = useState(false)
  const toggleMenu = () => {
    setMenuOpened(!menuOpened)
  }

  return (
    <div className="mainContainer">
      <BrowserRouter>
        <Header/>
        <Content/>
        <Sidebar isOpen={menuOpened} toggleMenu={toggleMenu} />
        <MainArea toggleMenu={toggleMenu}>
          <MainRoutes />
        </MainArea>
      </BrowserRouter>
    </div>
  )
}

export default App

import './App.css';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainArea from './components/MainArea';
import MainRoutes from './Routes/routes'
import Sidebar from './components/Sidebar'
import Header from './components/Header';
import Content from './components/Content';

function App() {
  const [menuOpened, setMenuOpened] = useState(false)
  const toggleMenu = () => {
    setMenuOpened(!menuOpened)
  }

  return (
    <div className="mainContainer">
      <BrowserRouter>

        <Sidebar isOpen={menuOpened} toggleMenu={toggleMenu} />
        <Header />
        <MainArea toggleMenu={toggleMenu}>
          <MainRoutes />
        </MainArea>

      </BrowserRouter>
    </div>
  )
}

export default App

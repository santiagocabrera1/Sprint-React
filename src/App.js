
import './App.css';
import React, { useState } from 'react';
import MainRoutes from './Routes/routes';
import Sidebar from './components/Sidebar';
import MainArea from './components/MainArea';
import Header from './components/Header';

function App() {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  }

  return (
    <div className='mainContainer'>
      <Sidebar isOpen={menuOpened} toggleMenu={toggleMenu} />
      <MainArea toggleMenu={toggleMenu}>
      <Header />
        <MainRoutes />
      </MainArea>
    </div>
  );
}

export default App;


import './App.css';
import React, { useState } from 'react';
import MainRoutes from './Routes/routes';
import Sidebar from './components/Sidebar';
import MainArea from './components/MainArea';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  }

  return (
    <div className='mainContainer'>
      <Header />
      <Sidebar isOpen={menuOpened} toggleMenu={toggleMenu} />
    
      <MainArea toggleMenu={toggleMenu}>
      <MainRoutes />
      
      <Content />        
      </MainArea>

    </div>
  );
}

export default App;

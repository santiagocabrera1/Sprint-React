
import './App.css';
import Test from './components/Test';
import React, {useState} from 'react';
import MainRoutes  from './Routes/routes';
import Sidebar from './components/Sidebar';
import MainArea from './components/MainArea';

function App() {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => {
    setMenuOpened(!menuOpened); 
  }

  return (
  <div className='mainContainer'>
    <Sidebar isOpen={menuOpened} toggleMenu={toggleMenu} />
    <MainArea toggleMenu={toggleMenu}>
      <MainRoutes/>
    </MainArea>
  </div>
  );
}

export default App;

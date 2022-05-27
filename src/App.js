
import './App.css';
import React from 'react';
import MainRoutes from './Routes/routes';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <MainRoutes />
      <div>
        <Nav />
      </div>
    </>

  );
}

export default App;

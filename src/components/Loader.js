import React from 'react';
import './Loader.css';

function Loader() {
  return (
    <div data-testid="custom-element" className="preloaderContainer">
      <div data-testid="custom-element2" className="preloader"></div>
    </div>
  )
}

export default Loader;

import React, { useState, useEffect } from 'react';
import './menu.css';
import { MdMenu } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';

const Menu = () => {
  const [isVisible, setVisibility] = useState(true);

  const handleMenuToggle = () => {
    setVisibility(!isVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      // Imposta isVisible a true quando la larghezza supera i 768 pixel
      setVisibility(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    // Aggiungi un listener per rilevare il ridimensionamento della finestra

    // Pulisci il listener quando il componente viene smontato
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // L'array vuoto [] garantisce che l'effetto venga eseguito solo una volta all'inizio

  return (
    <div className="menu-container">
      <button className='menu-icon'><MdMenu onClick={handleMenuToggle} size={32} color="white" /></button>

      {isVisible && (
          <ul className="menu">
          <li>
            <IoMdClose onClick={handleMenuToggle} className='close' size={24} color="white" />
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Formazione">Formazione</a>
          </li>
          <li>
            <a href="#Servizi">Servizi</a>
          </li>
          <li>
            <a href="#Contatti">Contatti</a>
          </li>
          <li>
            <a href="#Blog">Blog</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Menu;

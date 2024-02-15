import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Giulia Pinna</p>
        <p>Psicologa iscritta all'Ordine degli Psicologi della Sardegna</p>
        <p>Numero iscrizione: 3799</p>
        {/* <p>P. Iva: 01648734987439</p> */}
      </div>
      <div className='copyright'>
        <p>Copyright © 2024 Giulia Pinna</p>
        <p className='powered'>Powered by Giulia Pinna</p>
      </div>
    </footer>
  );
};

export default Footer;

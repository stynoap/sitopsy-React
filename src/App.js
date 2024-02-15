
import React, { useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contatti from './Components/Contatti/Contatti';
import Formazione from './Components/Formazione/Formazione';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/menu';
import Servizi from './Components/Servizi/Servizi';
import Scrivimi from './Components/Scrivimi/Scrivimi';
import Footer from './Components/Footer/Footer';

function App() {

  useEffect(() => {
    const handleRouteChange = () => {
      console.log('Changing route...');
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleRouteChange);

    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Menu></Menu>
        <Header></Header>
        <About></About>
        <hr></hr>
        <Formazione></Formazione>
        <hr></hr>
        <Servizi></Servizi>
        <hr></hr>
        <Contatti></Contatti>
        <hr></hr>
        <Scrivimi></Scrivimi>
        <Footer></Footer>
      </div>

    </Router>
  );
}

export default App;

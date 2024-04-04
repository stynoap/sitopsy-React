
import React, { useState } from 'react';
import './Scrivimi.css';

const Scrivimi = () => {
  // Stato per gestire i valori dei campi del form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });


  const [submitStatus, setSubmitStatus] = useState();


  // Gestisci il cambiamento nei campi del form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    try {
      const response = fetch(Proxy+'/api/send-email', {
        method: 'GET',
      });

  

      if (response.ok) {
        console.log('ciaooooo get ok');


      } else {
        
        console.error('bad get'+ response.message);

      }
    } catch (error) {
      
      console.error('bad bad get');
    }

  };

  // Gestisci l'invio del form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(Proxy+'/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, to: 'giuliapinna.psicologa@gmail.com' })


      });

  

      if (response.ok) {
        console.log('ciaooooo');
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          message: '',
        });


      } else {
        setSubmitStatus('error');
        console.error('Errore nell\'invio dei dati');

      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Errore nella richiesta al server:', error);
    }



  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setSubmitStatus(null);
  //   }, 5000); 

  //   return () => clearTimeout(timer);
  // }, [submitStatus]);


  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder='Scrivi il tuo nome e il tuo cognome'
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='Scrivi la tua email'
          required
        />
      </div>
      <div>
        <label htmlFor="message">Messaggio:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder='Scrivi qui il tuo messaggio...'
          required
        />
      </div>
      <button type="submit">Invia</button>
      <div>
        {submitStatus === 'success' &&(<div className="success-message">
          <hr></hr><b>Messaggio inviato con successo!</b></div> )}

        {submitStatus === 'error' &&(<div className="error-message"><b>Errore nell'invio del messaggio. Riprova più tardi.</b></div>)}
      </div>
    </form>
  );
};

export default Scrivimi;

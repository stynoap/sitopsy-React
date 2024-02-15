const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(bodyParser.json());
app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;


  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',  // Indirizzo del server SMTP
    port: 587,                  // Porta del server SMTP
    secure: false,              // Impostazione su true se il server utilizza SSL/TLS
    auth: {
        user: process.env.GMAIL_USER,  // Nome utente per l'autenticazione SMTP
        pass: process.env.GMAIL_PASS   // Password per l'autenticazione SMTP
    }
  });

  const mailOptions = {
    from: `"${name}" <${email}>`, // Mittente con nome e indirizzo email fornito dall'utente
    to: 'giuliapinna.psicologa@gmail.com',
    subject: 'Nuovo messaggio dal form',
    text: `Nome: ${name}\nEmail: ${email}\nMessaggio: ${message}`
  };

  // Invio dell'email
  transporter.sendMail(mailOptions, function(error, info) { 
    if (error) { 
      console.log(error); 
      res.status(500).send({status: 'error', message: 'Errore nell\'invio dell\'email'});
    } else { 
      console.log('Email inviata: ' + info.response); 
      res.status(200).send({status: 'success', message: 'Email inviata con successo'});
    } 
  });
});

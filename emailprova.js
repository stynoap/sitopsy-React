const nodemailer = require('nodemailer');

// Configurazione del trasportatore SMTP
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',  // Indirizzo del server SMTP
    port: 587,                  // Porta del server SMTP
    secure: false,              // Impostazione su true se il server utilizza SSL/TLS
    auth: {
        user: 'giuliapinna.psicologa@gmail.com',  // Nome utente per l'autenticazione SMTP
        pass: 'wmra lscg uvrb cewb'   // Password per l'autenticazione SMTP
    }
});

// Definizione dei dettagli dell'email
const mailOptions = {
    from: `"${name}" <${email}>`, // Mittente con nome e indirizzo email fornito dall'utente
    to: 'giuliapinna.psicologa@gmail.com',
    subject: 'Nuovo messaggio dal form',
    text: `Nome: ${name}\nEmail: ${email}\nMessaggio: ${message}`
};


// Invio dell'email
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email inviata: ' + info.response);
    }
});

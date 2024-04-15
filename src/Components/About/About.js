
import './About.css';

const About = () => {




    return (
        <section className='sez-chi-sono' id='About'>
            <h2 id='titolo-about'>Chi sono</h2>
            <div className='presentazione'>
                <div id="call-to-action">
                    <div className='immagine-profilo'></div>
                    <div>
                        <button id='scrivimi'><a className='bottone-contatti-about' href='#Contatti'>Scrivimi</a></button>
                    </div>
                </div>

                <p className='descrizione'>
                    Giulia Pinna, classe 1997, psicologa iscritta all'Ordine degli psicologi della Sardegna n° 3799.
                    Attualmente specializzanda in psicoterapia ad indirizzo analitico-archetipico presso l'Istituto Atanor dell'Aquila.
                    <br />
                    <p className='metodo'>
                        Nel mio lavoro mi pongo l'obiettivo di sostenere chi si rivolge a me accompagnando in un percorso di comprensione
                        di sé e del proprio funzionamento.
                        Sintomi ed esperienze psichiche saranno preziosi alleati nel percorso,
                        considerandoli come messaggi che la nostra psiche ci manda e che quindi cercheremo assieme di
                        riconoscere e ascoltare, restituendo loro uno spazio, un significato e un valore.
                        Il lavoro che svolgeremo è per me un processo di conoscenza e sviluppo di fiducia e alleanza,
                        elementi che reputo basilari per poter aver accesso a parti di sé talvolta tenute più in ombra di altre.

                        Se valuterai di iniziare questo "viaggio" con me, stabiliremo gli obiettivi di questo percorso e ci muoveremo insieme
                        al fine di raggiungerli.

                        <br></br>
                    </p>
                </p>

            </div>


            {/* Aggiungi ulteriori dettagli su formazione ed esperienza */}
        </section>
    );
};



export default About;

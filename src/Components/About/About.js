
import './About.css';

const About = () => {

   

      
    return (
        <section className='sez-chi-sono' id='About'>
            <h2>Chi sono</h2>
            <div className='presentazione'>
                <div className='immagine-profilo'></div>
                <p className='descrizione'>
                    Mi chiamo Giulia Pinna e sono una psicologa iscritta all'Ordine degli psicologi della Sardegna n° 3799.
                    Attualmente sono specializzanda in psicoterapia ad indirizzo analitico-archetipico presso l'Istituto Atanor dell'Aquila.
                    <br />
                    <br />
                    <p className='metodo'>
                    Nel mio lavoro mi pongo l'obiettivo di sostenere chi si rivolge a me accompagnando in un percorso di comprensione
                    di sé e del proprio funzionamento, il quale ci permetterà di comprendere al meglio quali saranno i prossimi passi da compiere
                    rispetto alla specifica situazione.
                    Uno dei principali strumenti del mio lavoro è la relazione, e centralità nel lavoro avrà la soggettività della persona che si rivolgerà a me.
                    Considero il lavoro che svolgo assieme alle persone un processo di conoscenza e sviluppo di fiducia e alleanza, 
                    elementi che reputo basilari per poter aver accesso, con una sufficiente dose di serenità nel farlo,
                    a parti di sé talvolta tenute più in ombra di altre.
                    Riconosco coraggio nella scelta di rivolgersi ad un professionista e nella condivisione delle proprie esperienze psichiche.

                    Se valuterai di iniziare questo "viaggio" con me, stabiliremo gli obiettivi di questo percorso e ci muoveremo insieme
                    al fine di raggiungerli.
                </p>
                </p>

            </div>
            <button className='scrivimi'><a className='bottone-contatti-about' href='#Contatti'>Scrivimi</a></button>

            {/* Aggiungi ulteriori dettagli su formazione ed esperienza */}
        </section>
    );
};



export default About;

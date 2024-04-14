
import './About.css';

const About = () => {

   

      
    return (
        <section className='sez-chi-sono' id='About'>
            <h2>Chi sono</h2>
            <div className='presentazione'>
                <div className='immagine-profilo'></div>
                <p className='descrizione'>
                    Giulia Pinna, classe 1997, psicologa iscritta all'Ordine degli psicologi della Sardegna n° 3799.
                    Attualmente specializzanda in psicoterapia ad indirizzo analitico-archetipico presso l'Istituto Atanor dell'Aquila.
                    <br />
                    <p className='metodo'>
                    Nel mio lavoro mi pongo l'obiettivo di sostenere chi si rivolge a me accompagnando in un percorso di comprensione
                    di sé e del proprio funzionamento, il quale ci permetterà di comprendere al meglio quali saranno i prossimi passi da compiere
                    rispetto alla specifica situazione.
                    Per me è centrale nel percorso il fattore umano e la soggettività della persona che
                    si rivolge a me, con le sue specificità.
                    Considero il lavoro che svolgo assieme alle persone un processo di conoscenza e sviluppo di fiducia e alleanza, 
                    elementi che reputo basilari per poter aver accesso a parti di sé talvolta tenute più in ombra di altre.

                    Se valuterai di iniziare questo "viaggio" con me, stabiliremo gli obiettivi di questo percorso e ci muoveremo insieme
                    al fine di raggiungerli.

                    <br/>
                    <br/>

                    {/* <i>Attualmente sono psicologa presso la USL Umbria 1, dove sto svolgendo 
                        il tirocinio in specializzazione in psicoterapia, occupandomi di sostegno psicologico
                    con adolescenti e giovani adulti fino ai 30 anni, all'interno del progetto di sostegno 
                    psicologico "Ottavo Segno", finalizzato alla prevenzione della salute mentale dei giovani.</i> */}
                </p>
                </p>

            </div>
            <button className='scrivimi'><a className='bottone-contatti-about' href='#Contatti'>Scrivimi</a></button>

            {/* Aggiungi ulteriori dettagli su formazione ed esperienza */}
        </section>
    );
};



export default About;

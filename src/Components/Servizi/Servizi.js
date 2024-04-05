import './Servizi.css';
const Servizi = () => {

    return (
        <section className="i-miei-servizi" id='Servizi'>
            <h2>Servizi</h2>
            <div className='descrizione'>
                <p>Offro consulenze e sostegno psicologico online attraverso la piattaforma Zoom e attraverso Skype. Per le sedute in presenza
                    mi sto organizzando per ricevere sul territorio di Perugia. </p>
                <p><b>Mi occupo di:</b></p>
                <ul className='elenco-servizi'>
                    <li>Sostento psicologico con adolescenti, giovani adulti e adulti</li>
                    <li>Adolescenza e tematiche relative a questa fase del ciclo di vita, difficoltà relazionali, rapporto con i pari, sessualità</li>
                    <li>Orientamento in percorsi scolastici e lavorativi e relative fasi di transizione</li>
                    <li>Accompagnamento in percorsi di riconoscimento, aumento della consapevolezza e potenziameneto delle proprie risorse individuali</li>
                    {/* <li>Conduco gruppi di terapia</li> */}
                </ul>

                <p>Il colloquio psicologico ha una durata di circa 60 minuti ed il costo è di 40€. La prima seduta è gratuita.</p>
            </div>

        </section>
    )
}

export default Servizi;
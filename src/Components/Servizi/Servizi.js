import './Servizi.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiMessageSquare, BiBook, BiMoon } from 'react-icons/bi';

const Servizi = () => {

    return (
        <section className="i-miei-servizi" id='Servizi'>
            <h2>Servizi</h2>
            <div className='descrizione'>
                <p>Offro consulenze e sostegno psicologico online attraverso le principali piattaforme di videoconferenza quali Zoom, Google Meet e attraverso Skype. Per le sedute in presenza
                    mi sto organizzando per ricevere sul territorio di Perugia. </p>
               
            </div>




            <div className="row g-4 py-2 row-cols-1 row-cols-lg-3" id="servizi-icone">
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-center bg bg-gradient fs-5 mb-5">
                        <BiMessageSquare size="3em" />
                    </div>
                    <h3 className="fs-2 text-body-emphasis roboto-font" style={{ color: '#8C83B0' }}>Consulenza e sostengo psicologico</h3>
                    <p>Servizio attivo con adolescenti, adulti e giovani adulti</p>
                </div>
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-center text-dark bg-gradient fs-5 mb-5">
                        <BiBook size="3em" />
                    </div>
                    <h3 className="fs-2 text-body-emphasis roboto-font" style={{ color: '#8C83B0' }}>Orientamento</h3>
                    <p>In percorsi scolastici, lavorativi e relative fasi di transizione</p>
                </div>
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-center text-dark bg-gradient fs-5 mb-5">
                        <BiMoon size="3em" />
                    </div>
                    <h3 className="fs-2 text-body-emphasis roboto-font" style={{ color: '#8C83B0' }} id="titolo-servizio">Servizio psicologico notturno</h3>
                    <p>Possibilità di avere sostegno psicologico ovunque tu sia, nella fascia serale e anche notturna. </p>
                </div>
            </div>
<br></br>
<br></br>
            <h5>Il colloquio psicologico ha una durata di circa 60 minuti ed il costo è di 40€.</h5>
        </section>
    )
}

export default Servizi;
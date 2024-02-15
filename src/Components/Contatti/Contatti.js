import './Contatti.css';
import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';


const Contatti = () => {
    return (
        <section className='i-miei-contatti' id='Contatti'>
            <h2>Contattami</h2>
            <p className='cellulare'>
                <FaPhone />
                <i>
                    +39 3315346684
                </i>
            </p>
            <p className='email'>
                <FaEnvelope />
                <i>
                    giuliapinna.psicologa@gmail.com
                </i>

            </p>

        </section>
    )
}

export default Contatti;
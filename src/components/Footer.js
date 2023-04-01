import React from "react";
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import { ReactComponent as LogoFooter } from '../assets/LOGO_White.svg';

//Créer une fonction Footer qui retourne un composant React
function Footer() {
    return (
        //Retourner le composant footer
        <footer>
            <section>
                <Link to="/"><LogoFooter id="LogoFooter" /></Link>
                <p>© 2020 Kasa. All rights reserved</p>
            </section>
        </footer>
    );
}

//Exporter le composant Footer
export default Footer;
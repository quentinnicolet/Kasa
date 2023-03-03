import React from "react";
import '../styles/Footer.css';
import { ReactComponent as LogoFooter } from '../assets/LOGO_White.svg';

function Footer() {
    return (
        <footer>
            <section>
                <LogoFooter id="LogoFooter" />
                <p>© 2020 Kasa. All rights reserved</p>
            </section>
        </footer>
    );
}

export default Footer;

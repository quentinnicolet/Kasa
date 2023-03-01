import React from "react";
import '../styles/Section.css';

import { ReactComponent as LogoFooter } from '../../public/assets/LOGO_White.svg';
function Footer() {
    return (
        <footer style={{ backgroundColor: "black", textAlign: "center" }}>
            <section>
                <LogoFooter style={{ width: "100px" }} />
                <p style={{ color: "white", margin: "10px 0" }}>© 2020 Kasa. All rights reserved</p>
            </section>
        </footer>
    );
}

export default Footer;
import React from "react";
import '../styles/Header.css';
import { ReactComponent as Logo } from '../assets/LOGO.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Logo id="logo" />
            <nav id="menu">
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
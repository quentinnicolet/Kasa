import React from "react";
import '../styles/Header.css';
import { ReactComponent as Logo } from '../assets/LOGO.svg';
import { Link } from 'react-router-dom';

// Définir la fonction Header qui va retourner notre header
function Header() {
    return (
        <header>
            {/* Création d'un lien vers l'accueil et ajout du logo */}
            <Link to="/"><Logo id="logo" /></Link>
            {/* Création du navbar */}
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

// Exporter le header
export default Header;
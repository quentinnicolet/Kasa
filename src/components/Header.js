import React from "react";
import '../styles/Header.css';
import { ReactComponent as Logo } from '../assets/LOGO.svg';
import { NavLink } from 'react-router-dom';

// Définir la fonction Header qui va retourner notre header
function Header() {
    return (
        <header>
            {/* Création d'un lien vers l'accueil et ajout du logo */}
            <NavLink to="/"><Logo id="logo" /></NavLink>
            {/* Création du navbar */}
            <nav id="menu">
                <ul>
                    <li>
                        <NavLink exact to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

// Exporter le header
export default Header;
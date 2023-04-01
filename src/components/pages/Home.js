import '../../styles/Home.css'
import DataEmplacements from '../../database/logement.json'
import Cards from '../Cards'
import { NavLink } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

//Fonction Home() qui retourne le code HTML qui décrit le composant Home
function Home() {
    //Déclaration et initialisation d'une variable locale 'emplacements' à partir d'un fichier json
    const [emplacements, setEmplacements] = useState([]);

    //Fonction useEffect() qui permet d'initialiser 'emplacements' à partir du fichier json
    useEffect(() => {
        setEmplacements(DataEmplacements);
    }, []);

    //Retourne le code HTML qui décrit le composant Home
    return (
        <>
            <div id='home-container'>
                <div className='top-section' id='home-img'>
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
                <div className='contanier-emplacements'>
                    {emplacements.map((logement) => (
                        //NavLink permet de générer des liens vers des routes spécifiques
                        <NavLink key={logement.id} to={'/logement/' + logement.id}>
                            <Cards
                                key={logement.id}
                                id={logement.id}
                                picture={logement.cover}
                                title={logement.title}
                            />
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    );
}

//Exporte le composant Home
export default Home;
import '../../styles/Home.css'
import DataEmplacements from '../../database/logement.json'
import Cards from '../Cards'
import { NavLink } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

function Home() {
    const [emplacements, setEmplacements] = useState([]);

    useEffect(() => {
        setEmplacements(DataEmplacements);
    }, []);

    return (
        <>
            <div id='home-container'>
                <div className='top-section' id='home-img'>
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
                <div className='contanier-emplacements'>
                    {emplacements.map((logement) => (
                        <NavLink key={logement.id} to={'/logement/' + logement.id + '/#'}>
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

export default Home;
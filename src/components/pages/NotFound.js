import { Link } from 'react-router-dom';
import '../../styles/NotFound.css'

// Fonction pour afficher une page d'erreur
function error() {
    return (
        <>
            <div id='notfound-container'>
                <div>
                    <h1>
                        404
                    </h1>
                    <h2>
                        Oups! La page que vous demandez n'existe pas.
                    </h2>
                </div>
                {/* Lien pour retourner à la page d'accueil */}
                <Link to="/">Retourner sur la page d'accueil</Link>
            </div>
        </>
    )
}
// Exporte le composant error
export default error;
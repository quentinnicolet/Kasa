import { Link } from 'react-router-dom';
import '../../styles/NotFound.css'

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
                <Link to="/">Retourner sur la page d'accueil</Link>
            </div>
        </>
    )
}

export default error;
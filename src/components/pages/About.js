import Accordion from "../Accordion";
import '../../styles/About.css'
//Fonction About() qui renvoie le code HTML suivant:
function About() {
    return (
        <>
            <div id="about-container">
                <div className='top-section' id='about-img'>
                </div>
                <div className="grid-accordion">
                    {/* Renvoie un composant Accordion pour chaque valeur/service, avec un titre et une description. */}
                    <Accordion title="Fiabilité" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes" />
                    <Accordion title="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                    <Accordion title="Service" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                    <Accordion title="Sécurité" description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
                </div>
            </div>
        </>
    );
}

export default About;
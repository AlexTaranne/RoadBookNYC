import "../styles/homepage.css"
import { Link } from "react-router-dom"

export default function Homepage () {
    return (
    <>
    <header>
        
        </header>
    <h1>New-York du 1er mai au 11 mai 2025</h1>
    <p>Nos 4 voyageurs seront:</p>
    <ul>
        <li><Link to="/taupe">Océane "Taupe" Taranne</Link></li>
        <li><Link to="/leon">Léon "Lapin" Taranne</Link></li>
        <li><Link to="/emma">Emma "Tête de cochon" Taranne</Link></li>
        <li><Link to="/alex">Alex "Saucisse" Taranne</Link></li>
    </ul>
    <p>Le départ s' effectuera à l' aéroport de Charles de Gaulle à 10H30 pour un atterissage à 12H30 heure locale.</p>
</>
)}
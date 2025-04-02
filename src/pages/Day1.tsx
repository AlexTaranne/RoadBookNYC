import { Link } from "react-router-dom";
import "../styles/day1.css";

export default function Day1() {
  const start = "Lormaye";
  const destination = "Terminal 2E";
  const mapUrl = `https://www.google.com/maps/dir/${encodeURIComponent(start)}/${encodeURIComponent(destination)}`;
  return (
    <section className="day1">
      <h2>Départ</h2>
      <p>
        Heure de départ de la maison: <strong>5H00</strong>.
      </p>
      <p>Le trajet de la maison à l' aéroport est d' environ 2h.</p>
      <div>
        <Link to={mapUrl} target="_blank" rel="noopener noreferrer">
          Voir l'itinéraire
        </Link>
      </div>
      <h4>Fin d' embarquement à 9H30 et le décollage sera à 10H30.</h4>
      <p>
        L' atterissage aura lieu à <strong>12H45</strong> heure locale
      </p>
      <p>
        Le transfert de l' aéroport JFK jusqu' à l' hotel Riu Plaza Manhattan
        est d' environ 30 minutes en Uber
      </p>
      <iframe
        title="google"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1417854388787!2d-73.98847821274909!3d40.75890616097768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855f360c635%3A0x713f892f815c421!2sHotel%20Riu%20Plaza%20Manhattan%20Times%20Square!5e0!3m2!1sfr!2sfr!4v1743582975009!5m2!1sfr!2sfr"
        height="250"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <h4>
        Aprés dépose des bagages à l' hotel, aller au guichet de métro récuperer
        les cartes de transport.
      </h4>
      <iframe
        title="google"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.3023183865207!2d-73.9921906032104!3d40.75537500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259ab4be746d7%3A0x4d9aade73c82f939!2sTimes%20Sq%E2%80%9342%20St!5e0!3m2!1sfr!2sfr!4v1743583572212!5m2!1sfr!2sfr"
        height="250"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <p>Diner prévu au Shake Shack sur Times Square.</p>
      <iframe
        title="google"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1435.4718551909757!2d-73.9897977195862!3d40.758374216786805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258537f207085%3A0xf25fd164736a3707!2sShake%20Shack%20Theater%20District!5e0!3m2!1sfr!2sfr!4v1743583695790!5m2!1sfr!2sfr"
        height="250"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}

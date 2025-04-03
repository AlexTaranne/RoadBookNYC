import { Link } from "react-router-dom";
import "../styles/footer.css";
export default function Footer() {
  return (
    <footer>
      <Link to="/link">Liens utiles</Link>
      <Link to="/infos">Informations</Link>
    </footer>
  );
}

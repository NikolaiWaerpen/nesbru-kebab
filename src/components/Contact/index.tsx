import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faMobileAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div>
      <h3 className="smallbadge">Kontakt oss</h3>
      <ul className="bg-gray-100 rounded-xl px-4 py-3 mt-6 shadow-sm">
        <li>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-themecolor1  ml-0.5"
          />
          <span className="ml-3.5">Fekjan 15A, 1394 Nesbru</span>
        </li>
        <li className="menuitemspacing">
          <FontAwesomeIcon
            icon={faMobileAlt}
            className="text-themecolor1 ml-0.5"
          />
          <span className="ml-4">66 84 57 05</span>
        </li>
        <li className="menuitemspacing">
          <FontAwesomeIcon icon={faEnvelope} className="text-themecolor1" />
          <span className="ml-3">nesbrukebab@nesbrukebab.no</span>
        </li>
      </ul>
    </div>
  );
}

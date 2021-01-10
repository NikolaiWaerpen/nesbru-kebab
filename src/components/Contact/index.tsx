import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faMobileAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className="itemcontainer">
      <h3 className="itemheader">Kontakt oss</h3>
      <ul className="itemcontent">
        <li className="">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-themecolor1  ml-0.5"
          />
          <span className="ml-3.5">Fekjan 15A, 1394 Nesbru</span>
        </li>
        <li className="">
          <FontAwesomeIcon
            icon={faMobileAlt}
            className="text-themecolor1 ml-0.5"
          />
          <span className="ml-4">66 84 57 05</span>
        </li>
        <li className="">
          <FontAwesomeIcon icon={faEnvelope} className="text-themecolor1" />
          <span className="ml-3">nesbrukebab@nesbrukebab.no</span>
        </li>
      </ul>
    </div>
  );
}

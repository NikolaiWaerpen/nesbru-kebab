import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Social() {
  return (
    <div className="flex">
      <a
        href="https://www.facebook.com/NesbruKebab"
        className="hover:text-themecolor1 hover:cursor-pointer flex"
      >
        <FontAwesomeIcon
          icon={faFacebookSquare}
          className="text-4xl mr-2 block"
        />
        <h3 className="itemheader mt-0.5">Følg oss på Facebook!</h3>
      </a>
    </div>
  );
}

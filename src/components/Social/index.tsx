import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Social() {
  return (
    <div>
      {/* <h3 className="smallbadge">Sosiale media</h3> */}
      <div>
        <a
          href="https://www.facebook.com/NesbruKebab"
          className="texthovereffect flex justify-center"
        >
          <FontAwesomeIcon
            icon={faFacebookSquare}
            className="text-4xl mr-2 block"
          />
          <h3 className="itemheader">Følg oss på Facebook!</h3>
        </a>
      </div>
    </div>
  );
}

import GoogleMapReact from "google-map-react";
import { MAP_DETAILS, MAP_KEY } from "../../../consts";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Map() {
  return (
    <div>
      <div className="w-screen h-screen/2 bg-pinkred">
        <GoogleMapReact
          bootstrapURLKeys={{ key: MAP_KEY }}
          defaultCenter={MAP_DETAILS.center}
          defaultZoom={MAP_DETAILS.zoom}
        >
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-4xl hover:text-pinkred"
            lat={59.863839388681825}
            lng={10.48855488198559}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}

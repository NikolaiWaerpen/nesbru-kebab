import GoogleMapReact from "google-map-react";
import { MAP_DETAILS, MAP_KEY } from "../../../consts";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type FontAwesomeIcon = {
  icon: any;
  className: any;
  lat: any;
  lng: any;
};

export default function Map() {
  return (
    <div>
      <div className="w-screen h-screen/2 bg-themecolor1">
        <GoogleMapReact
          bootstrapURLKeys={{ key: MAP_KEY }}
          defaultCenter={MAP_DETAILS.center}
          defaultZoom={MAP_DETAILS.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-4xl hover:text-themecolor1"
            lng={MAP_DETAILS.center.lng}
            lat={MAP_DETAILS.center.lat}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}

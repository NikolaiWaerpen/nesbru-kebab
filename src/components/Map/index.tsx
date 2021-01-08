import GoogleMapReact from "google-map-react";
import { MAP_KEY } from "../../../consts";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SomeComponent = ({ text }) => {
  return <div>{text}</div>;
};

//59.863839388681825, 10.48855488198559
//59.863839
//10.488554

const mapDetails = {
  center: {
    lat: 59.863839388681825,
    lng: 10.48855488198559,
  },
  zoom: 12,
};

export default function Map() {
  return (
    <div>
      <div className="w-screen h-screen/2 bg-pinkred">
        <GoogleMapReact
          bootstrapURLKeys={{ key: MAP_KEY }}
          defaultCenter={mapDetails.center}
          defaultZoom={mapDetails.zoom}
        >
          {/* <SomeComponent
            lat={59.863839388681825}
            lng={10.48855488198559}
            text="My marker"
          /> */}
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

import GoogleMapReact from "google-map-react";
import { MAP_KEY } from "../../../consts";

const SomeComponent = ({ text }) => {
  return <div>{text}</div>;
};

const mapDetails = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 11,
};

export default function Map() {
  return (
    <div>
      <div className="w-screen h-screen bg-pinkred">
        <GoogleMapReact
          bootstrapURLKeys={{ key: MAP_KEY }}
          defaultCenter={mapDetails.center}
          defaultZoom={mapDetails.zoom}
        >
          <SomeComponent lat={59.955413} lng={30.337844} text="My marker" />
        </GoogleMapReact>
      </div>
    </div>
  );
}

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

export default function Map({animals}) {
  
    return (
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_MAPAPI_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          
        </GoogleMap>
      </LoadScript>
    )
  }

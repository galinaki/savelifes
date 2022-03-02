import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '600px',
  height: '600px'
};

const center = {
  lat: 51.755940,
  lng: 105.482730
};

export default function Map(props) {
  
    return (
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_MAPAPI_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={3}
        >
          {props.animals.map(animal => (
            <Marker key={animal.id}
              position={{
                lat: parseFloat(animal.latitude),
                lng: parseFloat(animal.latitude)
              }}
              icon={animal.img_url}
            />


          ))}
        </GoogleMap>
      </LoadScript>
    )
  
  }

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';
import styles from './Map.module.css'

const containerStyle = {
  width: '600px',
  height: '600px'
};

const center = {
  lat: 51.755940,
  lng: 105.482730
};


export default function Map(props) {
  const [selected, setSelected] = useState(null)

  const animal = props.animals.map(animal => {
    const animal_image = animal.img_url
   return (
  
     <Marker className={styles.map} key={animal.id}
       position={{
         lat: parseFloat(animal.latitude),
         lng: parseFloat(animal.longitude)
       }}
       icon={{
         url: animal_image, scaledSize: { width: 50, height: 50}
       }}
     />
  )})
       
  
  
    return (
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_MAPAPI_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={3}
        >
          {animal}
        </GoogleMap>
       
      </LoadScript>
      
    )
  
  }

import React, { useEffect } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'
import { Wrapper } from '@googlemaps/react-wrapper';

const MapComponent = () => {
  
  const mapStyles = {
    height: "70vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: 19.39958953857422,
    lng: -98.93214416503906
  };

  const ubicacion = { lat: 19.39958953857422, lng: -98.93214416503906 }

  return (
    <Wrapper apiKey="AIzaSyC1DYlcC8qPgkneJrBFcADwNQewzyFLyUs">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={17}
        center={defaultCenter}
      >
          <Marker position={ubicacion}/>
      </GoogleMap>
    </Wrapper>
  )
}

export default MapComponent

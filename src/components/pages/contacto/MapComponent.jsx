import React, { useEffect } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'
import { Wrapper } from '@googlemaps/react-wrapper';

const MapComponent = () => {

  const [map, setMap] = React.useState(null)
  
  const mapStyles = {
    height: "70vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: 19.39958953857422,
    lng: -98.93214416503906
  };

  const ubicacion = { lat: 19.39958953857422, lng: -98.93214416503906 }

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(defaultCenter);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  /*useEffect(() => {
    const ubicacion = { lat: 19.39958953857422, lng: -98.93214416503906 }

    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: ubicacion,
      zoom: 14
    })

    const Marker = new window.google.maps.Marker({
      position: ubicacion,
      map,
      title: 'HERGO Diseño E Instalación'
    })
  }, [])*/
  return (
    <a
      href={`https://www.google.com/maps/search/?api=1&query= ${19.39958953857422},${-98.93214416503906}`}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div id='map' style={{ height: '400px', width: '100%' }} />
    </a>
  )
}

export default MapComponent

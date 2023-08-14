import React, { useEffect } from 'react'
import { Marker } from '@react-google-maps/api'

function MapComponent () {
  useEffect(() => {
    const ubicacion = { lat: 19.39958953857422, lng: -98.93214416503906 }

    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: ubicacion,
      zoom: 14
    })

    const Marker = new window.google.maps.Marker({
      position: ubicacion,
      map,
      title: 'Ubicación Específica'
    })
  }, [])

  return <div id='map' style={{ height: '400px', width: '100%' }} />
}

export default MapComponent

import React, { useEffect } from 'react'

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
      title: 'HERGO Diseño E Instalación'
    })
  }, [])
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

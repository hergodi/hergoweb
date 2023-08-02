import FormContacto from '../../formContacto/FormContacto'
import React from 'react'
import { GoogleMap, Marker, InfoWindow, LoadScript } from '@react-google-maps/api'

const Contactos = () => {
  const mapStyles = {
    height: '400px',
    width: '100%'
  }

  const defaultCenter = {
    lat: 19.39958953857422,
    lng: -98.93214416503906
  }

  const locations = [
    {
      name: 'Hergo Diseño e Instalación',
      location: {
        lat: 19.39958953857422,
        lng: -98.93214416503906
      }
    }
    // Add more locations as needed...
  ]

  return (
    <div>
      <FormContacto />

      <LoadScript googleMapsApiKey='AIzaSyD55PeA9XTRDhdDU8NGEiPIS9ykRvyWnyY'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >
          {locations.map((item) => {
            return (
              <Marker key={item.name} position={item.location}>
                <InfoWindow>
                  <div>{item.name}</div>
                </InfoWindow>
              </Marker>
            )
          })}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default Contactos

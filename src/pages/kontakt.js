import React from "react"
import {
  withScriptjs,
  GoogleMap,
  withGoogleMap,
  Marker,
} from "react-google-maps"

import {googleConfig} from '../assets/data/config'

import styled from 'styled-components';

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 52.228976, lng: 21.007863 }}
    >
      <Marker position={{ lat: 52.228976, lng: 21.007863 }} />
    </GoogleMap>
  ))
)

const KontaktWrapper = styled.div`
width: 100%;
height: 100%;
padding: 0 50px;
display: flex;
align-items: center;
flex-direction: column;
`


const Kontakt = () => {
  return (
    <KontaktWrapper>
      <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${googleConfig.key}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px`, width: '700px', border: '2px solid #8f181a' }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </KontaktWrapper>
  )
}

export default Kontakt

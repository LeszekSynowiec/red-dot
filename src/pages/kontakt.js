import React from "react";
import {
  withScriptjs,
  GoogleMap,
  withGoogleMap,
  Marker,
} from "react-google-maps"


import styled from "styled-components"

const mapKey = process.env.REACT_APP_GOOGLE_KEY;

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
  padding: 0 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Kontakt = () => {
  return (
    <KontaktWrapper>
      <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${mapKey}`}
        loadingElement={
          <div style={{ height: `100%`, borderRadius: "25px" }} />
        }
        containerElement={
          <div
            style={{
              height: `400px`,
              width: "700px",
              borderRadius: "25px",
              boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
            }}
          />
        }
        mapElement={<div style={{ height: `100%`, borderRadius: "25px" }} />}
      />
    </KontaktWrapper>
  )
}

export default Kontakt

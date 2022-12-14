import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const Map = () => {

    return (
        <LoadScript
        googleMapsApiKey="AIzaSyB2xF6dMAA9QC9IZsISZfH2PurWxMpR_sk"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    );
};

export default Map;

// AIzaSyB2xF6dMAA9QC9IZsISZfH2PurWxMpR_sk
import Aos from 'aos';
import React, { useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
    height: "400px",
    width: "100%"
};

const center = {
    lat: 21.1702,
    lng: 72.8311
  };

const Map = () => {
    useEffect(() => {
        Aos.init({ once: true });
    }, []); // Initialize AOS only once on mount


    return (
        <>
            <div data-aos="fade-up w-full" data-aos-duration="1000">
                <LoadScript googleMapsApiKey="AIzaSyC1SLd0qtgI1dT1pM7A3nWUMw3WvNdUd5A">
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={11}
                    >
                        <Marker position={center} />
                    </GoogleMap>
                </LoadScript>
            </div>
        </>
    );
}

export default Map;
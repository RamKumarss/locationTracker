"use client";

import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import FocusMap from '../FocusLeafMap/FocusMap';

const LeafletWrapper = () => {
    const customIcon = L.icon({
        iconUrl: '/assets/walk-man.gif',  // Path relative to public folder
        iconSize: [35, 35],                // size of the icon
        iconAnchor: [16, 32],              // point of the icon which corresponds to marker's location
        popupAnchor: [0, -32]              // point from which the popup should open relative to the iconAnchor
      });
      
    const [location, setLocation] = useState({lat:28.1572926, long:77.3333564})
    useEffect(()=>{
        getLocation();
    },[])

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                setLocation({lat :position.coords.latitude, long:position.coords.longitude})
              },
              (error) => {
                alert("Error: " + error.message);
              }
            );
          } else {
            alert("Geolocation is not supported by this browser.");
          }

        navigator.geolocation.watchPosition(
            (position) => {
                console.log('position', position)
                setLocation({lat :position.coords.latitude, long:position.coords.longitude})
            },
            (error) => {
              console.error("Error watching location:", error);
            },
            {
              enableHighAccuracy: true, // more accurate but uses more battery
              maximumAge: 10000,        // reuse cached position if under 10s old
              timeout: 5000             // wait max 5s for position
            }
          );
          
    }

  return (
    <MapContainer center={[location.lat, location.long]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[location.lat, location.long]} icon={customIcon}>
        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
      </Marker>
      <FocusMap lat={location.lat} lng={location.long} />
    </MapContainer>
  );
};

export default LeafletWrapper;

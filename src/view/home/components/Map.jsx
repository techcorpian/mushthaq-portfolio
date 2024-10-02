// LeafletMap.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const center = [12.971598, 77.594566]; // Replace with your latitude and longitude

export default function LeafletMap() {
  return (
    <MapContainer className='rounded-xl' center={center} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center}>
        <Popup>Your location</Popup>
      </Marker>
    </MapContainer>
  );
}

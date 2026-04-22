import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function MapView({
  reports,
}) {
  return (
    <MapContainer
      center={[28.55, 77.22]}
      zoom={10}
      style={{
        height: "400px",
        width: "100%",
        borderRadius: "14px",
      }}
    >
      <TileLayer
        attribution="OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {reports.map((r) => (
        <Marker
          key={r.id}
          position={[r.lat, r.lng]}
        >
          <Popup>
            <strong>{r.title}</strong>
            <br />
            {r.location}
            <br />
            Urgency: {r.urgency}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
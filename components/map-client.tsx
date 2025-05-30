"use client"
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Correction pour les icônes Leaflet
const createDefaultIcon = () => {
  return new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  })
}

export default function MapClient() {
  // Coordonnées de Ntoum, Gabon
  const ntoumCoordinates: [number, number] = [0.38379, 9.73845] // Latitude, Longitude

  // Référence à l'icône pour éviter les problèmes d'icônes manquantes
  const defaultIcon = createDefaultIcon()

  return (
    <MapContainer
      center={ntoumCoordinates}
      zoom={14}
      style={{ height: "500px", width: "100%" }}
      className="rounded-lg overflow-hidden shadow-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={ntoumCoordinates} icon={defaultIcon}>
        {/* Tooltip qui s'affiche au survol */}
        <Tooltip direction="top" offset={[0, -35]}>
          <b>Motel du Coin</b>
          <br />
          Ntoum, Gabon
        </Tooltip>
       {/* Popup qui s'affiche toujours au clic */}
        <Popup>
          <b>Motel du Coin</b>
          <br />
          Ntoum, Gabon
        </Popup>
      </Marker>
    </MapContainer>
  )
}

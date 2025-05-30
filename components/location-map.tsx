"use client"
import dynamic from "next/dynamic"

// Composant de carte qui sera chargé uniquement côté client
const Map = dynamic(() => import("./map-client"), {
  loading: () => (
    <div className="w-full h-[500px] flex items-center justify-center bg-gray-100 rounded-lg">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
  ),
  ssr: false, // Ne pas précharger côté serveur
})

export default function LocationMap() {
  return <Map />
}

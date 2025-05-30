"use client"

import { formatPrice } from "@/lib/utils"

interface Chambre {
  id_chambre: number
  numero_chambre: number
  prix_nuit: number
  prix_jour: number
  type: string
  capacite: string
  photo?: string
}

export default function ChambreDetails({ chambre }: { chambre: Chambre }) {
  if (!chambre) return null

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="h-64 sm:h-80 md:h-96 bg-gray-200 relative">
        <img
          src={chambre.photo || `/placeholder.svg?height=600&width=800&text=Chambre ${chambre.numero_chambre}`}
          alt={`Chambre ${chambre.numero_chambre}`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Chambre {chambre.numero_chambre}</h1>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700">Type</h3>
            <p className="text-lg">{chambre.type}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700">Capacité</h3>
            <p className="text-lg">{chambre.capacite}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700">Prix par nuit</h3>
            <p className="text-lg text-primary font-bold">{formatPrice(chambre.prix_nuit)}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700">Prix journée</h3>
            <p className="text-lg text-primary font-bold">{formatPrice(chambre.prix_jour)}</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-bold mb-4">Description</h2>
          <p className="text-gray-700 mb-4">
            Profitez d'un séjour confortable dans notre chambre {chambre.type.toLowerCase()} pouvant accueillir{" "}
            {chambre.capacite}. Cette chambre spacieuse est équipée de toutes les commodités nécessaires pour rendre
            votre séjour agréable.
          </p>

          <h3 className="font-semibold mb-2">Équipements</h3>
          <ul className="grid grid-cols-2 gap-2 text-gray-700">
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Wi-Fi gratuit
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Climatisation
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Télévision
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Salle de bain privée
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Petit-déjeuner inclus
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Service en chambre
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

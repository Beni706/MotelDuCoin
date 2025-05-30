"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, Calendar } from "lucide-react"

export default function SearchBar() {
  const router = useRouter()
  // État uniquement pour les dates
  const [dateArrivee, setDateArrivee] = useState("")
  const [dateDepart, setDateDepart] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    // Construire les paramètres de recherche
    const params = new URLSearchParams()
    if (dateArrivee) params.set("arrivee", dateArrivee)
    if (dateDepart) params.set("depart", dateDepart)

    // Rediriger vers la page des chambres avec les filtres
    router.push(`/accueil?${params.toString()}`)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 -mt-16 relative z-20 mx-auto max-w-5xl">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
        
        <div className="md:w-1/2 relative">
          <label htmlFor="date_arrivee" className="block text-xs font-medium text-gray-500 mb-1 uppercase">
            Arrivée
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="date"
              id="date_arrivee"
              value={dateArrivee}
              onChange={(e) => setDateArrivee(e.target.value)}
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="md:w-1/2 relative">
          <label htmlFor="date_depart" className="block text-xs font-medium text-gray-500 mb-1 uppercase">
            Départ
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="date"
              id="date_depart"
              value={dateDepart}
              onChange={(e) => setDateDepart(e.target.value)}
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
        <div className="md:self-end pb-[2px">
          <button
            type="submit"
            className="w-full md:w-auto bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-md transition flex items-center justify-center"
          >
            <Search className="h-5 w-5 mr-2" />
            Rechercher
          </button>
        </div>
      </form>
    </div>
  )
}

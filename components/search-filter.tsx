"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

interface SearchFilterProps {
  onFilterChange: (filters: FilterOptions) => void
}

export interface FilterOptions {
  prixMin: string
  prixMax: string
  capacite: string
  type: string
}

export default function SearchFilter({ onFilterChange }: SearchFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [filters, setFilters] = useState<FilterOptions>({
    prixMin: "",
    prixMax: "",
    capacite: "",
    type: "",
  })

  // Initialiser les filtres à partir des paramètres d'URL
  useEffect(() => {
    const prixMin = searchParams.get("prixMin") || ""
    const prixMax = searchParams.get("prixMax") || ""
    const capacite = searchParams.get("capacite") || ""
    const type = searchParams.get("type") || ""

    setFilters({ prixMin, prixMax, capacite, type })
  }, [searchParams])

  // Mettre à jour les filtres et l'URL
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    const newFilters = { ...filters, [name]: value }
    setFilters(newFilters)

    // Mettre à jour l'URL avec les nouveaux filtres
    const params = new URLSearchParams()
    Object.entries(newFilters).forEach(([key, val]) => {
      if (val) params.set(key, val)
    })

    router.push(`/accueil?${params.toString()}`, { scroll: false })

    // Notifier le composant parent
    onFilterChange(newFilters)
  }

  const handleReset = () => {
    const emptyFilters = {
      prixMin: "",
      prixMax: "",
      capacite: "",
      type: "",
    }

    setFilters(emptyFilters)
    router.push("/accueil", { scroll: false })
    onFilterChange(emptyFilters)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h3 className="text-lg font-semibold mb-4">Filtrer les chambres</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label htmlFor="prixMin" className="block text-sm font-medium text-gray-700 mb-1">
            Prix minimum (FCFA)
          </label>
          <input
            type="number"
            id="prixMin"
            name="prixMin"
            value={filters.prixMin}
            onChange={handleFilterChange}
            min="0"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Min"
          />
        </div>

        <div>
          <label htmlFor="prixMax" className="block text-sm font-medium text-gray-700 mb-1">
            Prix maximum (FCFA)
          </label>
          <input
            type="number"
            id="prixMax"
            name="prixMax"
            value={filters.prixMax}
            onChange={handleFilterChange}
            min="0"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Max"
          />
        </div>

        <div>
          <label htmlFor="capacite" className="block text-sm font-medium text-gray-700 mb-1">
            Capacité
          </label>
          <select
            id="capacite"
            name="capacite"
            value={filters.capacite}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Toutes</option>
            <option value="1 personne">1 personne</option>
            <option value="2 personnes">2 personnes</option>
            <option value="3 personnes">3 personnes</option>
            <option value="4 personnes">4 personnes</option>
            <option value="5 personnes et plus">5 personnes et plus</option>
          </select>
        </div>

        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
            Type de chambre
          </label>
          <select
            id="type"
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Tous</option>
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
            <option value="Familiale">Familiale</option>
          </select>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <button
          onClick={handleReset}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded transition"
        >
          Réinitialiser
        </button>
      </div>
    </div>
  )
}

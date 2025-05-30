"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { formatPrice } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { useSearchParams } from "next/navigation"
import SearchFilter, { type FilterOptions } from "./search-filter"

const API_URL = process.env.NEXT_PUBLIC_API_URL

// Type pour les chambres
interface Chambre {
  id_chambre: number
  numero_chambre: number
  prix_nuit: number
  prix_jour: number
  type: string
  capacite: string
  reservations: any[]
  estDisponible?: boolean
  photo?: string
}

export default function ListDispo() {
  const [chambres, setChambres] = useState<Chambre[]>([])
  const [filteredChambres, setFilteredChambres] = useState<Chambre[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()
  const searchParams = useSearchParams()

  useEffect(() => {
    const fetchChambres = async () => {
      try {
        const response = await fetch(`${API_URL}/chambre`)

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des chambres")
        }

        const data = await response.json()

        // Ne plus filtrer les chambres, mais ajouter une propriété pour indiquer si elles sont disponibles
        const chambresAvecStatut = data.map((chambre: Chambre) => {
          // Vérifier si la chambre a des réservations actives
          const reservationsActives = chambre.reservations.filter((reservation) => {
            const dateDepart = new Date(reservation.date_depart)
            const maintenant = new Date()
            return dateDepart > maintenant && reservation.status === "ACCEPTER"
          })

          // Ajouter une propriété pour indiquer si la chambre est disponible
          return {
            ...chambre,
            estDisponible: reservationsActives.length === 0,
          }
        })

        setChambres(chambresAvecStatut)
        setFilteredChambres(chambresAvecStatut)
      } catch (err) {
        console.error("Erreur:", err)
        setError("Impossible de charger les chambres")
        toast({
          title: "Erreur",
          description: "Impossible de charger les chambres",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    fetchChambres()
  }, [toast])

  // Appliquer les filtres à partir des paramètres d'URL
  useEffect(() => {
    if (chambres.length === 0) return

    const prixMin = searchParams.get("prixMin")
    const prixMax = searchParams.get("prixMax")
    const capacite = searchParams.get("capacite")
    const type = searchParams.get("type")

    let filtered = [...chambres]

    if (prixMin) {
      filtered = filtered.filter((chambre) => chambre.prix_nuit >= Number(prixMin))
    }

    if (prixMax) {
      filtered = filtered.filter((chambre) => chambre.prix_nuit <= Number(prixMax))
    }

    if (capacite) {
      filtered = filtered.filter((chambre) => chambre.capacite === capacite)
    }

    if (type) {
      filtered = filtered.filter((chambre) => chambre.type === type)
    }

    setFilteredChambres(filtered)
  }, [chambres, searchParams])

  // Gérer le changement de filtre
  const handleFilterChange = (filters: FilterOptions) => {
    let filtered = [...chambres]

    if (filters.prixMin) {
      filtered = filtered.filter((chambre) => chambre.prix_nuit >= Number(filters.prixMin))
    }

    if (filters.prixMax) {
      filtered = filtered.filter((chambre) => chambre.prix_nuit <= Number(filters.prixMax))
    }

    if (filters.capacite) {
      filtered = filtered.filter((chambre) => chambre.capacite === filters.capacite)
    }

    if (filters.type) {
      filtered = filtered.filter((chambre) => chambre.type === filters.type)
    }

    setFilteredChambres(filtered)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-primary hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded"
        >
          Réessayer
        </button>
      </div>
    )
  }

  return (
    <div id="chambres">
      <SearchFilter onFilterChange={handleFilterChange} />

      {filteredChambres.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl">Aucune chambre ne correspond à vos critères.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChambres.map((chambre) => (
            <div
              key={chambre.id_chambre}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 relative">
                <img
                  src={chambre.photo || `/placeholder.svg?height=300&width=500&text=Chambre ${chambre.numero_chambre}`}
                  alt={`Chambre ${chambre.numero_chambre}`}
                  className="w-full h-full object-cover"
                />
                {/* Badge de statut */}
                <div className="absolute top-2 right-2">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      chambre.estDisponible ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {chambre.estDisponible ? "Disponible" : "Occupée"}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Chambre {chambre.numero_chambre}</h3>
                <p className="text-gray-600 mb-4">
                  {chambre.type} - {chambre.capacite}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-gray-700">
                      <span className="font-semibold">Nuit:</span> {formatPrice(chambre.prix_nuit)}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Jour:</span> {formatPrice(chambre.prix_jour)}
                    </p>
                  </div>
                  <Link
                    href={`/chambres/${chambre.id_chambre}`}
                    className="bg-primary hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded transition"
                  >
                    Voir
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

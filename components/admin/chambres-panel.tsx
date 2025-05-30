"use client"

import { useState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import { formatPrice } from "@/lib/utils"
import ChambreModal from "./chambre-modal"

const API_URL = process.env.NEXT_PUBLIC_API_URL

interface Chambre {
  id_chambre: number
  numero_chambre: number
  prix_nuit: number
  prix_jour: number
  type: string
  capacite: string
  reservations: any[]
}

export default function ChambresPanel() {
  const { toast } = useToast()

  const [chambres, setChambres] = useState<Chambre[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentChambre, setCurrentChambre] = useState<Chambre | null>(null)
  const [modalMode, setModalMode] = useState<"add" | "edit">("add")

  // Récupérer les chambres
  const fetchChambres = async () => {
    try {
      const token = localStorage.getItem("adminToken")

      const response = await fetch(`${API_URL}/chambre`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des chambres")
      }

      const data = await response.json()
      setChambres(data)
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

  useEffect(() => {
    fetchChambres()
  }, [toast])

  // Ouvrir le modal pour ajouter une chambre
  const handleAddChambre = () => {
    setCurrentChambre(null)
    setModalMode("add")
    setIsModalOpen(true)
  }

  // Ouvrir le modal pour modifier une chambre
  const handleEditChambre = (chambre: Chambre) => {
    setCurrentChambre(chambre)
    setModalMode("edit")
    setIsModalOpen(true)
  }

  // Supprimer une chambre
  const handleDeleteChambre = async (id: number) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cette chambre ?")) {
      return
    }

    try {
      const token = localStorage.getItem("adminToken")

      const response = await fetch(`${API_URL}/chambre/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error("Erreur lors de la suppression de la chambre")
      }

      toast({
        title: "Succès",
        description: "Chambre supprimée avec succès",
      })

      // Rafraîchir la liste des chambres
      fetchChambres()
    } catch (err) {
      console.error("Erreur:", err)
      toast({
        title: "Erreur",
        description: "Impossible de supprimer la chambre",
        variant: "destructive",
      })
    }
  }

  // Fermer le modal et rafraîchir les données si nécessaire
  const handleCloseModal = (refresh = false) => {
    setIsModalOpen(false)
    if (refresh) {
      fetchChambres()
    }
  }

  // Vérifier si une chambre est occupée
  const isChambreOccupee = (chambre: Chambre): boolean => {
    if (!chambre.reservations || chambre.reservations.length === 0) {
      return false
    }

    const now = new Date()

    return chambre.reservations.some((reservation) => {
      const dateDepart = new Date(reservation.date_depart)
      return dateDepart > now && reservation.status === "ACCEPTER"
    })
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
          onClick={() => fetchChambres()}
          className="mt-4 bg-primary hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded"
        >
          Réessayer
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gestion des chambres</h2>
        <button
          onClick={handleAddChambre}
          className="bg-primary hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded transition"
        >
          Ajouter une chambre
        </button>
      </div>

      {chambres.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-500">Aucune chambre disponible. Ajoutez-en une !</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Numéro
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Capacité
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prix Nuit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prix Jour
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {chambres.map((chambre) => (
                <tr key={chambre.id_chambre}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{chambre.numero_chambre}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{chambre.type}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{chambre.capacite}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{formatPrice(chambre.prix_nuit)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{formatPrice(chambre.prix_jour)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        isChambreOccupee(chambre) ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
                      }`}
                    >
                      {isChambreOccupee(chambre) ? "Occupée" : "Disponible"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleEditChambre(chambre)}
                      className="text-indigo-600 hover:text-indigo-900 mr-4"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleDeleteChambre(chambre.id_chambre)}
                      className="text-red-600 hover:text-red-900"
                      disabled={isChambreOccupee(chambre)}
                      title={isChambreOccupee(chambre) ? "Impossible de supprimer une chambre occupée" : ""}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal pour ajouter/modifier une chambre */}
      <ChambreModal isOpen={isModalOpen} onClose={handleCloseModal} chambre={currentChambre} mode={modalMode} />
    </div>
  )
}

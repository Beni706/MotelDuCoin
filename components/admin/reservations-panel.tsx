"use client"

import { useState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import { formatPrice, formatDate } from "@/lib/utils"
import ModifierDateModal from "./modifier-date-modal"

const API_URL = process.env.NEXT_PUBLIC_API_URL

interface Reservation {
  id_reservation: number
  nom_client: string
  prenom_client: string
  telephone1: string
  telephone2: string | null
  email: string
  date_arrivee: string
  date_depart: string
  date_reservation: string
  prix_total: string
  status: "EN_ATTENTE" | "ACCEPTER" | "REFUSER"
  id_chambre: number
  chambre?: {
    numero_chambre: number
  }
}

export default function ReservationsPanel() {
  const { toast } = useToast()

  const [reservations, setReservations] = useState<Reservation[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState<"all" | "pending" | "accepted" | "rejected">("all")

  const [isDateModalOpen, setIsDateModalOpen] = useState(false)
  const [currentReservation, setCurrentReservation] = useState<Reservation | null>(null)

  // Récupérer les réservations
  const fetchReservations = async () => {
    try {
      const token = localStorage.getItem("adminToken")

      const response = await fetch(`${API_URL}/reservation`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des réservations")
      }

      const data = await response.json()

      // Récupérer les détails des chambres pour chaque réservation
      const reservationsWithChambre = await Promise.all(
        data.map(async (reservation: Reservation) => {
          try {
            const chambreResponse = await fetch(`${API_URL}/chambre/${reservation.id_chambre}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })

            if (chambreResponse.ok) {
              const chambre = await chambreResponse.json()
              return { ...reservation, chambre }
            }

            return reservation
          } catch (error) {
            console.error("Erreur lors de la récupération de la chambre:", error)
            return reservation
          }
        }),
      )

      setReservations(reservationsWithChambre)
    } catch (err) {
      console.error("Erreur:", err)
      setError("Impossible de charger les réservations")
      toast({
        title: "Erreur",
        description: "Impossible de charger les réservations",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchReservations()
  }, [toast])

  // Accepter une réservation
  const handleAcceptReservation = async (id: number) => {
    try {
      const token = localStorage.getItem("adminToken")

      const reservation = reservations.find((r) => r.id_reservation === id)

      if (!reservation) {
        throw new Error("Réservation non trouvée")
      }

      const response = await fetch(`${API_URL}/reservation/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...reservation,
          status: "ACCEPTER",
        }),
      })

      if (!response.ok) {
        throw new Error("Erreur lors de l'acceptation de la réservation")
      }

      toast({
        title: "Succès",
        description: "Réservation acceptée avec succès",
      })

      // Rafraîchir la liste des réservations
      fetchReservations()
    } catch (err) {
      console.error("Erreur:", err)
      toast({
        title: "Erreur",
        description: "Impossible d'accepter la réservation",
        variant: "destructive",
      })
    }
  }

  // Refuser une réservation
  const handleRejectReservation = async (id: number) => {
    try {
      const token = localStorage.getItem("adminToken")

      const reservation = reservations.find((r) => r.id_reservation === id)

      if (!reservation) {
        throw new Error("Réservation non trouvée")
      }

      const response = await fetch(`${API_URL}/reservation/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...reservation,
          status: "REFUSER",
        }),
      })

      if (!response.ok) {
        throw new Error("Erreur lors du refus de la réservation")
      }

      toast({
        title: "Succès",
        description: "Réservation refusée avec succès",
      })

      // Rafraîchir la liste des réservations
      fetchReservations()
    } catch (err) {
      console.error("Erreur:", err)
      toast({
        title: "Erreur",
        description: "Impossible de refuser la réservation",
        variant: "destructive",
      })
    }
  }

  // Ouvrir le modal pour modifier la date de départ
  const handleModifierDate = (reservation: Reservation) => {
    setCurrentReservation(reservation)
    setIsDateModalOpen(true)
  }

  // Fermer le modal et rafraîchir les données si nécessaire
  const handleCloseModal = (refresh = false) => {
    setIsDateModalOpen(false)
    if (refresh) {
      fetchReservations()
    }
  }

  // Filtrer les réservations
  const filteredReservations = reservations.filter((reservation) => {
    if (filter === "all") return true
    if (filter === "pending") return reservation.status === "EN_ATTENTE"
    if (filter === "accepted") return reservation.status === "ACCEPTER"
    if (filter === "rejected") return reservation.status === "REFUSER"
    return true
  })

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
          onClick={() => fetchReservations()}
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
        <h2 className="text-2xl font-bold">Gestion des réservations</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1 rounded ${
              filter === "all" ? "bg-primary text-black" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Toutes
          </button>
          <button
            onClick={() => setFilter("pending")}
            className={`px-3 py-1 rounded ${
              filter === "pending" ? "bg-primary text-black" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            En attente
          </button>
          <button
            onClick={() => setFilter("accepted")}
            className={`px-3 py-1 rounded ${
              filter === "accepted" ? "bg-primary text-black" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Acceptées
          </button>
          <button
            onClick={() => setFilter("rejected")}
            className={`px-3 py-1 rounded ${
              filter === "rejected" ? "bg-primary text-black" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Refusées
          </button>
        </div>
      </div>
      
      
      {filteredReservations.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-500">Aucune réservation trouvée.</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Chambre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dates
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredReservations.map((reservation) => (
                <tr key={reservation.id_reservation}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {reservation.nom_client} {reservation.prenom_client}
                    </div>
                    <div className="text-sm text-gray-500">{reservation.email}</div>
                    <div className="text-sm text-gray-500">{reservation.telephone1}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {reservation.chambre
                        ? `Chambre ${reservation.chambre.numero_chambre}`
                        : `ID: ${reservation.id_chambre}`}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <div>Arrivée: {formatDate(reservation.date_arrivee)}</div>
                      <div>Départ: {formatDate(reservation.date_depart)}</div>
                      <div className="text-xs text-gray-500">
                        Réservé le: {formatDate(reservation.date_reservation)}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{formatPrice(Number(reservation.prix_total))}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        reservation.status === "EN_ATTENTE"
                          ? "bg-yellow-100 text-yellow-800"
                          : reservation.status === "ACCEPTER"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {reservation.status === "EN_ATTENTE"
                        ? "En attente"
                        : reservation.status === "ACCEPTER"
                          ? "Acceptée"
                          : "Refusée"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {reservation.status === "EN_ATTENTE" && (
                      <>
                        <button
                          onClick={() => handleAcceptReservation(reservation.id_reservation)}
                          className="text-green-600 hover:text-green-900 mr-2"
                        >
                          Accepter
                        </button>
                        <button
                          onClick={() => handleRejectReservation(reservation.id_reservation)}
                          className="text-red-600 hover:text-red-900 mr-2"
                        >
                          Refuser
                        </button>
                      </>
                    )}
                    {reservation.status === "ACCEPTER" && (
                      <button
                        onClick={() => handleModifierDate(reservation)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Modifier date
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal pour modifier la date de départ */}
      <ModifierDateModal isOpen={isDateModalOpen} onClose={handleCloseModal} reservation={currentReservation} />
    </div>
  )
}

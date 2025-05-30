"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import { formatDate } from "@/lib/utils"

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
  status: string
  id_chambre: number
}

interface ModifierDateModalProps {
  isOpen: boolean
  onClose: (refresh?: boolean) => void
  reservation: Reservation | null
}

export default function ModifierDateModal({ isOpen, onClose, reservation }: ModifierDateModalProps) {
  const { toast } = useToast()

  const [dateArrivee, setDateArrivee] = useState("")
  const [dateDepart, setDateDepart] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Initialiser le formulaire avec la date de départ actuelle
  useEffect(() => {
    if (reservation) {
      // Formater la date au format YYYY-MM-DD pour l'input date
      const dateA = new Date(reservation.date_arrivee)
      const dateD = new Date(reservation.date_depart)
      const formattedDateA = dateA.toISOString().split("T")[0]
      const formattedDateD = dateD.toISOString().split("T")[0]
      setDateArrivee(formattedDateA)
      setDateDepart(formattedDateD)
    }
  }, [reservation])

  // Valider la date
  const validateDate = () => {
    if (!dateArrivee) {
      setError("La date d'arrivée est requise")
      return false
    }

    if (!dateDepart) {
      setError("La date de départ est requise")
      return false
    }

    if (!reservation) {
      setError("Réservation non trouvée")
      return false
    }

    const newDateArrivee = new Date(dateArrivee)
    const newDateDepart = new Date(dateDepart)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (newDateArrivee < today) {
      setError("La date d'arrivée ne peut pas être dans le passé")
      return false
    }

    if (newDateDepart <= newDateArrivee) {
      setError("La date de départ doit être après la date d'arrivée")
      return false
    }

    setError(null)
    return true
  }

  // Soumettre le formulaire pour modifier les dates de la réservation
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateDate() || !reservation) return

    setLoading(true)

    try {
      const token = localStorage.getItem("adminToken")

      const response = await fetch(`${API_URL}/reservation/${reservation.id_reservation}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...reservation,
          date_arrivee: new Date(dateArrivee).toISOString(),
          date_depart: new Date(dateDepart).toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error("Erreur lors de la modification des dates de réservation")
      }

      toast({
        title: "Succès",
        description: "Dates de réservation modifiées avec succès",
      })

      // Fermer le modal et rafraîchir les données
      onClose(true)
    } catch (error) {
      console.error("Erreur:", error)
      toast({
        title: "Erreur",
        description: error instanceof Error ? error.message : "Erreur lors de la modification",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen || !reservation) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto my-auto">
        <h2 className="text-2xl font-bold mb-6">Modifier les dates de réservation</h2>

        <div className="mb-6">
          <p className="text-gray-700">
            <span className="font-semibold">Client:</span> {reservation.nom_client} {reservation.prenom_client}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Date d'arrivée:</span> {formatDate(reservation.date_arrivee)}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Date de départ actuelle:</span> {formatDate(reservation.date_depart)}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="date_arrivee" className="block text-sm font-medium text-gray-700 mb-1">
              Nouvelle date d'arrivée *
            </label>
            <input
              type="date"
              id="date_arrivee"
              value={dateArrivee}
              onChange={(e) => setDateArrivee(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className={`w-full p-2 border rounded-md ${error ? "border-red-500" : "border-gray-300"}`}
            />
          </div>

          <div>
            <label htmlFor="date_depart" className="block text-sm font-medium text-gray-700 mb-1">
              Nouvelle date de départ *
            </label>
            <input
              type="date"
              id="date_depart"
              value={dateDepart}
              onChange={(e) => setDateDepart(e.target.value)}
              min={dateArrivee || new Date().toISOString().split("T")[0]}
              className={`w-full p-2 border rounded-md ${error ? "border-red-500" : "border-gray-300"}`}
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={() => onClose()}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-primary hover:bg-yellow-400 text-black font-bold rounded-md transition disabled:opacity-50"
            >
              {loading ? "Traitement..." : "Modifier"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

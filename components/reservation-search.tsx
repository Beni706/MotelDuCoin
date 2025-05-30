"use client"

import type React from "react"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { formatDate, formatPrice } from "@/lib/utils"
import { Search, Calendar, User, Phone, Mail, CreditCard } from "lucide-react"

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
    type: string
    capacite: string
  }
}

export default function ReservationSearch() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [telephone, setTelephone] = useState("")
  const [loading, setLoading] = useState(false)
  const [reservations, setReservations] = useState<Reservation[]>([])
  const [searched, setSearched] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email && !telephone) {
      toast({
        title: "Erreur",
        description: "Veuillez saisir votre email ou votre numéro de téléphone",
        variant: "destructive",
      })
      return
    }

    setLoading(true)
    setReservations([])

    try {
      // Construire les paramètres de recherche
      const params = new URLSearchParams()
      if (email) params.append("email", email)
      if (telephone) params.append("telephone", telephone)

      const response = await fetch(`${API_URL}/reservation/search?${params.toString()}`)

      if (!response.ok) {
        throw new Error("Erreur lors de la recherche des réservations")
      }

      const data = await response.json()
      setReservations(data)
      setSearched(true)

      if (data.length === 0) {
        toast({
          title: "Aucune réservation trouvée",
          description: "Aucune réservation ne correspond à vos critères de recherche",
        })
      }
    } catch (error) {
      console.error("Erreur:", error)
      toast({
        title: "Erreur",
        description: "Impossible de récupérer vos réservations",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "EN_ATTENTE":
        return "En attente"
      case "ACCEPTER":
        return "Confirmée"
      case "REFUSER":
        return "Refusée"
      default:
        return status
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "EN_ATTENTE":
        return "bg-yellow-100 text-yellow-800"
      case "ACCEPTER":
        return "bg-green-100 text-green-800"
      case "REFUSER":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Votre adresse email"
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-500 text-sm">OU</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div>
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
              Téléphone
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="tel"
                id="telephone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Votre numéro de téléphone"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-4 rounded-md transition flex items-center justify-center disabled:opacity-50"
        >
          {loading ? (
            <>
              <span className="mr-2">Recherche en cours...</span>
              <div className="animate-spin h-5 w-5 border-2 border-black border-t-transparent rounded-full"></div>
            </>
          ) : (
            <>
              <Search className="mr-2 h-5 w-5" />
              Rechercher mes réservations
            </>
          )}
        </button>
      </form>

      {/* Résultats de la recherche */}
      {searched && (
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4">Résultats de la recherche</h3>

          {reservations.length === 0 ? (
            <div className="bg-gray-100 p-6 rounded-md text-center">
              <p className="text-gray-600">Aucune réservation trouvée avec les informations fournies.</p>
              <p className="text-gray-500 text-sm mt-2">
                Vérifiez que vous avez saisi le bon email ou numéro de téléphone utilisé lors de votre réservation.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {reservations.map((reservation) => (
                <div key={reservation.id_reservation} className="bg-white border rounded-lg shadow-sm overflow-hidden">
                  <div className="p-4 border-b bg-gray-50">
                    <div className="flex flex-wrap justify-between items-center">
                      <div className="flex items-center mb-2 sm:mb-0">
                        <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                        <span className="font-medium">
                          Réservation #{reservation.id_reservation} - {formatDate(reservation.date_reservation)}
                        </span>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(reservation.status)}`}
                      >
                        {getStatusLabel(reservation.status)}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 mb-2">Informations client</h4>
                        <div className="space-y-2">
                          <div className="flex items-start">
                            <User className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                            <div>
                              <p className="text-gray-800">
                                {reservation.nom_client} {reservation.prenom_client}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Mail className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                            <div>
                              <p className="text-gray-800">{reservation.email}</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Phone className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                            <div>
                              <p className="text-gray-800">{reservation.telephone1}</p>
                              {reservation.telephone2 && <p className="text-gray-600">{reservation.telephone2}</p>}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 mb-2">Détails de la réservation</h4>
                        <div className="space-y-2">
                          <div className="flex items-start">
                            <Calendar className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                            <div>
                              <p className="text-gray-800">
                                <span className="font-medium">Arrivée:</span> {formatDate(reservation.date_arrivee)}
                              </p>
                              <p className="text-gray-800">
                                <span className="font-medium">Départ:</span> {formatDate(reservation.date_depart)}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <CreditCard className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                            <div>
                              <p className="text-gray-800">
                                <span className="font-medium">Prix total:</span>{" "}
                                <span className="text-primary font-bold">{formatPrice(Number(reservation.prix_total))}</span>
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-400 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                              />
                            </svg>
                            <div>
                              <p className="text-gray-800">
                                <span className="font-medium">Chambre:</span>{" "}
                                {reservation.chambre
                                  ? `N°${reservation.chambre.numero_chambre} - ${reservation.chambre.type} (${reservation.chambre.capacite})`
                                  : `ID: ${reservation.id_chambre}`}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {reservation.status === "EN_ATTENTE" && (
                    <div className="p-4 bg-yellow-50 border-t">
                      <p className="text-sm text-yellow-800">
                        <span className="font-semibold">Note:</span> Votre réservation est en attente de confirmation.
                        Nous vous contacterons prochainement.
                      </p>
                    </div>
                  )}

                  {reservation.status === "ACCEPTER" && (
                    <div className="p-4 bg-green-50 border-t">
                      <p className="text-sm text-green-800">
                        <span className="font-semibold">Note:</span> Votre réservation est confirmée. Nous vous
                        attendons le {formatDate(reservation.date_arrivee)}.
                      </p>
                    </div>
                  )}

                  {reservation.status === "REFUSER" && (
                    <div className="p-4 bg-red-50 border-t">
                      <p className="text-sm text-red-800">
                        <span className="font-semibold">Note:</span> Votre réservation a été refusée. Veuillez nous
                        contacter pour plus d'informations.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

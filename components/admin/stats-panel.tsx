"use client"

import { useState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import { formatPrice } from "@/lib/utils"

const API_URL = process.env.NEXT_PUBLIC_API_URL

interface StatsData {
  totalChambres: number
  chambresDisponibles: number
  chambresOccupees: number
  reservationsEnAttente: number
  reservationsAcceptees: number
  reservationsRefusees: number
  revenuTotal: number
}

export default function StatsPanel() {
  const { toast } = useToast()
  const [stats, setStats] = useState<StatsData>({
    totalChambres: 0,
    chambresDisponibles: 0,
    chambresOccupees: 0,
    reservationsEnAttente: 0,
    reservationsAcceptees: 0,
    reservationsRefusees: 0,
    revenuTotal: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("adminToken")

        // Récupérer les chambres
        const chambresResponse = await fetch(`${API_URL}/chambre`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        // Récupérer les réservations
        const reservationsResponse = await fetch(`${API_URL}/reservation`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!chambresResponse.ok || !reservationsResponse.ok) {
          throw new Error("Erreur lors de la récupération des données")
        }

        const chambres = await chambresResponse.json()
        const reservations = await reservationsResponse.json()

        // Calculer les statistiques
        const now = new Date()

        // Chambres occupées (avec réservation active)
        const chambresOccupees = chambres.filter((chambre: any) => {
          return chambre.reservations.some((reservation: any) => {
            const dateDepart = new Date(reservation.date_depart)
            return dateDepart > now && reservation.status === "ACCEPTER"
          })
        }).length

        // Réservations par statut
        const reservationsEnAttente = reservations.filter((r: any) => r.status === "EN_ATTENTE").length
        const reservationsAcceptees = reservations.filter((r: any) => r.status === "ACCEPTER").length
        const reservationsRefusees = reservations.filter((r: any) => r.status === "REFUSER").length

        // Revenu total (somme des prix des réservations acceptées)
        const revenuTotal = reservations
          .filter((r: any) => r.status === "ACCEPTER")
          .reduce((total: number, r: any) => total + Number(r.prix_total), 0)

        setStats({
          totalChambres: chambres.length,
          chambresDisponibles: chambres.length - chambresOccupees,
          chambresOccupees,
          reservationsEnAttente,
          reservationsAcceptees,
          reservationsRefusees,
          revenuTotal,
        })
      } catch (error) {
        console.error("Erreur:", error)
        toast({
          title: "Erreur",
          description: "Impossible de charger les statistiques",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [toast])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6">Tableau de bord</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Statistiques des chambres */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Chambres</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Total:</span>
              <span className="font-bold">{stats.totalChambres}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Disponibles:</span>
              <span className="font-bold text-green-600">{stats.chambresDisponibles}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Occupées:</span>
              <span className="font-bold text-red-600">{stats.chambresOccupees}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Taux d'occupation:</span>
              <span className="font-bold">
                {stats.totalChambres > 0
                  ? `${Math.round((stats.chambresOccupees / stats.totalChambres) * 100)}%`
                  : "0%"}
              </span>
            </div>
          </div>
        </div>

        {/* Statistiques des réservations */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Réservations</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Total:</span>
              <span className="font-bold">
                {stats.reservationsEnAttente + stats.reservationsAcceptees + stats.reservationsRefusees}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">En attente:</span>
              <span className="font-bold text-yellow-600">{stats.reservationsEnAttente}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Acceptées:</span>
              <span className="font-bold text-green-600">{stats.reservationsAcceptees}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Refusées:</span>
              <span className="font-bold text-red-600">{stats.reservationsRefusees}</span>
            </div>
          </div>
        </div>

        {/* Statistiques financières */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Finances</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Revenu total:</span>
              <span className="font-bold text-green-600">{formatPrice(stats.revenuTotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Revenu moyen par réservation:</span>
              <span className="font-bold">
                {stats.reservationsAcceptees > 0
                  ? formatPrice(stats.revenuTotal / stats.reservationsAcceptees)
                  : formatPrice(0)}
              </span>
            </div>
          </div>
        </div>

        {/* Graphique simplifié */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Répartition des réservations</h3>
          <div className="h-32 flex items-end space-x-4">
            <div className="flex-1 flex flex-col items-center">
              <div
                className="w-full bg-yellow-400 rounded-t"
                style={{
                  height: `${Math.min(
                    100,
                    (stats.reservationsEnAttente /
                      Math.max(
                        1,
                        stats.reservationsEnAttente + stats.reservationsAcceptees + stats.reservationsRefusees,
                      )) *
                      100,
                  )}%`,
                }}
              ></div>
              <span className="text-xs mt-2">En attente</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div
                className="w-full bg-green-500 rounded-t"
                style={{
                  height: `${Math.min(
                    100,
                    (stats.reservationsAcceptees /
                      Math.max(
                        1,
                        stats.reservationsEnAttente + stats.reservationsAcceptees + stats.reservationsRefusees,
                      )) *
                      100,
                  )}%`,
                }}
              ></div>
              <span className="text-xs mt-2">Acceptées</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div
                className="w-full bg-red-500 rounded-t"
                style={{
                  height: `${Math.min(
                    100,
                    (stats.reservationsRefusees /
                      Math.max(
                        1,
                        stats.reservationsEnAttente + stats.reservationsAcceptees + stats.reservationsRefusees,
                      )) *
                      100,
                  )}%`,
                }}
              ></div>
              <span className="text-xs mt-2">Refusées</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

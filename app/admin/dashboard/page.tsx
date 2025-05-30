"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import AdminHeader from "@/components/admin/admin-header"
import ChambresPanel from "@/components/admin/chambres-panel"
import ReservationsPanel from "@/components/admin/reservations-panel"
import StatsPanel from "@/components/admin/stats-panel"

const API_URL = process.env.NEXT_PUBLIC_API_URL

export default function AdminDashboard() {
  const router = useRouter()
  const { toast } = useToast()

  const [activeTab, setActiveTab] = useState<"stats" | "chambres" | "reservations">("stats")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  // Vérifier l'authentification au chargement de la page
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("adminToken")

      if (!token) {
        toast({
          title: "Accès refusé",
          description: "Vous devez être connecté pour accéder à cette page.",
          variant: "destructive",
        })
        router.push("/admin/login")
        return
      }

      setIsAuthenticated(true)
      setLoading(false)
    }

    checkAuth()
  }, [router, toast])

  // Déconnexion
  const handleLogout = () => {
    localStorage.removeItem("adminToken")
    toast({
      title: "Déconnexion réussie",
      description: "Vous avez été déconnecté avec succès.",
    })
    router.push("/admin/login")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // La redirection sera gérée par useEffect
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminHeader onLogout={handleLogout} />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Tableau de bord</h1>

        {/* Onglets */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab("stats")}
            className={`py-3 px-6 font-medium text-sm ${
              activeTab === "stats" ? "border-b-2 border-primary text-primary" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Statistiques
          </button>
          <button
            onClick={() => setActiveTab("chambres")}
            className={`py-3 px-6 font-medium text-sm ${
              activeTab === "chambres" ? "border-b-2 border-primary text-primary" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Gestion des chambres
          </button>
          <button
            onClick={() => setActiveTab("reservations")}
            className={`py-3 px-6 font-medium text-sm ${
              activeTab === "reservations"
                ? "border-b-2 border-primary text-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Réservations
          </button>
        </div>

        {/* Contenu des onglets */}
        {activeTab === "stats" ? <StatsPanel /> : activeTab === "chambres" ? <ChambresPanel /> : <ReservationsPanel />}
      </main>
    </div>
  )
}

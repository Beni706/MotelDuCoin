"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { formatPrice, calculateTotalPrice } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

const API_URL = process.env.NEXT_PUBLIC_API_URL

interface Chambre {
  id_chambre: number
  numero_chambre: number
  prix_nuit: number
  prix_jour: number
  type: string
  capacite: string
}

export default function ReserveForm({ chambre }: { chambre: Chambre }) {
  const router = useRouter()
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    nom_client: "",
    prenom_client: "",
    telephone1: "",
    telephone2: "",
    email: "",
    date_arrivee: "",
    date_depart: "",
  })

  const [prixTotal, setPrixTotal] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Calculer le prix total lorsque les dates changent
  useEffect(() => {
    if (formData.date_arrivee && formData.date_depart && chambre) {
      const dateArrivee = new Date(formData.date_arrivee)
      const dateDepart = new Date(formData.date_depart)

      // Vérifier que la date de départ est après la date d'arrivée
      if (dateDepart <= dateArrivee) {
        setPrixTotal(null)
        return
      }

      const total = calculateTotalPrice(dateArrivee, dateDepart, chambre.prix_nuit, chambre.prix_jour)

      setPrixTotal(total)
    } else {
      setPrixTotal(null)
    }
  }, [formData.date_arrivee, formData.date_depart, chambre])

  // Gérer les changements dans le formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Effacer l'erreur pour ce champ s'il est rempli
    if (value.trim() && errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  // Valider le formulaire
  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Vérifier les champs obligatoires
    if (!formData.nom_client.trim()) newErrors.nom_client = "Le nom est requis"
    if (!formData.prenom_client.trim()) newErrors.prenom_client = "Le prénom est requis"
    if (!formData.telephone1.trim()) newErrors.telephone1 = "Le téléphone est requis"
    if (!formData.email.trim()) newErrors.email = "L'email est requis"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email invalide"

    if (!formData.date_arrivee) newErrors.date_arrivee = "La date d'arrivée est requise"
    if (!formData.date_depart) newErrors.date_depart = "La date de départ est requise"
    else {
      const dateArrivee = new Date(formData.date_arrivee)
      const dateDepart = new Date(formData.date_depart)
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      if (dateArrivee < today) {
        newErrors.date_arrivee = "La date d'arrivée doit être aujourd'hui ou ultérieure"
      }

      if (dateDepart <= dateArrivee) {
        newErrors.date_depart = "La date de départ doit être après la date d'arrivée"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Soumettre le formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)

    try {
      const response = await fetch(`${API_URL}/reservation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom_client: formData.nom_client,
          prenom_client: formData.prenom_client,
          telephone1: formData.telephone1,
          telephone2: formData.telephone2,
          email: formData.email,
          date_arrivee: new Date(formData.date_arrivee).toISOString(), // Convertir en format ISO
          date_depart: new Date(formData.date_depart).toISOString(),   // Convertir en format ISO
          date_reservation: new Date().toISOString(), // Date actuelle
          prix_total: prixTotal?.toString() || "0",
          status: "EN_ATTENTE",
          id_chambre: chambre.id_chambre,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Erreur lors de la réservation")
      }

      // Réservation réussie
      toast({
        title: "Réservation envoyée",
        description: "Votre réservation est en attente de confirmation.",
      })

      // Rediriger vers la page d'accueil après 2 secondes
      setTimeout(() => {
        router.push("/accueil")
      }, 2000)
    } catch (error) {
      console.error("Erreur:", error)
      toast({
        title: "Erreur",
        description: error instanceof Error ? error.message : "Erreur lors de la réservation",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  // Définir la date minimale (aujourd'hui) pour le champ date
  const today = new Date().toISOString().split("T")[0]

  if (!chambre) return null

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Réserver cette chambre</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="nom_client" className="block text-sm font-medium text-gray-700 mb-1">
              Nom *
            </label>
            <input
              type="text"
              id="nom_client"
              name="nom_client"
              value={formData.nom_client}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md ${errors.nom_client ? "border-red-500" : "border-gray-300"}`}
              placeholder="Votre nom"
            />
            {errors.nom_client && <p className="text-red-500 text-xs mt-1">{errors.nom_client}</p>}
          </div>

          <div>
            <label htmlFor="prenom_client" className="block text-sm font-medium text-gray-700 mb-1">
              Prénom *
            </label>
            <input
              type="text"
              id="prenom_client"
              name="prenom_client"
              value={formData.prenom_client}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md ${errors.prenom_client ? "border-red-500" : "border-gray-300"}`}
              placeholder="Votre prénom"
            />
            {errors.prenom_client && <p className="text-red-500 text-xs mt-1">{errors.prenom_client}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="telephone1" className="block text-sm font-medium text-gray-700 mb-1">
              Téléphone *
            </label>
            <input
              type="tel"
              id="telephone1"
              name="telephone1"
              value={formData.telephone1}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md ${errors.telephone1 ? "border-red-500" : "border-gray-300"}`}
              placeholder="Votre numéro principal"
            />
            {errors.telephone1 && <p className="text-red-500 text-xs mt-1">{errors.telephone1}</p>}
          </div>

          <div>
            <label htmlFor="telephone2" className="block text-sm font-medium text-gray-700 mb-1">
              Téléphone secondaire
            </label>
            <input
              type="tel"
              id="telephone2"
              name="telephone2"
              value={formData.telephone2}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Numéro secondaire (optionnel)"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${errors.email ? "border-red-500" : "border-gray-300"}`}
            placeholder="Votre adresse email"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="date_arrivee" className="block text-sm font-medium text-gray-700 mb-1">
              Date d'arrivée *
            </label>
            <input
              type="date"
              id="date_arrivee"
              name="date_arrivee"
              value={formData.date_arrivee}
              onChange={handleChange}
              min={today}
              className={`w-full p-2 border rounded-md ${errors.date_arrivee ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.date_arrivee && <p className="text-red-500 text-xs mt-1">{errors.date_arrivee}</p>}
          </div>

          <div>
            <label htmlFor="date_depart" className="block text-sm font-medium text-gray-700 mb-1">
              Date de départ *
            </label>
            <input
              type="date"
              id="date_depart"
              name="date_depart"
              value={formData.date_depart}
              onChange={handleChange}
              min={formData.date_arrivee || today}
              className={`w-full p-2 border rounded-md ${errors.date_depart ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.date_depart && <p className="text-red-500 text-xs mt-1">{errors.date_depart}</p>}
          </div>
        </div>

        {prixTotal !== null && (
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="font-semibold text-lg mb-2">Récapitulatif</h3>
            <div className="flex justify-between items-center">
              <span>Prix total:</span>
              <span className="text-xl font-bold text-primary">{formatPrice(prixTotal)}</span>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-4 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Traitement en cours..." : "Réserver maintenant"}
        </button>

        <p className="text-sm text-gray-500 text-center mt-4">
          En cliquant sur "Réserver maintenant", vous acceptez nos conditions générales de vente.
        </p>
      </form>
    </div>
  )
}

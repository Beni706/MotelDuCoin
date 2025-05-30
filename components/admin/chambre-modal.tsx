"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"

const API_URL = process.env.NEXT_PUBLIC_API_URL

interface Chambre {
  id_chambre: number
  numero_chambre: number
  prix_nuit: number
  prix_jour: number
  type: string
  capacite: string
  photo?: string
}

interface ChambreModalProps {
  isOpen: boolean
  onClose: (refresh?: boolean) => void
  chambre: Chambre | null
  mode: "add" | "edit"
}

export default function ChambreModal({ isOpen, onClose, chambre, mode }: ChambreModalProps) {
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    numero_chambre: "",
    prix_nuit: "",
    prix_jour: "",
    type: "",
    capacite: "",
  })

  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [photo, setPhoto] = useState<string | null>(null)

  // Initialiser le formulaire avec les données de la chambre si en mode édition
  useEffect(() => {
    if (mode === "edit" && chambre) {
      setFormData({
        numero_chambre: chambre.numero_chambre.toString(),
        prix_nuit: chambre.prix_nuit.toString(),
        prix_jour: chambre.prix_jour.toString(),
        type: chambre.type,
        capacite: chambre.capacite,
      })
      setPhoto(chambre.photo || null)
    } else {
      // Réinitialiser le formulaire en mode ajout
      setFormData({
        numero_chambre: "",
        prix_nuit: "",
        prix_jour: "",
        type: "",
        capacite: "",
      })
      setPhoto(null)
    }

    // Réinitialiser les erreurs
    setErrors({})
  }, [chambre, mode, isOpen])

  // Gérer les changements dans le formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

    if (!formData.numero_chambre.trim()) {
      newErrors.numero_chambre = "Le numéro de chambre est requis"
    } else if (isNaN(Number(formData.numero_chambre))) {
      newErrors.numero_chambre = "Le numéro de chambre doit être un nombre"
    }

    if (!formData.prix_nuit.trim()) {
      newErrors.prix_nuit = "Le prix par nuit est requis"
    } else if (isNaN(Number(formData.prix_nuit)) || Number(formData.prix_nuit) <= 0) {
      newErrors.prix_nuit = "Le prix par nuit doit être un nombre positif"
    }

    if (!formData.prix_jour.trim()) {
      newErrors.prix_jour = "Le prix par jour est requis"
    } else if (isNaN(Number(formData.prix_jour)) || Number(formData.prix_jour) <= 0) {
      newErrors.prix_jour = "Le prix par jour doit être un nombre positif"
    }

    if (!formData.type.trim()) {
      newErrors.type = "Le type de chambre est requis"
    }

    if (!formData.capacite.trim()) {
      newErrors.capacite = "La capacité est requise"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Vérifier le type de fichier
    if (!file.type.startsWith("image/")) {
      setErrors((prev) => ({ ...prev, photo: "Le fichier doit être une image" }))
      return
    }

    // Vérifier la taille du fichier (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, photo: "L'image ne doit pas dépasser 5MB" }))
      return
    }

    // Convertir l'image en base64
    const reader = new FileReader()
    reader.onload = (event) => {
      setPhoto(event.target?.result as string)
      // Effacer l'erreur si elle existe
      if (errors.photo) {
        setErrors((prev) => {
          const newErrors = { ...prev }
          delete newErrors.photo
          return newErrors
        })
      }
    }
    reader.readAsDataURL(file)
  }

  // Soumettre le formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)

    try {
      const token = localStorage.getItem("adminToken")

      const url = mode === "edit" && chambre ? `${API_URL}/chambre/${chambre.id_chambre}` : `${API_URL}/chambre`

      const method = mode === "edit" ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          numero_chambre: Number.parseInt(formData.numero_chambre),
          prix_nuit: Number.parseInt(formData.prix_nuit),
          prix_jour: Number.parseInt(formData.prix_jour),
          type: formData.type,
          capacite: formData.capacite,
          photo: photo,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Erreur lors de l'opération")
      }

      // Opération réussie
      toast({
        title: "Succès",
        description: mode === "edit" ? "Chambre modifiée avec succès" : "Chambre ajoutée avec succès",
      })

      // Fermer le modal et rafraîchir les données
      onClose(true)
    } catch (error) {
      console.error("Erreur:", error)
      toast({
        title: "Erreur",
        description: error instanceof Error ? error.message : "Erreur lors de l'opération",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto my-auto">
        <h2 className="text-2xl font-bold mb-6">{mode === "edit" ? "Modifier la chambre" : "Ajouter une chambre"}</h2>

        <form onSubmit={handleSubmit} className="space-y-4 overflow-y-visible">
          <div>
            <label htmlFor="numero_chambre" className="block text-sm font-medium text-gray-700 mb-1">
              Numéro de chambre *
            </label>
            <input
              type="text"
              id="numero_chambre"
              name="numero_chambre"
              value={formData.numero_chambre}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md ${errors.numero_chambre ? "border-red-500" : "border-gray-300"}`}
              placeholder="Numéro de chambre"
            />
            {errors.numero_chambre && <p className="text-red-500 text-xs mt-1">{errors.numero_chambre}</p>}
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
              Type de chambre *
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md ${errors.type ? "border-red-500" : "border-gray-300"}`}
            >
              <option value="">Sélectionner un type</option>
              <option value="Standard">Standard</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Suite">Suite</option>
              <option value="Familiale">Familiale</option>
            </select>
            {errors.type && <p className="text-red-500 text-xs mt-1">{errors.type}</p>}
          </div>

          <div>
            <label htmlFor="capacite" className="block text-sm font-medium text-gray-700 mb-1">
              Capacité *
            </label>
            <select
              id="capacite"
              name="capacite"
              value={formData.capacite}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md ${errors.capacite ? "border-red-500" : "border-gray-300"}`}
            >
              <option value="">Sélectionner une capacité</option>
              <option value="1 personne">1 personne</option>
              <option value="2 personnes">2 personnes</option>
              <option value="3 personnes">3 personnes</option>
              <option value="4 personnes">4 personnes</option>
              <option value="5 personnes et plus">5 personnes et plus</option>
            </select>
            {errors.capacite && <p className="text-red-500 text-xs mt-1">{errors.capacite}</p>}
          </div>

          <div>
            <label htmlFor="prix_nuit" className="block text-sm font-medium text-gray-700 mb-1">
              Prix par nuit (€) *
            </label>
            <input
              type="number"
              id="prix_nuit"
              name="prix_nuit"
              value={formData.prix_nuit}
              onChange={handleChange}
              min="0"
              className={`w-full p-2 border rounded-md ${errors.prix_nuit ? "border-red-500" : "border-gray-300"}`}
              placeholder="Prix par nuit"
            />
            {errors.prix_nuit && <p className="text-red-500 text-xs mt-1">{errors.prix_nuit}</p>}
          </div>

          <div>
            <label htmlFor="prix_jour" className="block text-sm font-medium text-gray-700 mb-1">
              Prix par jour (€) *
            </label>
            <input
              type="number"
              id="prix_jour"
              name="prix_jour"
              value={formData.prix_jour}
              onChange={handleChange}
              min="0"
              className={`w-full p-2 border rounded-md ${errors.prix_jour ? "border-red-500" : "border-gray-300"}`}
              placeholder="Prix par jour"
            />
            {errors.prix_jour && <p className="text-red-500 text-xs mt-1">{errors.prix_jour}</p>}
          </div>

          <div>
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-1">
              Photo (optionnel)
            </label>
            <div className="space-y-2">
              {photo && (
                <div className="relative w-full h-40 bg-gray-100 rounded-md overflow-hidden">
                  <img src={photo || "/placeholder.svg"} alt="Aperçu" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => setPhoto(null)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    title="Supprimer la photo"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              )}
              <input
                type="file"
                id="photo"
                accept="image/*"
                onChange={handlePhotoChange}
                className={`w-full p-2 border rounded-md ${errors.photo ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.photo && <p className="text-red-500 text-xs mt-1">{errors.photo}</p>}
              <p className="text-xs text-gray-500">Formats acceptés: JPG, PNG, GIF. Taille max: 5MB</p>
            </div>
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
              {loading ? "Traitement..." : mode === "edit" ? "Modifier" : "Ajouter"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Formater un prix en euros
export function formatPrice(price: number | null | undefined): string {
  if (price == null) return "" // Ou une valeur par défaut comme "N/A" ou "Prix non disponible"
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XAF', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(price)
}

// Formater une date
export function formatDate(date: Date | string): string {
  const dateObj = typeof date === "string" ? new Date(date) : date
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(dateObj)
}

// Calculer le nombre de jours entre deux dates
export function calculateDays(startDate: Date, endDate: Date): number {
  const start = new Date(startDate)
  const end = new Date(endDate)
  const diffTime = Math.abs(end.getTime() - start.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
}

// Fonction pour calculer le prix total
export function calculateTotalPrice(dateArrivee: Date, dateDepart: Date, prixNuit: number, prixJour: number): number {
  const diffTime = Math.abs(dateDepart.getTime() - dateArrivee.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays <= 0) return 0

  return diffDays * prixNuit // Pour l'instant, simplifions en utilisant uniquement le prix par nuit.
}

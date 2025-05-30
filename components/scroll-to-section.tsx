"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function ScrollToSection() {
  const searchParams = useSearchParams()

  useEffect(() => {
    // Vérifier si nous avons un hash dans l'URL
    const hash = window.location.hash

    if (hash) {
      // Attendre un peu que le DOM soit complètement chargé
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1))
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [searchParams])

  return null
}

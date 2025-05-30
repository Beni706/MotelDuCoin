"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  // Ne pas afficher le header sur les pages admin
  if (pathname.startsWith("/admin")) {
    return null
  }

  return (
    <header className="bg-primary shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/accueil" className="text-2xl font-bold text-white">
          Motel du Coin
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/accueil"
                className={`text-white hover:text-yellow-200 transition ${
                  pathname === "/accueil" ? "font-bold underline" : ""
                }`}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/mes-reservations"
                className={`text-white hover:text-yellow-200 transition ${
                  pathname === "/mes-reservations" ? "font-bold underline" : ""
                }`}
              >
                Mes réservations
              </Link>
            </li>
            <li>
              <Link
                href="/localisation"
                className={`text-white hover:text-yellow-200 transition ${
                  pathname === "/localisation" ? "font-bold underline" : ""
                }`}
              >
                Localisation
              </Link>
            </li>
            <li>
              <Link
                href="/a-propos"
                className={`text-white hover:text-yellow-200 transition ${
                  pathname === "/a-propos" ? "font-bold underline" : ""
                }`}
              >
                À propos
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  )
}

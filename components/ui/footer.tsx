import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Motel du Coin</h3>
            <p className="text-gray-300">Le meilleur endroit pour séjourner lors de votre passage dans notre région.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300">123 Rue Principale</p>
            <p className="text-gray-300">Ntoum, Estuaire</p>
            <p className="text-gray-300">Téléphone: (123) 456-7890</p>
            <p className="text-gray-300">Email: info@motelducoin.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="text-gray-300 space-y-2">
              <li>
                <Link href="/accueil" className="hover:text-primary transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-primary transition">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Motel du Coin. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

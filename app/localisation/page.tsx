import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import LocationMap from "@/components/location-map"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function LocalisationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-black text-white">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{
              backgroundImage: "url('/imageMotel.jpg')",
            }}
          />
          <div className="container mx-auto px-4 py-24 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Notre Localisation</h1>
            <p className="text-xl max-w-2xl">
              Découvrez comment nous trouver facilement au cœur de Ntoum, Gabon. Notre établissement est idéalement
              situé pour explorer la région.
            </p>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Informations de contact */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Informations</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Adresse</h3>
                      <p className="text-gray-600">Route Nationale, Ntoum</p>
                      <p className="text-gray-600">Estuaire, Gabon</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Téléphone</h3>
                      <p className="text-gray-600">+241 77 12 34 56</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">contact@motelducoin.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Horaires</h3>
                      <p className="text-gray-600">Réception: 24h/24, 7j/7</p>
                      <p className="text-gray-600">Épicerie: 7h00 - 22h00</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="https://www.google.com/maps/dir//Ntoum+Gabon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-4 rounded-md text-center transition"
                  >
                    Itinéraire
                  </a>
                </div>
              </div>
            </div>

            {/* Carte */}
            <div className="lg:col-span-2">
              <LocationMap />
              <p className="text-sm text-gray-500 mt-2">
                * Cliquez et faites glisser pour explorer la carte. Utilisez les boutons + et - pour zoomer.
              </p>
            </div>
          </div>

          {/* Section Comment nous trouver */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Comment nous trouver</h2>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Depuis Libreville</h3>
                  <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                    <li>Prenez la N1 en direction de Ntoum</li>
                    <li>Continuez sur environ 38 km</li>
                    <li>À l'entrée de Ntoum, vous verrez notre établissement sur votre droite</li>
                    <li>Un grand panneau "Motel du Coin" indique l'entrée</li>
                    <li>Parking gratuit disponible sur place</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Transports</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-primary/20 p-1 rounded-full mr-2 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                      <span>
                        <strong>Taxi:</strong> Service de taxi disponible depuis Libreville (environ 45 minutes)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/20 p-1 rounded-full mr-2 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                      <span>
                        <strong>Bus:</strong> Des bus réguliers relient Libreville à Ntoum
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/20 p-1 rounded-full mr-2 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                      <span>
                        <strong>Location de voiture:</strong> Recommandée pour explorer la région
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/20 p-1 rounded-full mr-2 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                      <span>
                        <strong>Service de navette:</strong> Sur demande, nous pouvons organiser votre transfert
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

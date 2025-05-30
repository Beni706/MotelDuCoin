import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import AboutFondateur from "@/components/about-fondateur"

export default function AProposPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-gray-900 text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/a-propos.jpg')",
              opacity: 0.4,
            }}
          />
          <div className="container mx-auto px-4 py-24 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À Propos de Nous</h1>
            <p className="text-xl max-w-2xl">
              Découvrez l'histoire du Motel du Coin, notre mission et les valeurs qui nous animent au quotidien.
            </p>
          </div>
        </div>

        {/* Section Notre Histoire */}
        <AboutFondateur />

        {/* Section Notre Mission */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Notre Mission</h2>

              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Au Motel du Coin, notre mission est simple mais essentielle : offrir à nos clients une expérience
                  d'hébergement exceptionnelle dans un cadre chaleureux et accueillant.
                </p>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Nous nous efforçons de créer un environnement où chaque voyageur se sent comme chez soi, tout en
                  bénéficiant d'un service attentionné et personnalisé. Que vous soyez en voyage d'affaires, en vacances
                  en famille ou simplement de passage, notre objectif est de rendre votre séjour aussi confortable et
                  agréable que possible.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Nous croyons fermement que la qualité de l'accueil et le souci du détail font toute la différence.
                  C'est pourquoi notre équipe s'engage à maintenir les plus hauts standards de propreté, de confort et
                  de service pour que chaque client reparte avec l'envie de revenir.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Notre Équipe */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Notre Équipe</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Membre d'équipe 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-gray-200">
                  <img
                    src="/placeholder.svg?height=300&width=300&text=Directeur"
                    alt="Directeur"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Pierre Dubois</h3>
                  <p className="text-primary font-semibold mb-3">Directeur</p>
                  <p className="text-gray-600">
                    Avec plus de 15 ans d'expérience dans l'hôtellerie, Pierre veille à ce que chaque aspect de votre
                    séjour soit parfait.
                  </p>
                </div>
              </div>

              {/* Membre d'équipe 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-gray-200">
                  <img
                    src="/placeholder.svg?height=300&width=300&text=Chef+Réception"
                    alt="Chef de Réception"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Marie Lefèvre</h3>
                  <p className="text-primary font-semibold mb-3">Chef de Réception</p>
                  <p className="text-gray-600">
                    Marie et son équipe sont là pour vous accueillir 24h/24 et répondre à toutes vos demandes pendant
                    votre séjour.
                  </p>
                </div>
              </div>

              {/* Membre d'équipe 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-gray-200">
                  <img
                    src="/placeholder.svg?height=300&width=300&text=Responsable+Maintenance"
                    alt="Responsable Maintenance"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Thomas Martin</h3>
                  <p className="text-primary font-semibold mb-3">Responsable Maintenance</p>
                  <p className="text-gray-600">
                    Thomas s'assure que toutes nos installations sont impeccables et fonctionnent parfaitement pour
                    votre confort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

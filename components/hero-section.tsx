import Link from "next/link"

export default function HeroSection() {
  return (
    <div className="relative bg-gray-900 text-white">
      {/* Image d'arrière-plan avec overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/imageMotel.jpg')",
          opacity: 0.4,
        }}
      />

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Bienvenue au Motel du Coin</h1>
          <p className="text-xl mb-8">
            Découvrez le confort et l'élégance dans notre établissement. Des chambres spacieuses, un service attentionné
            et une localisation idéale pour votre séjour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/accueil#chambres"
              className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-md transition duration-300 text-center"
            >
              Voir nos chambres
            </a>
            <Link
              href="/localisation"
              className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-6 rounded-md transition duration-300 text-center"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

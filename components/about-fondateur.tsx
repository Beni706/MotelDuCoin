export default function AboutFondateur() {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Notre Histoire</h2>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="rounded-full overflow-hidden w-64 h-64 mx-auto border-4 border-primary">
                <img
                  src="/placeholder.svg?height=300&width=300&text=Fondateur"
                  alt="Fondateur du Motel du Coin"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">Jean Dupont, Fondateur</h3>
              <p className="text-gray-700 mb-4">
                Passionné d'hospitalité depuis son plus jeune âge, Jean Dupont a fondé le Motel du Coin en 2005 avec une
                vision claire : créer un lieu où chaque voyageur se sentirait comme chez soi.
              </p>
              <p className="text-gray-700 mb-4">
                Après avoir travaillé pendant 15 ans dans l'industrie hôtelière internationale, Jean a décidé de revenir
                dans sa région natale pour y établir ce qui est aujourd'hui l'un des établissements les plus appréciés
                de la région.
              </p>
              <p className="text-gray-700">
                "Notre philosophie est simple : un accueil chaleureux, des chambres confortables et un service
                attentionné. Nous voulons que chaque client reparte avec l'envie de revenir."
              </p>
            </div>
          </div>
          
          {/* Section disponibilité */}
          <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-center">Notre Engagement</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Qualité</h4>
                <p className="text-gray-600">Des chambres impeccables et un service irréprochable.</p>
              </div>
              
              {/* Section disponibilité */}
              <div>
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Disponibilité</h4>
                <p className="text-gray-600">Une équipe à votre écoute 24h/24 et 7j/7.</p>
              </div>

              {/* Section satisfaction */}
              <div>
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Satisfaction</h4>
                <p className="text-gray-600">Votre bonheur est notre priorité absolue.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* La section de l'equipe est dans À-propos */}
    </section>
  )
}

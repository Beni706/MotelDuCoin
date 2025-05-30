import type { Metadata } from "next"
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import ChambreDetails from "@/components/chambre-details"
import ReserveForm from "@/components/reserve-form"

const API_URL = process.env.NEXT_PUBLIC_API_URL

// Générer les métadonnées dynamiquement
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  try {
    const chambre = await getChambre(params.id)
    return {
      title: `Chambre ${chambre.numero_chambre} - Motel du Coin`,
      description: `Réservez la chambre ${chambre.numero_chambre} de type ${chambre.type} au Motel du Coin.`,
    }
  } catch (error) {
    return {
      title: "Chambre - Motel du Coin",
      description: "Détails de la chambre au Motel du Coin",
    }
  }
}

// Fonction pour récupérer les détails d'une chambre
async function getChambre(id: string) {
  const res = await fetch(`${API_URL}/chambre/${id}`, {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Impossible de récupérer les détails de la chambre")
  }

  return res.json()
}

export default async function ChambrePage({ params }: { params: { id: string } }) {
  let chambre
  let error = null

  try {
    chambre = await getChambre(params.id)
  } catch (err) {
    error = "Impossible de charger les détails de la chambre"
    chambre = null
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {error ? (
          <div className="text-center py-12">
            <p className="text-red-500 text-xl">{error}</p>
            <a
              href="/accueil"
              className="mt-4 inline-block bg-primary hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded"
            >
              Retour à l'accueil
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ChambreDetails chambre={chambre} />
            <ReserveForm chambre={chambre} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

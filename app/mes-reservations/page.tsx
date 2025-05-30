import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import ReservationSearch from "../../components/reservation-search"

export default function MesReservationsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-gray-900 text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/mesReservation.jpg')",
              opacity: 0.4,
            }}
          />
          <div className="container mx-auto px-4 py-16 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mes Réservations</h1>
            <p className="text-xl max-w-2xl">Consultez vos réservations en cours et passées au Motel du Coin.</p>
          </div>
        </div>

        {/* Section de recherche de réservation */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Retrouver mes réservations</h2>
                <ReservationSearch />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

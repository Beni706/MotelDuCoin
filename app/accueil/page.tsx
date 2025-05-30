import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import ListDispo from "@/components/list-dispo"
import AboutFondateur from "@/components/about-fondateur"
import HeroSection from "@/components/hero-section"
import SearchBar from "@/components/search-bar"
import ScrollToSection from "@/components/scroll-to-section"

export default function Accueil() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToSection />
      <Header />
      <main className="flex-grow">
         {/* HeroSection pour trouver est situer les info du header */}
        <HeroSection />
        <div className="container mx-auto px-4">
          <SearchBar />
          <div className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center" id="chambres-title">
              Nos chambres disponibles
            </h2>
            <ListDispo />
          </div>
        </div>
        <AboutFondateur />
      </main>
      <Footer />
    </div>
  )
}

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ReservationsPanel from "@/components/admin/reservations-panel";
import FacturesPanel from "@/components/admin/factures-panel";
import StatsPanel from "@/components/admin/stats-panel";
import AdminHeader from "@/components/admin/admin-header";

export default function CaissierDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<
    "dashboard" | "reservations" | "factures"
  >("dashboard");

  // Vérifier l'authentification au chargement de la page
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
    }
  }, [router]);

  // Déconnexion pour le caissier
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminHeader onLogout={handleLogout} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">
          Tableau de bord Caissier(er)
        </h1>
        {/* Onglets */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`py-3 px-6 font-medium text-sm ${
              activeTab === "dashboard"
                ? "border-b-2 border-primary text-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Tableau de bord
          </button>
          <button
            onClick={() => setActiveTab("reservations")}
            className={`py-3 px-6 font-medium text-sm ${
              activeTab === "reservations"
                ? "border-b-2 border-primary text-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Réservations
          </button>
          <button
            onClick={() => setActiveTab("factures")}
            className={`py-3 px-6 font-medium text-sm ${
              activeTab === "factures"
                ? "border-b-2 border-primary text-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Factures
          </button>
        </div>
        {/* Contenu des onglets */}
        <div className="mt-6">
          {activeTab === "dashboard" ? (
            <StatsPanel />
          ) : activeTab === "reservations" ? (
            <ReservationsPanel />
          ) : (
            <FacturesPanel />
          )}
        </div>
      </main>
    </div>
  );
}

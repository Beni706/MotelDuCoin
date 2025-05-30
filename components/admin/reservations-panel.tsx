"use client";

import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { formatPrice, formatDate } from "@/lib/utils";
import ModifierDateModal from "./modifier-date-modal";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface Reservation {
  id_reservation: number;
  nom_client: string;
  prenom_client: string;
  telephone1: string;
  telephone2: string | null;
  email: string;
  date_arrivee: string;
  date_depart: string;
  date_reservation: string;
  prix_total: string;
  status: "EN_ATTENTE" | "ACCEPTER" | "REFUSER";
  id_chambre: number;
  chambre?: {
    numero_chambre: number;
  };
}

export default function ReservationsPanel() {
  const { toast } = useToast();

  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<
    "all" | "pending" | "accepted" | "rejected"
  >("all");
  const [search, setSearch] = useState("");

  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [currentReservation, setCurrentReservation] =
    useState<Reservation | null>(null);

  // Récupérer les réservations
  const fetchReservations = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(`${API_URL}/reservation`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des réservations");
      }

      const data = await response.json();

      // Récupérer les détails des chambres pour chaque réservation
      const reservationsWithChambre = await Promise.all(
        data.map(async (reservation: Reservation) => {
          try {
            const chambreResponse = await fetch(
              `${API_URL}/chambre/${reservation.id_chambre}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            if (chambreResponse.ok) {
              const chambre = await chambreResponse.json();
              return { ...reservation, chambre };
            }

            return reservation;
          } catch (error) {
            console.error(
              "Erreur lors de la récupération de la chambre:",
              error
            );
            return reservation;
          }
        })
      );

      setReservations(reservationsWithChambre);
    } catch (err) {
      console.error("Erreur:", err);
      setError("Impossible de charger les réservations");
      toast({
        title: "Erreur",
        description: "Impossible de charger les réservations",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, [toast]);

  // Accepter une réservation
  const handleAcceptReservation = async (id: number) => {
    try {
      const token = localStorage.getItem("adminToken");

      const reservation = reservations.find((r) => r.id_reservation === id);

      if (!reservation) {
        throw new Error("Réservation non trouvée");
      }

      const response = await fetch(`${API_URL}/reservation/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...reservation,
          status: "ACCEPTER",
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'acceptation de la réservation");
      }

      toast({
        title: "Succès",
        description: "Réservation acceptée avec succès",
      });

      // Rafraîchir la liste des réservations
      fetchReservations();
    } catch (err) {
      console.error("Erreur:", err);
      toast({
        title: "Erreur",
        description: "Impossible d'accepter la réservation",
        variant: "destructive",
      });
    }
  };

  // Refuser une réservation
  const handleRejectReservation = async (id: number) => {
    try {
      const token = localStorage.getItem("adminToken");

      const reservation = reservations.find((r) => r.id_reservation === id);

      if (!reservation) {
        throw new Error("Réservation non trouvée");
      }

      const response = await fetch(`${API_URL}/reservation/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...reservation,
          status: "REFUSER",
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors du refus de la réservation");
      }

      toast({
        title: "Succès",
        description: "Réservation refusée avec succès",
      });

      // Rafraîchir la liste des réservations
      fetchReservations();
    } catch (err) {
      console.error("Erreur:", err);
      toast({
        title: "Erreur",
        description: "Impossible de refuser la réservation",
        variant: "destructive",
      });
    }
  };

  // Ouvrir le modal pour modifier la date de départ
  const handleModifierDate = (reservation: Reservation) => {
    setCurrentReservation(reservation);
    setIsDateModalOpen(true);
  };

  // Fermer le modal et rafraîchir les données si nécessaire
  const handleCloseModal = (refresh = false) => {
    setIsDateModalOpen(false);
    if (refresh) {
      fetchReservations();
    }
  };

  // Créer une facture pour une réservation
  const handleCreateFacture = async (reservation: Reservation) => {
    try {
      const token = localStorage.getItem("adminToken");
      const adminId = localStorage.getItem("adminId");

      // Vérification des champs avant envoi
      const idReservation = Number(reservation.id_reservation);
      const montantTotal = reservation.prix_total;
      const idUtilisateur = Number(adminId);
      const dateCreation = new Date().toISOString();
      console.log({
        id_reservation: idReservation,
        montant_total: montantTotal,
        id_utilisateur: idUtilisateur,
        date_creation: dateCreation,
      });
      if (
        !idReservation ||
        !montantTotal ||
        !idUtilisateur ||
        !dateCreation ||
        isNaN(idReservation) ||
        isNaN(idUtilisateur)
      ) {
        toast({
          title: "Erreur",
          description:
            "Un des champs obligatoires est vide ou invalide (voir la console)",
          variant: "destructive",
        });
        return;
      }
      if (!adminId) {
        toast({
          title: "Erreur",
          description:
            "Impossible de trouver l'id de l'utilisateur connecté. Merci de vous reconnecter.",
          variant: "destructive",
        });
        return;
      }
      const response = await fetch(`${API_URL}/facture`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id_reservation: idReservation,
          montant_total: montantTotal,
          id_utilisateur: idUtilisateur,
          date_creation: dateCreation,
        }),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          "Erreur lors de la création de la facture : " + errorText
        );
      }
      toast({
        title: "Succès",
        description: "Facture créée avec succès",
      });
      // Optionnel: rafraîchir les réservations ou naviguer vers la facture
    } catch (err) {
      console.error("Erreur:", err);
      toast({
        title: "Erreur",
        description: "Impossible de créer la facture",
        variant: "destructive",
      });
    }
  };

  // Filtrer les réservations
  const filteredReservations = reservations.filter((reservation) => {
    const searchText = search.toLowerCase();
    const match =
      reservation.nom_client.toLowerCase().includes(searchText) ||
      reservation.prenom_client.toLowerCase().includes(searchText) ||
      reservation.email.toLowerCase().includes(searchText) ||
      reservation.telephone1.toLowerCase().includes(searchText) ||
      (reservation.telephone2?.toLowerCase().includes(searchText) ?? false) ||
      (reservation.chambre &&
        reservation.chambre.numero_chambre.toString().includes(searchText));
    if (filter === "all") return match;
    if (filter === "pending")
      return reservation.status === "EN_ATTENTE" && match;
    if (filter === "accepted")
      return reservation.status === "ACCEPTER" && match;
    if (filter === "rejected") return reservation.status === "REFUSER" && match;
    return match;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">{error}</p>
        <button
          onClick={() => fetchReservations()}
          className="mt-4 bg-primary hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded"
        >
          Réessayer
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gestion des réservations</h2>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher une réservation..."
          className="border border-gray-300 rounded px-3 py-2 w-64 focus:outline-none focus:ring focus:border-primary"
        />
        <div className="flex space-x-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1 rounded ${
              filter === "all"
                ? "bg-primary text-black"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Toutes
          </button>
          <button
            onClick={() => setFilter("pending")}
            className={`px-3 py-1 rounded ${
              filter === "pending"
                ? "bg-primary text-black"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            En attente
          </button>
          <button
            onClick={() => setFilter("accepted")}
            className={`px-3 py-1 rounded ${
              filter === "accepted"
                ? "bg-primary text-black"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Acceptées
          </button>
          <button
            onClick={() => setFilter("rejected")}
            className={`px-3 py-1 rounded ${
              filter === "rejected"
                ? "bg-primary text-black"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Refusées
          </button>
        </div>
      </div>
      {filteredReservations.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-500">Aucune réservation trouvée.</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Chambre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dates
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prix
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredReservations.map((reservation) => (
                <tr key={reservation.id_reservation}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {reservation.nom_client} {reservation.prenom_client}
                    </div>
                    <div className="text-sm text-gray-500">
                      {reservation.email}
                    </div>
                    <div className="text-sm text-gray-500">
                      {reservation.telephone1}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {reservation.chambre
                        ? `Chambre ${reservation.chambre.numero_chambre}`
                        : `ID: ${reservation.id_chambre}`}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <div>Arrivée: {formatDate(reservation.date_arrivee)}</div>
                      <div>Départ: {formatDate(reservation.date_depart)}</div>
                      <div className="text-xs text-gray-500">
                        Réservé le: {formatDate(reservation.date_reservation)}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {formatPrice(Number(reservation.prix_total))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        reservation.status === "EN_ATTENTE"
                          ? "bg-yellow-100 text-yellow-800"
                          : reservation.status === "ACCEPTER"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {reservation.status === "EN_ATTENTE"
                        ? "En attente"
                        : reservation.status === "ACCEPTER"
                        ? "Acceptée"
                        : "Refusée"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {reservation.status === "EN_ATTENTE" && (
                      <>
                        <button
                          onClick={() =>
                            handleAcceptReservation(reservation.id_reservation)
                          }
                          className="text-green-600 hover:text-green-900 mr-2"
                        >
                          Accepter
                        </button>
                        <button
                          onClick={() =>
                            handleRejectReservation(reservation.id_reservation)
                          }
                          className="text-red-600 hover:text-red-900 mr-2"
                        >
                          Refuser
                        </button>
                      </>
                    )}
                    {reservation.status === "ACCEPTER" && (
                      <>
                        <button
                          onClick={() => handleModifierDate(reservation)}
                          className="text-indigo-600 hover:text-indigo-900 mr-4"
                        >
                          Modifier date
                        </button>
                        <button
                          onClick={() => handleCreateFacture(reservation)}
                          className="text-blue-600 hover:text-blue-900"
                          title="Créer facture"
                        >
                          <span className="inline-block align-middle ">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3 2.5C3 2.22386 3.22386 2 3.5 2H9.08579C9.21839 2 9.34557 2.05268 9.43934 2.14645L11.8536 4.56066C11.9473 4.65443 12 4.78161 12 4.91421V12.5C12 12.7761 11.7761 13 11.5 13H3.5C3.22386 13 3 12.7761 3 12.5V2.5ZM3.5 1C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V4.91421C13 4.51639 12.842 4.13486 12.5607 3.85355L10.1464 1.43934C9.86514 1.15804 9.48361 1 9.08579 1H3.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5H7.5C7.77614 5 8 4.77614 8 4.5C8 4.22386 7.77614 4 7.5 4H4.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H4.5ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H10.5C10.7761 11 11 10.7761 11 10.5C11 10.2239 10.7761 10 10.5 10H4.5Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* Modal pour modifier la date de départ */}
      <ModifierDateModal
        isOpen={isDateModalOpen}
        onClose={handleCloseModal}
        reservation={currentReservation}
      />
    </div>
  );
}

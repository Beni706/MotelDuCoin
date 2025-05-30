"use client";

import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { formatPrice, formatDate } from "@/lib/utils";
import FactureModal from "./facture-modal";
import { Printer, FileText, Eye } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface Facture {
  id_facture: number;
  date_creation: string;
  montant_total: string;
  id_reservation: number;
  id_utilisateur: number;
  reservation: {
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
    status: string;
    chambre: {
      numero_chambre: number;
      type: string;
      capacite: string;
    };
  };
  utilisateur: {
    id_utilisateur: number;
    nom: string;
    prenom: string;
    email: string;
    role: string;
  };
}

export default function FacturesPanel() {
  const { toast } = useToast();

  const [factures, setFactures] = useState<Facture[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFacture, setCurrentFacture] = useState<Facture | null>(null);

  const [search, setSearch] = useState("");

  // Récupérer les factures
  const fetchFactures = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(`${API_URL}/facture`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des factures");
      }

      const data = await response.json();
      setFactures(data);
    } catch (err) {
      console.error("Erreur:", err);
      setError("Impossible de charger les factures");
      toast({
        title: "Erreur",
        description: "Impossible de charger les factures",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFactures();
  }, [toast]);

  // Voir une facture
  const handleViewFacture = (facture: Facture) => {
    setCurrentFacture(facture);
    setIsModalOpen(true);
  };

  // Imprimer une facture
  const handlePrintFacture = (facture: Facture) => {
    // Créer une nouvelle fenêtre pour l'impression
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const factureHTML = generateFactureHTML(facture);

    printWindow.document.write(factureHTML);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  // Générer le HTML de la facture pour l'impression
  const generateFactureHTML = (facture: Facture) => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Facture #${facture.id_facture}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .header { text-align: center; margin-bottom: 30px; }
            .company-info { margin-bottom: 30px; }
            .client-info { margin-bottom: 30px; }
            .reservation-details { margin-bottom: 30px; }
            .total { font-size: 18px; font-weight: bold; text-align: right; margin-top: 20px; }
            .footer { margin-top: 50px; text-align: center; font-size: 12px; color: #666; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
            .no-print { display: none; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>FACTURE</h1>
            <h2>Motel du Coin</h2>
            <p>Route Nationale, Ntoum - Estuaire, Gabon</p>
            <p>Tél: +241 77 12 34 56 | Email: contact@motelducoin.com</p>
          </div>

          <div style="display: flex; justify-content: space-between; margin-bottom: 30px;">
            <div class="company-info">
              <h3>Informations de l'établissement</h3>
              <p><strong>Motel du Coin</strong></p>
              <p>Route Nationale</p>
              <p>Ntoum, Estuaire</p>
              <p>Gabon</p>
            </div>

            <div class="client-info">
              <h3>Informations client</h3>
              <p><strong>${facture.reservation.nom_client} ${
      facture.reservation.prenom_client
    }</strong></p>
              <p>Email: ${facture.reservation.email}</p>
              <p>Tél: ${facture.reservation.telephone1}</p>
              ${
                facture.reservation.telephone2
                  ? `<p>Tél 2: ${facture.reservation.telephone2}</p>`
                  : ""
              }
            </div>
          </div>

          <div style="margin-bottom: 30px;">
            <p><strong>Facture N°:</strong> ${facture.id_facture}</p>
            <p><strong>Date de création:</strong> ${formatDate(
              facture.date_creation
            )}</p>
            <p><strong>Créée par:</strong> ${facture.utilisateur.prenom} ${
      facture.utilisateur.nom
    }</p>
          </div>

          <div class="reservation-details">
            <h3>Détails de la réservation</h3>
            <table>
              <tr>
                <th>Description</th>
                <th>Détails</th>
              </tr>
              <tr>
                <td>Numéro de réservation</td>
                <td>#${facture.reservation.id_reservation}</td>
              </tr>
              <tr>
                <td>Chambre</td>
                <td>N°${facture.reservation.chambre.numero_chambre} - ${
      facture.reservation.chambre.type
    }</td>
              </tr>
              <tr>
                <td>Capacité</td>
                <td>${facture.reservation.chambre.capacite}</td>
              </tr>
              <tr>
                <td>Date d'arrivée</td>
                <td>${formatDate(facture.reservation.date_arrivee)}</td>
              </tr>
              <tr>
                <td>Date de départ</td>
                <td>${formatDate(facture.reservation.date_depart)}</td>
              </tr>
              <tr>
                <td>Date de réservation</td>
                <td>${formatDate(facture.reservation.date_reservation)}</td>
              </tr>
              <tr>
                <td>Statut</td>
                <td>${
                  facture.reservation.status === "ACCEPTER"
                    ? "Confirmée"
                    : facture.reservation.status
                }</td>
              </tr>
            </table>
          </div>

          <div class="total">
            <p>MONTANT TOTAL: ${formatPrice(
              Number(facture.reservation.prix_total)
            )}</p>
          </div>

          <div class="footer">
            <p>Merci de votre confiance !</p>
            <p>Cette facture a été générée automatiquement le ${formatDate(
              new Date().toISOString()
            )}</p>
          </div>
        </body>
      </html>
    `;
  };

  // Supprimer une facture
  const handleDeleteFacture = async (id: number) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cette facture ?")) {
      return;
    }

    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(`${API_URL}/facture/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la suppression de la facture");
      }

      toast({
        title: "Succès",
        description: "Facture supprimée avec succès",
      });

      // Rafraîchir la liste des factures
      fetchFactures();
    } catch (err) {
      console.error("Erreur:", err);
      toast({
        title: "Erreur",
        description: "Impossible de supprimer la facture",
        variant: "destructive",
      });
    }
  };

  // Fermer le modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentFacture(null);
  };

  // Filtrer les factures selon la recherche
  const filteredFactures = factures.filter((facture) => {
    const searchText = search.toLowerCase();
    return (
      facture.id_facture.toString().includes(searchText) ||
      facture.reservation.nom_client.toLowerCase().includes(searchText) ||
      facture.reservation.prenom_client.toLowerCase().includes(searchText) ||
      facture.reservation.email.toLowerCase().includes(searchText) ||
      facture.reservation.id_reservation.toString().includes(searchText) ||
      facture.utilisateur.nom.toLowerCase().includes(searchText) ||
      facture.utilisateur.prenom.toLowerCase().includes(searchText)
    );
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
          onClick={() => fetchFactures()}
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
        <h2 className="text-2xl font-bold">Gestion des factures</h2>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher une facture, client, email..."
          className="border border-gray-300 rounded px-3 py-2 w-64 focus:outline-none focus:ring focus:border-primary"
        />
      </div>

      {factures.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-gray-500">Aucune facture trouvée.</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Facture
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Réservation
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Montant
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Créée par
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredFactures.map((facture) => (
                <tr key={facture.id_facture}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      #{facture.id_facture}
                    </div>
                    <div className="text-sm text-gray-500">
                      {formatDate(facture.date_creation)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      {facture.reservation ? (
                        `${facture.reservation.nom_client} ${facture.reservation.prenom_client}`
                      ) : (
                        <span className="text-red-500">
                          Réservation introuvable
                        </span>
                      )}
                    </div>
                    <div>{facture.reservation?.email || ""}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      #{facture.reservation.id_reservation}
                    </div>
                    <div className="text-sm text-gray-500">
                      Chambre {facture.reservation.chambre.numero_chambre}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {formatPrice(Number(facture.reservation.prix_total))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {facture.utilisateur.prenom} {facture.utilisateur.nom}
                    </div>
                    <div className="text-sm text-gray-500">
                      {facture.utilisateur.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleViewFacture(facture)}
                      className="text-indigo-600 hover:text-indigo-900 mr-3"
                      title="Voir la facture"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handlePrintFacture(facture)}
                      className="text-green-600 hover:text-green-900 mr-3"
                      title="Imprimer la facture"
                    >
                      <Printer className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteFacture(facture.id_facture)}
                      className="text-red-600 hover:text-red-900"
                      title="Supprimer la facture"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal pour voir la facture */}
      <FactureModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        facture={currentFacture}
      />
    </div>
  );
}

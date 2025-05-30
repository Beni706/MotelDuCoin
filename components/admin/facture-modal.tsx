"use client";

import { formatPrice, formatDate } from "@/lib/utils";
import { Printer, X } from "lucide-react";

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

interface FactureModalProps {
  isOpen: boolean;
  onClose: () => void;
  facture: Facture | null;
}

export default function FactureModal({
  isOpen,
  onClose,
  facture,
}: FactureModalProps) {
  if (!isOpen || !facture) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto py-8">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto my-auto">
        {" "}
        {/* Réduction de la largeur max */}
        {/* Header avec boutons */}
        <div className="flex justify-between items-center p-3 border-b print:hidden">
          {" "}
          {/* Padding encore réduit */}
          <h2 className="text-xl font-bold">
            Facture #{facture.id_facture}
          </h2>{" "}
          {/* Taille de police réduite */}
          <div className="flex space-x-2">
            <button
              onClick={handlePrint}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-1.5 px-3 rounded flex items-center text-sm" // Padding et taille de police réduits
            >
              <Printer className="h-4 w-4 mr-2" />
              Imprimer
            </button>
            <button
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-1.5 px-3 rounded flex items-center text-sm" // Padding et taille de police réduits
            >
              <X className="h-4 w-4 mr-2" />
              Fermer
            </button>
          </div>
        </div>
        {/* Contenu de la facture */}
        <div className="p-4" id="facture-content">
          {" "}
          {/* Padding encore réduit */}
          {/* En-tête de la facture */}
          <div className="text-center mb-4">
            {" "}
            {/* Marge encore réduite */}
            <h1 className="text-xl font-bold mb-1">FACTURE</h1>{" "}
            {/* Taille de police et marge réduites */}
            <h2 className="text-lg font-semibold text-primary mb-1">
              Motel du Coin
            </h2>{" "}
            {/* Taille de police et marge réduites */}
            <p className="text-gray-600 text-xs">
              Route Nationale, Ntoum - Estuaire, Gabon
            </p>{" "}
            {/* Taille de police réduite */}
            <p className="text-gray-600 text-xs">
              Tél: +241 77 12 34 56 | Email: contact@motelducoin.com
            </p>{" "}
            {/* Taille de police réduite */}
          </div>
          {/* Informations facture et client */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {" "}
            {/* Gap et marge encore réduits */}
            <div>
              <h3 className="text-sm font-semibold mb-1">
                Informations de l'établissement
              </h3>{" "}
              {/* Taille de police et marge réduites */}
              <div className="bg-gray-50 p-2 rounded-lg text-xs">
                {" "}
                {/* Padding et taille de police réduits */}
                <p className="font-semibold">Motel du Coin</p>
                <p>Route Nationale</p>
                <p>Ntoum, Estuaire</p>
                <p>Gabon</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-1">
                Informations client
              </h3>{" "}
              {/* Taille de police et marge réduites */}
              <div className="bg-gray-50 p-2 rounded-lg text-xs">
                {" "}
                {/* Padding et taille de police réduits */}
                <p className="font-semibold">
                  {facture.reservation.nom_client}{" "}
                  {facture.reservation.prenom_client}
                </p>
                <p>Email: {facture.reservation.email}</p>
                <p>Tél: {facture.reservation.telephone1}</p>
                {facture.reservation.telephone2 && (
                  <p>Tél 2: {facture.reservation.telephone2}</p>
                )}
              </div>
            </div>
          </div>
          {/* Détails de la facture */}
          <div className="mb-4">
            {" "}
            {/* Marge encore réduite */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
              {" "}
              {/* Gap et taille de police encore réduits */}
              <div>
                <p className="text-xs text-gray-600">Facture N°</p>
                <p className="font-semibold">#{facture.id_facture}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Date de création</p>
                <p className="font-semibold ">
                  {formatDate(facture.date_creation)}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Créée par</p>
                <p className="font-semibold">
                  {facture.utilisateur.prenom} {facture.utilisateur.nom}
                </p>
              </div>
            </div>
          </div>
          {/* Détails de la réservation */}
          <div className="mb-4">
            {" "}
            {/* Marge encore réduite */}
            <h3 className="text-sm font-semibold mb-1">
              Détails de la réservation
            </h3>{" "}
            {/* Taille de police et marge réduites */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-xs">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-2 py-1 text-left">
                      Description
                    </th>
                    <th className="border border-gray-300 px-2 py-1 text-left">
                      Détails
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">
                      Numéro de réservation
                    </td>
                    <td className="border border-gray-300 px-2 py-1">
                      #{facture.reservation.id_reservation}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">
                      Chambre
                    </td>
                    <td className="border border-gray-300 px-2 py-1">
                      N°{facture.reservation.chambre.numero_chambre} -{" "}
                      {facture.reservation.chambre.type}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">
                      Capacité
                    </td>
                    <td className="border border-gray-300 px-2 py-1">
                      {facture.reservation.chambre.capacite}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">
                      Date d'arrivée
                    </td>
                    <td className="border border-gray-300 px-2 py-1">
                      {formatDate(facture.reservation.date_arrivee)}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">
                      Date de départ
                    </td>
                    <td className="border border-gray-300 px-2 py-1">
                      {formatDate(facture.reservation.date_depart)}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">
                      Date de réservation
                    </td>
                    <td className="border border-gray-300 px-2 py-1">
                      {formatDate(facture.reservation.date_reservation)}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">
                      Statut
                    </td>
                    <td className="border border-gray-300 px-2 py-1">
                      {facture.reservation.status === "ACCEPTER"
                        ? "Confirmée"
                        : facture.reservation.status}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Total */}
          <div className="text-right mb-4">
            {" "}
            {/* Marge encore réduite */}
            <div className="inline-block bg-gray-50 p-3 rounded-lg">
              {" "}
              {/* Padding encore réduit */}
              <p className="text-lg font-bold">
                MONTANT TOTAL: {formatPrice(Number(facture.montant_total))}
              </p>{" "}
              {/* Taille de police réduite */}
            </div>
          </div>
          {/* Footer */}
          <div className="text-center text-gray-600 border-t pt-3 text-xs">
            {" "}
            {/* Padding et taille de police encore réduits */}
            <p className="font-semibold">Merci de votre confiance !</p>
            <p className="text-xs mt-1">
              {" "}
              {/* Taille de police et marge réduites */}
              Cette facture a été générée automatiquement le{" "}
              {formatDate(new Date().toISOString())}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

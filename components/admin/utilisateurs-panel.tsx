"use client";

import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface Utilisateur {
  id_utilisateur: number;
  nom: string;
  prenom: string;
  email: string;
  password?: string;
  role: string;
}

export default function UtilisateursPanel() {
  const { toast } = useToast();
  const [utilisateurs, setUtilisateurs] = useState<Utilisateur[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState<Utilisateur | null>(null);
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    role: "caissiere",
  });
  const [search, setSearch] = useState("");

  // Récupérer les utilisateurs
  const fetchUtilisateurs = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("adminToken");
      const res = await fetch("/api/utilisateur", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok)
        throw new Error("Erreur lors du chargement des utilisateurs");
      setUtilisateurs(await res.json());
    } catch (err) {
      setError("Impossible de charger les utilisateurs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUtilisateurs();
  }, []);

  // Ouvrir le modal pour ajouter/modifier
  const openModal = (user?: Utilisateur) => {
    if (user) {
      setEditUser(user);
      setForm({
        nom: user.nom,
        prenom: user.prenom,
        email: user.email,
        password: "",
        role: "caissiere",
      });
    } else {
      setEditUser(null);
      setForm({
        nom: "",
        prenom: "",
        email: "",
        password: "",
        role: "caissiere",
      });
    }
    setShowModal(true);
  };

  // Fermer le modal
  const closeModal = () => {
    setShowModal(false);
    setEditUser(null);
    setForm({
      nom: "",
      prenom: "",
      email: "",
      password: "",
      role: "caissiere",
    });
  };

  // Gérer le changement de champ
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Ajouter ou modifier un utilisateur
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");
    try {
      const method = editUser ? "PUT" : "POST";
      const url = editUser
        ? `/api/utilisateur/${editUser.id_utilisateur}`
        : "/api/utilisateur";
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Erreur lors de l'enregistrement");
      toast({ title: editUser ? "Utilisateur modifié" : "Utilisateur ajouté" });
      closeModal();
      fetchUtilisateurs();
    } catch (err) {
      toast({
        title: "Erreur",
        description: "Impossible d'enregistrer l'utilisateur",
        variant: "destructive",
      });
    }
  };

  // Supprimer un utilisateur
  const handleDelete = async (id: number) => {
    if (!confirm("Supprimer cet utilisateur ?")) return;
    const token = localStorage.getItem("adminToken");
    try {
      const res = await fetch(`/api/utilisateur/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error();
      toast({ title: "Utilisateur supprimé" });
      fetchUtilisateurs();
    } catch (err) {
      toast({
        title: "Erreur",
        description: "Impossible de supprimer",
        variant: "destructive",
      });
    }
  };

  // Filtrer les utilisateurs selon la recherche
  const filteredUtilisateurs = utilisateurs.filter((u) => {
    const searchText = search.toLowerCase();
    return (
      u.nom.toLowerCase().includes(searchText) ||
      u.prenom.toLowerCase().includes(searchText) ||
      u.email.toLowerCase().includes(searchText)
    );
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gestion des utilisateurs</h2>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher un utilisateur..."
          className="border border-gray-300 rounded px-3 py-2 w-64 focus:outline-none focus:ring focus:border-primary mr-4"
        />
        <button
          onClick={() => openModal()}
          className="bg-primary text-black font-bold px-4 py-2 rounded hover:bg-yellow-400"
        >
          Ajouter un utilisateur
        </button>
      </div>
      {loading ? (
        <div className="text-center py-12">Chargement...</div>
      ) : error ? (
        <div className="text-center text-red-500 py-12">{error}</div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nom
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prénom
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rôle
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUtilisateurs.map((u) => (
                <tr key={u.id_utilisateur}>
                  <td className="px-6 py-4 whitespace-nowrap">{u.nom}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{u.prenom}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{u.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{u.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => openModal(u)}
                      className="text-indigo-600 hover:text-indigo-900 mr-3"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleDelete(u.id_utilisateur)}
                      className="text-red-600 hover:text-red-900"
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
      {/* Modal d'ajout/modification */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">
              {editUser ? "Modifier" : "Ajouter"} un utilisateur
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nom</label>
                <input
                  name="nom"
                  value={form.nom}
                  onChange={handleChange}
                  required
                  className="w-full border rounded p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Prénom</label>
                <input
                  name="prenom"
                  value={form.prenom}
                  onChange={handleChange}
                  required
                  className="w-full border rounded p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Mot de passe{" "}
                  {editUser && (
                    <span className="text-xs text-gray-400">
                      (laisser vide pour ne pas changer)
                    </span>
                  )}
                </label>
                <input
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  autoComplete="new-password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Rôle</label>
                <input
                  name="role"
                  value="caissiere"
                  disabled
                  className="w-full border rounded p-2 bg-gray-100 text-gray-500"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-primary text-black font-bold hover:bg-yellow-400"
                >
                  {editUser ? "Enregistrer" : "Ajouter"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

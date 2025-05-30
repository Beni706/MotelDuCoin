"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export default function AdminLogin() {
  const router = useRouter();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Gérer les changements dans le formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Effacer l'erreur pour ce champ s'il est rempli
    if (value.trim() && errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Valider le formulaire
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) newErrors.email = "L'email est requis";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email invalide";

    if (!formData.password.trim())
      newErrors.password = "Le mot de passe est requis";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Soumettre le formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/utilisateur/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Réponse login:", data);

      if (!response.ok) {
        throw new Error(data.message || "Erreur lors de la connexion");
      }

      // Stocker le token et l'ID de l'utilisateur dans le localStorage
      localStorage.setItem("adminToken", data.token);
      if (data.utilisateur && data.utilisateur.id_utilisateur) {
        localStorage.setItem("adminId", data.utilisateur.id_utilisateur);
        localStorage.setItem(
          "adminName",
          data.utilisateur.prenom + " " + data.utilisateur.nom
        );
        // Redirection selon le rôle
        if (data.utilisateur.role === "administrateur") {
          router.push("/admin/dashboard");
        } else if (data.utilisateur.role === "caissiere") {
          localStorage.setItem(
            "caissierName",
            data.utilisateur.prenom + " " + data.utilisateur.nom
          );
          router.push("/caissier/dashboard");
        } else {
          toast({
            title: "Erreur",
            description: "Rôle utilisateur inconnu.",
            variant: "destructive",
          });
          setLoading(false);
          return;
        }
      } else {
        toast({
          title: "Erreur",
          description:
            "Impossible de récupérer l'id utilisateur depuis la réponse de l'API.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      // Connexion réussie
      toast({
        title: "Connexion réussie",
        description: "Vous êtes maintenant connecté.",
      });
    } catch (error) {
      console.error("Erreur:", error);
      toast({
        title: "Erreur de connexion",
        description:
          error instanceof Error ? error.message : "Identifiants incorrects",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Administration</h1>
          <p className="text-gray-600 mt-2">Motel du Coin</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Votre email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Votre mot de passe"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-4 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Connexion en cours..." : "Se connecter"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <a
            href="/accueil"
            className="text-sm text-gray-600 hover:text-primary"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
}

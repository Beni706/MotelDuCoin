import type { NextRequest } from "next/server"
import jwt from "jsonwebtoken"

// Middleware pour vérifier l'authentification
export async function verifyJWT(request: NextRequest | Request): Promise<boolean> {
  try {
    // Récupérer le token d'authentification
    const authHeader = request.headers.get("Authorization")

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return false
    }

    const token = authHeader.split(" ")[1]

    if (!token) {
      return false
    }

    // Vérifier le token
    const JWT_SECRET = process.env.JWT_SECRET

    if (!JWT_SECRET) {
      console.error("JWT_SECRET non défini")
      return false
    }

    // Vérifier et décoder le token
    const decoded = jwt.verify(token, JWT_SECRET)

    if (!decoded) {
      return false
    }

    return true
  } catch (error) {
    console.error("Erreur d'authentification:", error)
    return false
  }
}

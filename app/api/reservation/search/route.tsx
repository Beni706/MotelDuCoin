import { type NextRequest, NextResponse } from "next/server"
import {PrismaClient} from "@/generated/prisma"


const prisma = new PrismaClient()


export async function GET(request: NextRequest) {
  try {
    // Récupérer les paramètres de recherche
    const searchParams = request.nextUrl.searchParams
    const email = searchParams.get("email")
    const telephone = searchParams.get("telephone")

    // Vérifier qu'au moins un paramètre est fourni
    if (!email && !telephone) {
      return NextResponse.json({ error: "Veuillez fournir un email ou un numéro de téléphone" }, { status: 400 })
    }

    // Construire la requête Prisma avec les conditions de recherche
    const reservations = await prisma.reservation.findMany({
      where: {
        OR: [
          ...(email ? [{ email: email }] : []),
          ...(telephone ? [{ telephone1: telephone }, { telephone2: telephone }] : []),
        ],
      },
      orderBy: {
        date_reservation: "desc",
      },
      // Inclure les données de la chambre associée à chaque réservation
      include: {
        chambre: {
          select: {
            numero_chambre: true,
            type: true,
            capacite: true,
          },
        },
      },
    })

    return NextResponse.json(reservations)
  } catch (error) {
    console.error("Erreur lors de la recherche des réservations:", error)
    return NextResponse.json({ error: "Erreur lors de la recherche des réservations" }, { status: 500 })
  }
}

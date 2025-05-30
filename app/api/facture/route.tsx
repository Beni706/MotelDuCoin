import { PrismaClient } from "../../generated/prisma";
import { verifyJWT } from "lib/auth-middleware";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// Recuperer les factures
export async function GET(request: Request) {
    try {
       const factures = await prisma.facture.findMany({});
        return NextResponse.json(factures);

    } catch (error) {
        console.error("Erreeur du serveur:", error);
        return NextResponse.json({ error: "Erreur du serveur" }, { status: 500 });
    };
};

// Ajouter une facture
export async function POST(request: Request) {

    // Verification de l'authentification
    const isAuthorized = await verifyJWT(request)
    if (!isAuthorized) {
        return NextResponse.json({ error: "Accès non autorisé " }, { status: 401 });
    }
    try {
        const { date_creation, montant_total, id_reservation, id_utilisateur } = await request.json();
    
        // Verification des champs
        if (!date_creation || !montant_total || !id_reservation || !id_utilisateur) {
            return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
        };
        
        const factures = await prisma.facture.create({
            data: {
                date_creation, 
                montant_total, 
                id_reservation: parseInt(id_reservation, 10),
                id_utilisateur: parseInt(id_utilisateur, 10),
            },
        });

        return NextResponse.json({ message: "facture créé avec succès", factures }, { status: 201 });

    } catch (error) {
        console.error("Erreur du serveur:", error);
        return NextResponse.json({ error: "Erreur du serveur" }, { status: 500 });
    };
};
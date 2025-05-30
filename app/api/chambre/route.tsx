import { PrismaClient } from "../../generated/prisma";
import { verifyJWT } from "lib/auth-middleware";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// Recuperer les chambres
export async function GET(request: Request) {
    try {
       const chambres = await prisma.chambre.findMany({
        include: {
            reservations: true,
        },
       });
        return NextResponse.json(chambres);

    } catch (error) {
        console.error("Erreeur du serveur:", error);
        return NextResponse.json({ error: "Erreur du serveur" }, { status: 500 });
    };
};

// Ajouter une chambre
export async function POST(request: Request) {

    // Verification de l'authentification
    const isAuthorized = await verifyJWT(request)
    if (!isAuthorized) {
        return NextResponse.json({ error: "Accès non autorisé " }, { status: 401 });
    }
    try {
        const { numero_chambre, prix_nuit, prix_jour, type, capacite, photo } = await request.json();
    
        // Verification des champs
        if (!numero_chambre || !prix_nuit || !prix_jour || !type || !capacite || !photo) {
            return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
        };
        
        const chambres = await prisma.chambre.create({
            data: {
                numero_chambre,
                prix_nuit: parseInt(prix_nuit, 10),
                prix_jour: parseInt(prix_jour, 10),
                type,
                capacite,
                photo,
            },
        });

        return NextResponse.json({ message: "Chambre ajoutée avec succès", chambres }, { status: 201 });

    } catch (error) {
        console.error("Erreur du serveur:", error);
        return NextResponse.json({ error: "Erreur du serveur" }, { status: 500 });
    };
};
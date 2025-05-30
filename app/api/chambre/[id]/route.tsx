import { PrismaClient } from "../../../generated/prisma";
import { verifyJWT } from "lib/auth-middleware";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// Recuperer une chambre par son id
export async function GET(request: Request, { params }: { params: { id: string } } ) {
    try {
        const id = parseInt(params.id, 10);

        const chambre =await prisma.chambre.findUnique({
            where: {
                id_chambre: id
            },
            include: {
                reservations: true,
            },
        });
        return NextResponse.json(chambre, { status: 200 });
        
    } catch (error) {
        console.log("Erreur serveur", error);
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    };
};


// modifier une reservation
export async function PUT(request:Request, { params }: { params: { id: string } }) {

    // Verification de l'authentification
    const isAuthorized = await verifyJWT(request);
    if(!isAuthorized) {
        return NextResponse.json({ message: "Accès non autorisé" }, { status: 401 });
    }

    try {
        const id = parseInt(params.id, 10);
        const { numero_chambre, prix_nuit, prix_jour, type, capacite, photo } = await request.json();

        const chambre = await prisma.chambre.update({
            where: {
                id_chambre: id,
            },
            data: {
                numero_chambre,
                prix_nuit: parseInt(prix_nuit, 10),
                prix_jour: parseInt(prix_jour, 10),
                type,
                capacite,
                photo,
            },
        });

        return NextResponse.json({ message: "Chambre modifiée avec succès", chambre }, { status: 200 });
     
    } catch (error) {
        console.log( "Erreur serveur", error)
        return NextResponse.json({message: "Erreur serveur"}, {status: 500  })
    };
};

// supprimer une reservation
export async function DELETE(request: Request, { params }: { params: { id: string } }) {

     // Verification de l'authentification
    const isAuthorized = await verifyJWT(request);
    if(!isAuthorized) {
        return NextResponse.json({ message: "Accès non autorisé" }, { status: 401 });
    }

    try {
        const id = parseInt(params.id, 10);

        await prisma.chambre.delete({
            where: {
                id_chambre: id,
            },
        });
        return NextResponse.json({ message: "Chambre supprimée avec succès" }, { status: 200 });

    } catch (error) {
        console.log("Erreur serveur", error);
        return NextResponse.json({message: "Erreur serveur"}, {status: 500})
    }
}
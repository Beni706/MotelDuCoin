import { PrismaClient } from "../../../generated/prisma";
import { verifyJWT } from "lib/auth-middleware";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// Recuperer une facture par son id
export async function GET(request: Request, { params }: { params: { id: string } } ) {
    try {
        const id = parseInt(params.id, 10);

        const facture =await prisma.facture.findUnique({
            where: {
                id_facture: id
            },
        });
        return NextResponse.json(facture, { status: 200 });
        
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
    };

    try {
        const id = parseInt(params.id, 10);
        const { date_creation, montant_total, id_reservation, id_utilisateur } = await request.json();

        const facture = await prisma.facture.update({
            where: {
                id_facture: id,
            },
            data: {
                date_creation, 
                montant_total, 
                id_reservation: parseInt(id_reservation, 10),
                id_utilisateur: parseInt(id_utilisateur, 10),
            },
        });

        return NextResponse.json({ message: "facture modifiée avec succès", facture }, { status: 200 });
     
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
    };

    try {
        const id = parseInt(params.id, 10);

        await prisma.facture.delete({
            where: {
                id_facture: id,
            },
        });
        return NextResponse.json({ message: "facture supprimée avec succès" }, { status: 200 });

    } catch (error) {
        console.log("Erreur serveur", error);
        return NextResponse.json({message: "Erreur serveur"}, {status: 500})
    };
};
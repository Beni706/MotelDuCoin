import { PrismaClient } from "../../generated/prisma";
import { verifyJWT } from "lib/auth-middleware";

import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// Recuperer les réservations
export async function GET(request: Request) {

    // Verification de l'authentification
    const isAuthorized = await verifyJWT(request)
    if (!isAuthorized) {
        return NextResponse.json({message: "Accès non autorisé"}, {status: 401})
    };

    try {
       const reservations = await prisma.reservation.findMany();
        return NextResponse.json(reservations);

    } catch (error) {
        console.error("Erreeur du serveur:", error);
        return NextResponse.json({ error: "Erreur du serveur" }, { status: 500 });
    };
};


// reserver une chambre
export async function POST(request: Request) {

    try {
        const { 
            nom_client,
            prenom_client,
            telephone1,
            telephone2,
            email,
            date_arrivee,
            date_depart,
            date_reservation,
            prix_total,
            status,
            id_chambre
         } = await request.json();

         // Verification de champs
         if (!nom_client || !prenom_client || !telephone1 || !email || !date_arrivee || !date_depart || !date_reservation || !prix_total || !id_chambre) {
            return NextResponse.json({ error: "Veuillez remplir tous les champs" }, { status: 400 });
         };

         const reservation = await prisma.reservation.create({
            data: {
                nom_client,
                prenom_client,
                telephone1,
                telephone2,
                email,
                date_arrivee,
                date_depart,
                date_reservation,
                prix_total,
                status,
                id_chambre: parseInt(id_chambre, 10)
            },
         })
         return NextResponse.json({ message: "reservation effectuer avec succès" , reservation}, { status: 201 });


    } catch (error) {
        console.error("Erreur du serveur:", error);
        return NextResponse.json({ error: "Erreur du serveur" }, { status: 500 });
    }    
}
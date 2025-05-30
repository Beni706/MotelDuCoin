import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// Recuperer une reservation par son id
export async function GET(request: Request, { params }: { params: { id: string } } ) {
    try {
        const id = parseInt(params.id);

        const reservation =await prisma.reservation.findUnique({
            where: {
                id_reservation: id
            },
            include: {
                facture: true, // Inclure les informations de la facture associée
            },
        });
        return NextResponse.json(reservation, { status: 200 });
        
    } catch (error) {
        console.log("Erreur serveur", error);
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    };
};


// modifier une reservation
export async function PUT(request:Request, { params }: { params: { id: string } }) {
    try {
        const id = parseInt(params.id);
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

        const reservation = await prisma.reservation.update({
            where: {
                id_reservation: id,
            },
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
            id_chambre
            },
        });

        return NextResponse.json({ message: "Reservation modifiée avec succès", reservation }, { status: 200 });
     
    } catch (error) {
        console.log( "Erreur serveur", error)
        return NextResponse.json({message: "Erreur serveur"}, {status: 500  })
    };
};


// Supprimer une reservation
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        const id = parseInt(params.id);

        await prisma.reservation.delete({
            where: {
                id_reservation: id,
            },
        });

        return NextResponse.json({ message: "Reservation supprimée avec succès" }, { status: 200 });

    } catch (error) {
        console.log("Erreur serveur", error);
        return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
    };
};
-- CreateTable
CREATE TABLE "chambre" (
    "id_chambre" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numero_chambre" INTEGER NOT NULL,
    "prix_nuit" INTEGER NOT NULL,
    "prix_jour" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "capacite" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "reservation" (
    "id_reservation" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom_client" TEXT NOT NULL,
    "prenom_client" TEXT NOT NULL,
    "telephone1" TEXT NOT NULL,
    "telephone2" TEXT,
    "email" TEXT NOT NULL,
    "date_arrivee" DATETIME NOT NULL,
    "date_depart" DATETIME NOT NULL,
    "date_reservation" DATETIME NOT NULL,
    "prix_total" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'EN_ATTENTE',
    "id_chambre" INTEGER NOT NULL,
    CONSTRAINT "reservation_id_chambre_fkey" FOREIGN KEY ("id_chambre") REFERENCES "chambre" ("id_chambre") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "administrateur" (
    "id_administrateur" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "administrateur_email_key" ON "administrateur"("email");

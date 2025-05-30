-- CreateTable
CREATE TABLE "facture" (
    "id_facture" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date_creation" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "montant_total" TEXT NOT NULL,
    "id_reservation" INTEGER NOT NULL,
    "id_utilisateur" INTEGER NOT NULL,
    CONSTRAINT "facture_id_reservation_fkey" FOREIGN KEY ("id_reservation") REFERENCES "reservation" ("id_reservation") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "facture_id_utilisateur_fkey" FOREIGN KEY ("id_utilisateur") REFERENCES "utilisateur" ("id_utilisateur") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "facture_id_reservation_key" ON "facture"("id_reservation");

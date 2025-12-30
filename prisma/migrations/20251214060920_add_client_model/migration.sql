-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tender" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'OPEN',
    "customerName" TEXT,
    "customerEmail" TEXT,
    "customerPostcode" TEXT,
    "targetDate" TEXT,
    "clientId" TEXT,
    "tow_vehicle" TEXT,
    "type" TEXT,
    "length" TEXT,
    "frame" TEXT,
    "solar" TEXT,
    "batteries" TEXT,
    "inverter" TEXT,
    "water_tanks" TEXT,
    "external_shower" TEXT,
    "toilet" TEXT,
    "fridge_size" TEXT,
    "fridge_type" TEXT,
    "appliances" TEXT,
    "ac" TEXT,
    "diesel_heater" TEXT,
    "bed" TEXT,
    "kids_beds" TEXT,
    "fixtures" TEXT,
    "outdoor_kitchen" TEXT,
    "electric_awning" TEXT,
    "auto_level" TEXT,
    "final_comments" TEXT,
    "custom_notes" TEXT,
    CONSTRAINT "Tender_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Tender" ("ac", "appliances", "auto_level", "batteries", "bed", "createdAt", "custom_notes", "customerEmail", "customerName", "customerPostcode", "diesel_heater", "electric_awning", "external_shower", "final_comments", "fixtures", "frame", "fridge_size", "fridge_type", "id", "inverter", "kids_beds", "length", "outdoor_kitchen", "solar", "status", "targetDate", "toilet", "tow_vehicle", "type", "updatedAt", "water_tanks") SELECT "ac", "appliances", "auto_level", "batteries", "bed", "createdAt", "custom_notes", "customerEmail", "customerName", "customerPostcode", "diesel_heater", "electric_awning", "external_shower", "final_comments", "fixtures", "frame", "fridge_size", "fridge_type", "id", "inverter", "kids_beds", "length", "outdoor_kitchen", "solar", "status", "targetDate", "toilet", "tow_vehicle", "type", "updatedAt", "water_tanks" FROM "Tender";
DROP TABLE "Tender";
ALTER TABLE "new_Tender" RENAME TO "Tender";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

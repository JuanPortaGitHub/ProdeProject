-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "mail" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Grupo" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "imagen" TEXT,
    "clave_grupo" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "Grupo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prode_Partido_Usuario" (
    "info_PartidosId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "Goles_Local" TEXT NOT NULL,
    "Goles_Visitante" TEXT NOT NULL,
    "Ganador" TEXT NOT NULL,
    "Tiempo_Extra" BOOLEAN NOT NULL DEFAULT false,
    "Penales" BOOLEAN NOT NULL DEFAULT false,
    "Puntos" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "Prode_Partido_Usuario_pkey" PRIMARY KEY ("userId","info_PartidosId")
);

-- CreateTable
CREATE TABLE "Info_Partidos" (
    "id" SERIAL NOT NULL,
    "DiaHora" TIMESTAMP(3) NOT NULL,
    "Lugar" TEXT NOT NULL,
    "resultados_Reales_PartidosId" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "equipoLocalId" INTEGER NOT NULL,
    "equipoVisitanteId" INTEGER NOT NULL,

    CONSTRAINT "Info_Partidos_pkey" PRIMARY KEY ("id","equipoLocalId","equipoVisitanteId")
);

-- CreateTable
CREATE TABLE "Equipos" (
    "id" SERIAL NOT NULL,
    "nombre_equipo" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "Equipos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resultados_Reales_Partidos" (
    "id" SERIAL NOT NULL,
    "Goles_Local" TEXT NOT NULL,
    "Goles_Visitante" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "Resultados_Reales_Partidos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GrupoToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Info_Partidos_id_key" ON "Info_Partidos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Info_Partidos_resultados_Reales_PartidosId_key" ON "Info_Partidos"("resultados_Reales_PartidosId");

-- CreateIndex
CREATE UNIQUE INDEX "_GrupoToUser_AB_unique" ON "_GrupoToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_GrupoToUser_B_index" ON "_GrupoToUser"("B");

-- AddForeignKey
ALTER TABLE "Prode_Partido_Usuario" ADD CONSTRAINT "Prode_Partido_Usuario_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prode_Partido_Usuario" ADD CONSTRAINT "Prode_Partido_Usuario_info_PartidosId_fkey" FOREIGN KEY ("info_PartidosId") REFERENCES "Info_Partidos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Info_Partidos" ADD CONSTRAINT "Info_Partidos_resultados_Reales_PartidosId_fkey" FOREIGN KEY ("resultados_Reales_PartidosId") REFERENCES "Resultados_Reales_Partidos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Info_Partidos" ADD CONSTRAINT "Info_Partidos_equipoLocalId_fkey" FOREIGN KEY ("equipoLocalId") REFERENCES "Equipos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Info_Partidos" ADD CONSTRAINT "Info_Partidos_equipoVisitanteId_fkey" FOREIGN KEY ("equipoVisitanteId") REFERENCES "Equipos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GrupoToUser" ADD CONSTRAINT "_GrupoToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Grupo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GrupoToUser" ADD CONSTRAINT "_GrupoToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

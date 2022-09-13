import { PrismaClient } from "@prisma/client";
import axios from "axios";
import cron from "node-cron";

const prisma = new PrismaClient();

const updateInfoMatchs = async () => {
  console.log(
    "Iniciando información partidos nuevos a base de datos. Espere..."
  );
  try {
    const partidos = await axios.get(
      "https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4429&s=2022"
    );

    const createMany = await prisma.info_Partidos.createMany({
      data: partidos.data.events.map((resultado: any) => {
        return {
          id: parseInt(resultado.idEvent),
          idTorneo: parseInt(resultado.idLeague),
          DiaHora: resultado.strTimestamp,
          RondaTorneo: resultado.intRound,
          Lugar: resultado.strVenue,
          equipoLocalId: parseInt(resultado.idHomeTeam),
          equipoVisitanteId: parseInt(resultado.idAwayTeam),
        };
      }),

      skipDuplicates: true, //CON ESTO REVISA EN BASE DE DATOS PARA EVITAR DUPLICADOS
    });

    console.log("Informacion de partidos agregados", createMany);
  } catch (err) {
    console.error("Error en subida", err);
  }
};

cron.schedule("* * * * *", () => {
  //Actualiza cada 1 min
  updateInfoMatchs();
});

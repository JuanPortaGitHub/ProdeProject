import { PrismaClient } from "@prisma/client";
import axios from "axios";
import cron from "node-cron";

const prisma = new PrismaClient();

const updateTeams = async () => {
  console.log("Iniciando carga de equipos nuevos a base de datos. Espere...");
  try {
    const equiposTorneo = await axios.get(
      "https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4429&s=2022"
    );

    const createMany = await prisma.equipos.createMany({
      data: equiposTorneo.data.events.map((resultado: any) => {
        return {
          id: parseInt(resultado.idHomeTeam),
          nombre_equipo: resultado.strHomeTeam,
        };
      }),

      skipDuplicates: true, //CON ESTO REVISA EN BASE DE DATOS PARA EVITAR DUPLICADOS
    });

    console.log("Equipos Agregados", createMany);
  } catch (err) {
    console.error("Error en subida", err);
  }
};

cron.schedule("* * * * *", () => {
  //Actualiza cada 1 min
  updateTeams();
});

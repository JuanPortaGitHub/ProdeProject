import axios from "axios";
import cron from "node-cron";
import { prisma } from "../lib/prisma";

const updateTeams = async () => {
  console.log("Iniciando carga de equipos nuevos a base de datos. Espere...");
  try {
    const partidosTorneo = await axios.get(
      "https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4429&s=2022"
    );
    const detallesEquipos = await axios.get(
      "https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=FIFA%20WORLD%20CUP"
    );
    const createMany = await prisma.equipos.createMany({
      data: partidosTorneo.data.events.map((partido: any) => {
        return {
          id: parseInt(partido.idHomeTeam),
          nombre_equipo: partido.strHomeTeam,
          flagImage: detallesEquipos.data.teams.find(
            (equipo: any) => equipo.idTeam === partido.idHomeTeam
          )?.strTeamBadge,
          teamJersey: detallesEquipos.data.teams.find(
            (equipo: any) => equipo.idTeam === partido.idHomeTeam
          )?.strTeamJersey,
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

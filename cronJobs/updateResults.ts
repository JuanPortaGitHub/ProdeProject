import { prisma } from "../lib/prisma";
import axios from "axios";
import cron from "node-cron";

const updateResults = async () => {
  console.log(
    "Iniciando carga de resultados nuevos de partidos a base de datos. Espere..."
  );
  try {
    const resultadosTorneo = await axios.get(
      "https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4429&s=2022"
    );

    // const createMany = await prisma.resultados_Reales_Partidos.createMany({
    //   data: resultadosTorneo.data.events.map((resultado: any) => {
    //     return {
    //       id: +resultado.idEvent,
    //       Goles_Local: resultado.intHomeScore,
    //       Goles_Visitante: resultado.intAwayScore,
    //       Ganador:
    //         +resultado.intHomeScore > +resultado.intAwayScore
    //           ? resultado.strHomeTeam
    //           : +resultado.intHomeScore < +resultado.intAwayScore
    //           ? resultado.strAwayTeam
    //           : "Empate",
    //       // Penales: resultado.strHomeTeam,
    //       // Tiempo_Extra: resultado.strHomeTeam,
    //     };
    //   }),

    //   skipDuplicates: true, //CON ESTO REVISA EN BASE DE DATOS PARA EVITAR DUPLICADOS
    // });

    const updateResult = () => {
      resultadosTorneo.data.events.map(async (resultado: any) => {
        await prisma.resultados_Reales_Partidos.update({
          where: {
            id: resultado.idEvent,
          },
          data: {
            Goles_Local: resultado.intHomeScore,
            Goles_Visitante: resultado.intAwayScore,
            Ganador:
              +resultado.intHomeScore > +resultado.intAwayScore
                ? resultado.strHomeTeam
                : +resultado.intHomeScore < +resultado.intAwayScore
                ? resultado.strAwayTeam
                : "Empate",
          },
        });
      });
    };

    // console.log("Resultados Agregados", createMany);
  } catch (err) {
    console.error("Error en subida", err);
  }
};

cron.schedule("* * * * *", () => {
  //Actualiza cada 1 min
  updateResults();
});

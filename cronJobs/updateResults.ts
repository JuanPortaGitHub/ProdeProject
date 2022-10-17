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

    //FUNCION CREA REGISTROS EN ESTADO UNDEFINED
    const createNewMatches = await prisma.resultados_Reales_Partidos.createMany(
      {
        data: resultadosTorneo.data.events.map((resultado: any) => {
          return {
            id: +resultado.idEvent,
            Goles_Local: undefined,
            Goles_Visitante: undefined,
            Ganador: undefined,
            Penales: undefined,
            Tiempo_Extra: undefined,
          };
        }),
        skipDuplicates: true, //CON ESTO REVISA EN BASE DE DATOS PARA EVITAR DUPLICADOS
      }
    );

    //FUNCION ACTUALIZA REGISTROS CON RESULTADOS
    resultadosTorneo.data.events.map(async (resultado: any) => {
      if (resultado.strStatus !== "Not Started") {
        await prisma.resultados_Reales_Partidos.update({
          where: { id: +resultado.idEvent },
          data: {
            Goles_Local: resultado.intHomeScore,
            Goles_Visitante: resultado.intAwayScore,
            Ganador:
              +resultado.intHomeScore > +resultado.intAwayScore
                ? resultado.strHomeTeam
                : +resultado.intHomeScore < +resultado.intAwayScore
                ? resultado.strAwayTeam
                : "Empate",
            Penales: undefined,
            Tiempo_Extra: undefined,
          },
        });
      }
    });

    resultadosTorneo.data.events.map(async (resultado: any) => {
      if (resultado.strStatus !== "Not Started") {
        const prodesParaActualizar =
          await prisma.prode_Partido_Usuario.findMany({
            where: {
              AND: [
                { info_PartidosId: resultado.idEvent },
                // { NOT: { Partido: { Resultado: { Ganador: undefined } } } },
                // { NOT: { Puntos: undefined } },
              ],
            },
            // data: {
            // Puntos: Goles_Local == resultado.intHomeScore ? 1 : 0
            // Goles_Local: resultado.intHomeScore,
            // Goles_Visitante: resultado.intAwayScore,
            // Ganador:
            //   +resultado.intHomeScore > +resultado.intAwayScore
            //     ? resultado.strHomeTeam
            //     : +resultado.intHomeScore < +resultado.intAwayScore
            //     ? resultado.strAwayTeam
            //     : undefined,
            // Penales: undefined,
            // Tiempo_Extra: undefined,
            // },
          });

        // prodesParaActualizar.map((prode:any)=> {

        // })
      }
    });

    // console.log("Resultados Agregados", createMany);
  } catch (err) {
    console.error("Error en subida", err);
  }
};

cron.schedule("* * * * *", () => {
  //Actualiza cada 1 min
  updateResults();
});

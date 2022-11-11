import { prisma } from "../lib/prisma";
import axios from "axios";
import cron from "node-cron";

const updateProdePoints = async () => {
  console.log("Iniciando carga de puntos de Prode. Espere...");
  try {
    const resultadosTorneo = await axios.get(
      "https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4429&s=2022"
    );

    const calculatePoints = (prode: any, resultado: any) => {
      // console.log("prode que llega", prode);
      let points = 0;
      if (resultado.intHomeScore == prode.Goles_Local) points = points + 1;
      if (resultado.intAwayScore == prode.Goles_Visitante) points = points + 1;
      if (
        resultado.intHomeScore == prode.Goles_Local &&
        resultado.intAwayScore == prode.Goles_Visitante &&
        prode.Goles_Local + prode.Goles_Visitante >= 5
      )
        points = points + 1;

      let Ganador;
      resultado.intHomeScore > +resultado.intAwayScore
        ? (Ganador = resultado.strHomeTeam)
        : +resultado.intHomeScore < +resultado.intAwayScore
        ? (Ganador = resultado.strAwayTeam)
        : (Ganador = "Empate");
      if (Ganador == prode.Ganador) points = points + 3;
      return points;
    };

    //FUNCION ACTUALIZA PRODES EN BASE A RESULTADOS REALES
    resultadosTorneo.data.events.map(async (resultado: any) => {
      // 1) Me fijo que el partido este en juego o terminado
      if (resultado.strStatus !== "Not Started") {
        // 2) Busco los prodes de esos partidos
        const prodesParaActualizar =
          await prisma.prode_Partido_Usuario.findMany({
            where: {
              info_PartidosId: Number(resultado.idEvent),
            },
          });

        // 3)Por cada uno de esos prode consulto para ver que puntaje tienen
        prodesParaActualizar.map(async (prode: any) => {
          const puntosObtenidos = calculatePoints(prode, resultado);
          // 4) Actualizo los puntos de prode
          await prisma.prode_Partido_Usuario.updateMany({
            where: {
              info_PartidosId: prode.info_PartidosId,
              userId: prode.userId,
              grupoId: prode.grupoId,
            },
            data: {
              Puntos: puntosObtenidos,
            },
          });
        });
      }
    });
  } catch (err) {
    console.error("Error en subida", err);
  } finally {
    console.log("Finalizó la carga de puntos");
  }
};

cron.schedule("*/5 * * * *", () => {
  //Actualiza cada 1 min
  updateProdePoints();
});

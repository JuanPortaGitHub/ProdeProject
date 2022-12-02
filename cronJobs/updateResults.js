const axios = require("axios");
const cron = require("node-cron");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  log: ["query"],
});

const updateResults = async () => {
  console.log(
    "Iniciando carga de resultados nuevos de partidos a base de datos. Espere..."
  );
  try {
    const resultadosTorneo = await axios.get(
      "https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4429&s=2022"
    );

    //FUNCION CREA REGISTROS EN ESTADO UNDEFINED
    await prisma.resultados_Reales_Partidos.createMany({
      data: resultadosTorneo.data.events.map((resultado) => {
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
    });

    //FUNCION ACTUALIZA REGISTROS CON RESULTADOS
    resultadosTorneo.data.events.map(async (resultado) => {
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
  } catch (err) {
    console.error("Error en subida", err);
  }
};

cron.schedule("*/5 * * * *", () => {
  //Actualiza cada 5 min

  updateResults();
});

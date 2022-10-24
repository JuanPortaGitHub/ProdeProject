import { prisma } from "../lib/prisma";
import axios from "axios";
import cron from "node-cron";

const partidosPorGrupos = [
  {
    id: 1543883,
    Grupo: "A",
  },
  {
    id: 1543881,
    Grupo: "A",
  },
  {
    id: 1543882,
    Grupo: "B",
  },
  {
    id: 1570148,
    Grupo: "B",
  },
  {
    id: 1543884,
    Grupo: "C",
  },
  {
    id: 1543885,
    Grupo: "D",
  },
  {
    id: 1543886,
    Grupo: "C",
  },
  {
    id: 1574659,
    Grupo: "D",
  },
  {
    id: 1543887,
    Grupo: "F",
  },
  {
    id: 1543888,
    Grupo: "E",
  },
  {
    id: 1543889,
    Grupo: "F",
  },
  {
    id: 1574660,
    Grupo: "E",
  },
  {
    id: 1543890,
    Grupo: "G",
  },
  {
    id: 1543891,
    Grupo: "H",
  },
  {
    id: 1543892,
    Grupo: "H",
  },
  {
    id: 1543893,
    Grupo: "G",
  },
  {
    id: 1543894,
    Grupo: "A",
  },
  {
    id: 1543895,
    Grupo: "A",
  },
  {
    id: 1543896,
    Grupo: "B",
  },
  {
    id: 1570149,
    Grupo: "B",
  },
  {
    id: 1543897,
    Grupo: "C",
  },
  {
    id: 1543898,
    Grupo: "D",
  },
  {
    id: 1543899,
    Grupo: "C",
  },
  {
    id: 1574661,
    Grupo: "D",
  },
  {
    id: 1543900,
    Grupo: "F",
  },
  {
    id: 1543901,
    Grupo: "F",
  },
  {
    id: 1543902,
    Grupo: "E",
  },
  {
    id: 1574662,
    Grupo: "E",
  },
  {
    id: 1543903,
    Grupo: "G",
  },
  {
    id: 1543904,
    Grupo: "H",
  },
  {
    id: 1543905,
    Grupo: "G",
  },
  {
    id: 1543906,
    Grupo: "H",
  },
  {
    id: 1543907,
    Grupo: "A",
  },
  {
    id: 1543908,
    Grupo: "A",
  },
  {
    id: 1543909,
    Grupo: "B",
  },
  {
    id: 1570150,
    Grupo: "B",
  },
  {
    id: 1543910,
    Grupo: "D",
  },
  {
    id: 1543911,
    Grupo: "C",
  },
  {
    id: 1543912,
    Grupo: "C",
  },
  {
    id: 1574663,
    Grupo: "D",
  },
  {
    id: 1543913,
    Grupo: "F",
  },
  {
    id: 1543914,
    Grupo: "F",
  },
  {
    id: 1543915,
    Grupo: "E",
  },
  {
    id: 1574664,
    Grupo: "E",
  },
  {
    id: 1543916,
    Grupo: "H",
  },
  {
    id: 1543917,
    Grupo: "H",
  },
  {
    id: 1543918,
    Grupo: "G",
  },
  {
    id: 1543919,
    Grupo: "G",
  },
];

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
          // Grupo: partidosPorGrupos.find(
          //   (partido) => partido.id === parseInt(resultado.idEvent)
          // )?.Grupo,
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

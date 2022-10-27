import { read } from "fs";
import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  const a = {
    table: [
      {
        name: "Netherlands",
        flag: "/flags/paisesBajos.png",
        idStanding: "1957113",
        intRank: "1",
        idTeam: "133908",
        strTeam: "Netherlands",
        strTeamBadge:
          "https://www.thesportsdb.com/images/media/team/badge/swqvpy1455466083.png/tiny",
        idLeague: "4429",
        strLeague: "FIFA World Cup",
        strSeason: "2022",
        strForm: "",
        strDescription: "Promotion - World Cup (Play Offs)",
        intPlayed: "3",
        intWin: "0",
        intLoss: "0",
        intDraw: "0",
        intGoalsFor: "0",
        intGoalsAgainst: "0",
        intGoalDifference: "0",
        intPoints: "1",
        dateUpdated: "2022-10-26 23:00:54",
      },
      {
        name: "Senegal",
        flag: "/flags/senegal.png",
        idStanding: "1957113",
        intRank: "1",
        idTeam: "133908",
        strTeam: "Senegal",
        strTeamBadge:
          "https://www.thesportsdb.com/images/media/team/badge/swqvpy1455466083.png/tiny",
        idLeague: "4429",
        strLeague: "FIFA World Cup",
        strSeason: "2022",
        strForm: "",
        strDescription: "Promotion - World Cup (Play Offs)",
        intPlayed: "0",
        intWin: "0",
        intLoss: "0",
        intDraw: "0",
        intGoalsFor: "0",
        intGoalsAgainst: "0",
        intGoalDifference: "0",
        intPoints: "3",
        dateUpdated: "2022-10-26 23:00:54",
      },
      {
        name: "Ecuador",
        flag: "/flags/ecuador.png",
      },
      {
        name: "Qatar",
        flag: "/flags/qatar.png",
      },
      {
        name: "Wales",
        flag: "/flags/gales.png",
      },
      {
        name: "USA",
        flag: "/flags/USA.png",
      },
      {
        name: "Iran",
        flag: "/flags/iran.png",
      },
      {
        name: "England",
        flag: "/flags/inglaterra.png",
      },
      {
        name: "Poland",
        flag: "/flags/polonia.png",
      },
      {
        name: "Mexico",
        flag: "/flags/mexico.png",
      },
      {
        name: "Saudi Arabia",
        flag: "/flags/arabiaSaudita.png",
      },
      {
        name: "Argentina",
        flag: "/flags/argentina.png",
      },
      {
        name: "Tunisia",
        flag: "/flags/tunez.png",
      },
      {
        name: "Denmark",
        flag: "/flags/dinamarca.png",
      },
      {
        name: "Australia",
        flag: "/flags/australia.png",
      },
      {
        name: "France",
        flag: "/flags/francia.png",
      },
      {
        name: "Japan",
        flag: "/flags/japon.png",
      },
      {
        name: "Germany",
        flag: "/flags/alemania.png",
      },
      {
        name: "Costa Rica",
        flag: "/flags/costaRica.png",
      },
      {
        name: "Spain",
        flag: "/flags/españa.png",
      },
      {
        name: "Morocco",
        flag: "/flags/marruecos.png",
      },
      {
        name: "Canada",
        flag: "/flags/canada.png",
      },
      {
        name: "Croatia",
        flag: "/flags/croacia.png",
      },
      {
        name: "Belgium",
        flag: "/flags/belgica.png",
      },
      {
        name: "Cameroon",
        flag: "/flags/camerun.png",
      },
      {
        name: "Switzerland",
        flag: "/flags/suiza.png",
      },
      {
        name: "Serbia",
        flag: "/flags/serbia.png",
      },
      {
        name: "Brazil",
        flag: "/flags/brasil.png",
      },
      {
        name: "South Korea",
        flag: "/flags/coreaDelSur.png",
      },
      {
        name: "Uruguay",
        flag: "/flags/uruguay.png",
      },
      {
        name: "Ghana",
        flag: "/flags/ghana.png",
      },
      {
        name: "Portugal",
        flag: "/flags/portugal.png",
      },
    ],
  };

  res.status(200).json(a);
}

export default handler;

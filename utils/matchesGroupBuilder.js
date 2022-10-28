import { getGroups } from "../utils/getGroups";

export const matchesGroupBuilder = (matches) => {
  const groups = getGroups();

  let matchesData = [];
  let groupA = [];
  let groupB = [];
  let groupC = [];
  let groupD = [];
  let groupE = [];
  let groupF = [];
  let groupG = [];
  let groupH = [];

  for (let i = 0; i < matches.length; i++) {
    if (groups[0].teams.includes(matches[i].EquipoLocal.nombre_equipo)) {
      const matchData = {
        homeTeam: matches[i].EquipoLocal.nombre_equipo,
        flagHomeTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        awayTeam: matches[i].EquipoVisitante.nombre_equipo,
        flagAwayTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        date: matches[i].DiaHora,
        // hour: events[i].strTimeLocal,
        place: matches[i].Lugar,
      };
      groupA.push(matchData);
    }
    if (groups[1].teams.includes(matches[i].EquipoLocal.nombre_equipo)) {
      const matchData = {
        homeTeam: matches[i].EquipoLocal.nombre_equipo,
        flagHomeTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        awayTeam: matches[i].EquipoVisitante.nombre_equipo,
        flagAwayTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        date: matches[i].DiaHora,
        // hour: events[i].strTimeLocal,
        place: matches[i].Lugar,
      };
      groupB.push(matchData);
    }
    if (groups[2].teams.includes(matches[i].EquipoLocal.nombre_equipo)) {
      const matchData = {
        homeTeam: matches[i].EquipoLocal.nombre_equipo,
        flagHomeTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        awayTeam: matches[i].EquipoVisitante.nombre_equipo,
        flagAwayTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        date: matches[i].DiaHora,
        // hour: events[i].strTimeLocal,
        place: matches[i].Lugar,
      };
      groupC.push(matchData);
    }
    if (groups[3].teams.includes(matches[i].EquipoLocal.nombre_equipo)) {
      const matchData = {
        homeTeam: matches[i].EquipoLocal.nombre_equipo,
        flagHomeTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        awayTeam: matches[i].EquipoVisitante.nombre_equipo,
        flagAwayTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        date: matches[i].DiaHora,
        // hour: events[i].strTimeLocal,
        place: matches[i].Lugar,
      };
      groupD.push(matchData);
    }
    if (groups[4].teams.includes(matches[i].EquipoLocal.nombre_equipo)) {
      const matchData = {
        homeTeam: matches[i].EquipoLocal.nombre_equipo,
        flagHomeTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        awayTeam: matches[i].EquipoVisitante.nombre_equipo,
        flagAwayTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        date: matches[i].DiaHora,
        // hour: events[i].strTimeLocal,
        place: matches[i].Lugar,
      };
      groupE.push(matchData);
    }
    if (groups[5].teams.includes(matches[i].EquipoLocal.nombre_equipo)) {
      const matchData = {
        homeTeam: matches[i].EquipoLocal.nombre_equipo,
        flagHomeTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        awayTeam: matches[i].EquipoVisitante.nombre_equipo,
        flagAwayTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        date: matches[i].DiaHora,
        // hour: events[i].strTimeLocal,
        place: matches[i].Lugar,
      };
      groupF.push(matchData);
    }
    if (groups[6].teams.includes(matches[i].EquipoLocal.nombre_equipo)) {
      const matchData = {
        homeTeam: matches[i].EquipoLocal.nombre_equipo,
        flagHomeTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        awayTeam: matches[i].EquipoVisitante.nombre_equipo,
        flagAwayTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        date: matches[i].DiaHora,
        // hour: events[i].strTimeLocal,
        place: matches[i].Lugar,
      };
      groupG.push(matchData);
    }
    if (groups[7].teams.includes(matches[i].EquipoLocal.nombre_equipo)) {
      const matchData = {
        homeTeam: matches[i].EquipoLocal.nombre_equipo,
        flagHomeTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        awayTeam: matches[i].EquipoVisitante.nombre_equipo,
        flagAwayTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        date: matches[i].DiaHora,
        // hour: events[i].strTimeLocal,
        place: matches[i].Lugar,
      };
      groupH.push(matchData);
    }
  }

  matchesData.push(
    { groupName: "Group A", matches: [...groupA], badges: groups[0].badges },
    { groupName: "Group B", matches: [...groupB], badges: groups[1].badges },
    { groupName: "Group C", matches: [...groupC], badges: groups[2].badges },
    { groupName: "Group D", matches: [...groupD], badges: groups[3].badges },
    { groupName: "Group E", matches: [...groupE], badges: groups[4].badges },
    { groupName: "Group F", matches: [...groupF], badges: groups[5].badges },
    { groupName: "Group G", matches: [...groupG], badges: groups[6].badges },
    { groupName: "Group H", matches: [...groupH], badges: groups[7].badges }
  );
  return matchesData;
};

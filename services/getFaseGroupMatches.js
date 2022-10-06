import axios from "axios";
import { getGroups } from "../utils/getGroups";

export const getFaseGroupMatches = async () => {
  let matches = [];
  const { data } = await axios(
    "https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4429&s=2022"
  );
  const { events } = data;
  const groups = getGroups();

  let groupA = [];
  let groupB = [];
  let groupC = [];
  let groupD = [];
  let groupE = [];
  let groupF = [];
  let groupG = [];
  let groupH = [];

  for (let i = 0; i < events.length; i++) {
    if (groups[0].teams.includes(events[i].strHomeTeam)) {
      // en qatar son 6 horas mas, solo tengo que restar 6 horas a la local
      const matchData = {
        homeTeam: events[i].strHomeTeam,
        flagHomeTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        awayTeam: events[i].strAwayTeam,
        flagAwayTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        date: events[i].dateEventLocal,
        hour: events[i].strTimeLocal,
      };

      groupA.push(matchData);
    }
    if (groups[1].teams.includes(events[i].strHomeTeam)) {
      //   console.log(events[i].strHomeTeam);
      // en qatar son 6 horas mas, solo tengo que restar 6 horas a la local
      const matchData = {
        homeTeam: events[i].strHomeTeam,
        flagHomeTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        awayTeam: events[i].strAwayTeam,
        flagAwayTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        date: events[i].dateEventLocal,
        hour: events[i].strTimeLocal,
      };

      groupB.push(matchData);
    }
    if (groups[2].teams.includes(events[i].strHomeTeam)) {
      // en qatar son 6 horas mas, solo tengo que restar 6 horas a la local
      const matchData = {
        homeTeam: events[i].strHomeTeam,
        flagHomeTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        awayTeam: events[i].strAwayTeam,
        flagAwayTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        date: events[i].dateEventLocal,
        hour: events[i].strTimeLocal,
      };

      groupC.push(matchData);
    }
    if (groups[3].teams.includes(events[i].strHomeTeam)) {
      //   console.log(events[i].strHomeTeam);
      // en qatar son 6 horas mas, solo tengo que restar 6 horas a la local
      const matchData = {
        homeTeam: events[i].strHomeTeam,
        flagHomeTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        awayTeam: events[i].strAwayTeam,
        flagAwayTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        date: events[i].dateEventLocal,
        hour: events[i].strTimeLocal,
      };

      groupD.push(matchData);
    }
    if (groups[4].teams.includes(events[i].strHomeTeam)) {
      //   console.log(events[i].strHomeTeam);
      // en qatar son 6 horas mas, solo tengo que restar 6 horas a la local
      const matchData = {
        homeTeam: events[i].strHomeTeam,
        flagHomeTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        awayTeam: events[i].strAwayTeam,
        flagAwayTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        date: events[i].dateEventLocal,
        hour: events[i].strTimeLocal,
      };

      groupE.push(matchData);
    }
    if (groups[5].teams.includes(events[i].strHomeTeam)) {
      //   console.log(events[i].strHomeTeam);
      // en qatar son 6 horas mas, solo tengo que restar 6 horas a la local
      const matchData = {
        homeTeam: events[i].strHomeTeam,
        flagHomeTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        awayTeam: events[i].strAwayTeam,
        flagAwayTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        date: events[i].dateEventLocal,
        hour: events[i].strTimeLocal,
      };

      groupF.push(matchData);
    }
    if (groups[6].teams.includes(events[i].strHomeTeam)) {
      //   console.log(events[i].strHomeTeam);
      // en qatar son 6 horas mas, solo tengo que restar 6 horas a la local
      const matchData = {
        homeTeam: events[i].strHomeTeam,
        flagHomeTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        awayTeam: events[i].strAwayTeam,
        flagAwayTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        date: events[i].dateEventLocal,
        hour: events[i].strTimeLocal,
      };

      groupG.push(matchData);
    }
    if (groups[7].teams.includes(events[i].strHomeTeam)) {
      //   console.log(events[i].strHomeTeam);
      // en qatar son 6 horas mas, solo tengo que restar 6 horas a la local
      const matchData = {
        homeTeam: events[i].strHomeTeam,
        flagHomeTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        awayTeam: events[i].strAwayTeam,
        flagAwayTeamURL:
          "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
        date: events[i].dateEventLocal,
        hour: events[i].strTimeLocal,
      };

      groupH.push(matchData);
    }
  }
  matches.push(
    { groupName: "Group A", matches: [...groupA], badges: groups[0].badges },
    { groupName: "Group B", matches: [...groupB], badges: groups[1].badges },
    { groupName: "Group C", matches: [...groupC], badges: groups[2].badges },
    { groupName: "Group D", matches: [...groupD], badges: groups[3].badges },
    { groupName: "Group E", matches: [...groupE], badges: groups[4].badges },
    { groupName: "Group F", matches: [...groupF], badges: groups[5].badges },
    { groupName: "Group G", matches: [...groupG], badges: groups[6].badges },
    { groupName: "Group H", matches: [...groupH], badges: groups[7].badges }
  );
  console.log(matches);
  return matches;
};

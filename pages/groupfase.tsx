import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Match } from "../components/groupfase/Match";
import { getFaseGroupMatches } from "../services/getFaseGroupMatches";

const GroupFase: NextPage = () => {
  const [groups, SetGroups] = useState([]);

  // const dataGroups = [
  //   {
  //     groupName: "Group A",
  //     matches: [
  //       {
  //         homeTeam: "Argentina",
  //         flagHomeTeamURL:
  //           "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
  //         awayTeam: "Brasil",
  //         flagAwayTeamURL:
  //           "https://www.thesportsdb.com/images/media/team/badge/jgfos01591988326.png",
  //       },
  //       {
  //         homeTeam: "Argentina",
  //         flagHomeTeamURL:
  //           "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
  //         awayTeam: "Brasil",
  //         flagAwayTeamURL:
  //           "https://www.thesportsdb.com/images/media/team/badge/jgfos01591988326.png",
  //       },
  //       {
  //         homeTeam: "Argentina",
  //         flagHomeTeamURL:
  //           "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
  //         awayTeam: "Brasil",
  //         flagAwayTeamURL:
  //           "https://www.thesportsdb.com/images/media/team/badge/jgfos01591988326.png",
  //       },
  //       {
  //         homeTeam: "Argentina",
  //         flagHomeTeamURL:
  //           "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
  //         awayTeam: "Brasil",
  //         flagAwayTeamURL:
  //           "https://www.thesportsdb.com/images/media/team/badge/jgfos01591988326.png",
  //       },
  //       {
  //         homeTeam: "Argentina",
  //         flagHomeTeamURL:
  //           "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
  //         awayTeam: "Brasil",
  //         flagAwayTeamURL:
  //           "https://www.thesportsdb.com/images/media/team/badge/jgfos01591988326.png",
  //       },
  //       {
  //         homeTeam: "Argentina",
  //         flagHomeTeamURL:
  //           "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
  //         awayTeam: "Brasil",
  //         flagAwayTeamURL:
  //           "https://www.thesportsdb.com/images/media/team/badge/jgfos01591988326.png",
  //       },
  //     ],
  //   },
  //   {
  //     groupName: "Group B",
  //     matches: [
  //       {
  //         homeTeam: "Inglaterra",
  //         flagHomeTeamURL:
  //           "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
  //         awayTeam: "Alemania",
  //         flagAwayTeamURL:
  //           "https://www.thesportsdb.com/images/media/team/badge/jgfos01591988326.png",
  //       },
  //       {
  //         homeTeam: "Argentina",
  //         flagHomeTeamURL:
  //           "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
  //         awayTeam: "Brasil",
  //         flagAwayTeamURL:
  //           "https://www.thesportsdb.com/images/media/team/badge/jgfos01591988326.png",
  //       },
  //       {
  //         homeTeam: "Argentina",
  //         flagHomeTeamURL:
  //           "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
  //         awayTeam: "Brasil",
  //         flagAwayTeamURL:
  //           "https://www.thesportsdb.com/images/media/team/badge/jgfos01591988326.png",
  //       },
  //       {
  //         homeTeam: "Argentina",
  //         flagHomeTeamURL:
  //           "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
  //         awayTeam: "Brasil",
  //         flagAwayTeamURL:
  //           "https://www.thesportsdb.com/images/media/team/badge/jgfos01591988326.png",
  //       },
  //       {
  //         homeTeam: "Argentina",
  //         flagHomeTeamURL:
  //           "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
  //         awayTeam: "Brasil",
  //         flagAwayTeamURL:
  //           "https://www.thesportsdb.com/images/media/team/badge/jgfos01591988326.png",
  //       },
  //       {
  //         homeTeam: "Argentina",
  //         flagHomeTeamURL:
  //           "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
  //         awayTeam: "Brasil",
  //         flagAwayTeamURL:
  //           "https://www.thesportsdb.com/images/media/team/badge/jgfos01591988326.png",
  //       },
  //     ],
  //   },
  // ];

  // let dataGroups = [];
  const getGroups = async () => {
    const dataGroups = await getFaseGroupMatches();
    SetGroups(dataGroups);
  };

  console.log(groups);

  useEffect(() => {
    getGroups();
  }, [groups]);

  return (
    <div className="App">
      <header className="App-header">
        <p>FIXTURE</p>
      </header>

      {groups?.map((group, i) => (
        <Accordion key={i} style={{ margin: "10px 0px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{group.groupName}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {group.matches.map((match, i) => (
              <Match
                key={i}
                homeTeam={match.homeTeam}
                flagHomeTeam={match.flagHomeTeamURL}
                awayTeam={match.awayTeam}
                flagAwayTeam={match.flagAwayTeamURL}
              />
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default GroupFase;

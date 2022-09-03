import type { NextPage } from "next";
import React from "react";
import { useAuth } from "../context/AuthContext";
import { getCurrentUser } from "../firebase/users";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Match } from "../components/groupfase/Match";

const GroupFase: NextPage = () => {
  const { user, logout } = useAuth();

  const dataGroups = [
    {
      groupName: "Group A",
      matches: [
        {
          homeTeam: "Argentina",
          flagHomeTeamURL:
            "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
          awayTeam: "Brasil",
          flagAwayTeamURL:
            "https://www.thesportsdb.com/images/media/team/badge/jgfos01591988326.png",
        },
        {
          homeTeam: "Argentina",
          flagHomeTeamURL:
            "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
          awayTeam: "Brasil",
          flagAwayTeamURL:
            "https://www.thesportsdb.com/images/media/team/badge/jgfos01591988326.png",
        },
        {
          homeTeam: "Argentina",
          flagHomeTeamURL:
            "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
          awayTeam: "Brasil",
          flagAwayTeamURL:
            "https://www.thesportsdb.com/images/media/team/badge/jgfos01591988326.png",
        },
        {
          homeTeam: "Argentina",
          flagHomeTeamURL:
            "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
          awayTeam: "Brasil",
          flagAwayTeamURL:
            "https://www.thesportsdb.com/images/media/team/badge/jgfos01591988326.png",
        },
        {
          homeTeam: "Argentina",
          flagHomeTeamURL:
            "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
          awayTeam: "Brasil",
          flagAwayTeamURL:
            "https://www.thesportsdb.com/images/media/team/badge/jgfos01591988326.png",
        },
        {
          homeTeam: "Argentina",
          flagHomeTeamURL:
            "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
          awayTeam: "Brasil",
          flagAwayTeamURL:
            "https://www.thesportsdb.com/images/media/team/badge/jgfos01591988326.png",
        },
      ],
    },
    {
      groupName: "Group B",
      matches: [
        {
          homeTeam: "Inglaterra",
          flagHomeTeamURL:
            "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
          awayTeam: "Alemania",
          flagAwayTeamURL:
            "https://www.thesportsdb.com/images/media/team/badge/jgfos01591988326.png",
        },
        {
          homeTeam: "Argentina",
          flagHomeTeamURL:
            "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
          awayTeam: "Brasil",
          flagAwayTeamURL:
            "https://www.thesportsdb.com/images/media/team/badge/jgfos01591988326.png",
        },
        {
          homeTeam: "Argentina",
          flagHomeTeamURL:
            "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
          awayTeam: "Brasil",
          flagAwayTeamURL:
            "https://www.thesportsdb.com/images/media/team/badge/jgfos01591988326.png",
        },
        {
          homeTeam: "Argentina",
          flagHomeTeamURL:
            "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
          awayTeam: "Brasil",
          flagAwayTeamURL:
            "https://www.thesportsdb.com/images/media/team/badge/jgfos01591988326.png",
        },
        {
          homeTeam: "Argentina",
          flagHomeTeamURL:
            "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
          awayTeam: "Brasil",
          flagAwayTeamURL:
            "https://www.thesportsdb.com/images/media/team/badge/jgfos01591988326.png",
        },
        {
          homeTeam: "Argentina",
          flagHomeTeamURL:
            "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png",
          awayTeam: "Brasil",
          flagAwayTeamURL:
            "https://www.thesportsdb.com/images/media/team/badge/jgfos01591988326.png",
        },
      ],
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p>FIXTURE</p>
      </header>

      {dataGroups.map((group, i) => (
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

      <button onClick={logout}>LogOut</button>
      <p>This is a protected Route</p>
    </div>
  );
};

export default GroupFase;

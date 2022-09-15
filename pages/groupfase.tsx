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

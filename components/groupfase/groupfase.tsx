import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
// import { useAuth } from "../context/AuthContext";
// import { getCurrentUser } from "../firebase/users";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Match } from "./Match";
import { getFaseGroupMatches } from "../../services/getFaseGroupMatches";

const GroupFase: NextPage = () => {
  const [groups, SetGroups] = useState([]);
  const getGroups = async () => {
    const dataGroups = await getFaseGroupMatches();
    SetGroups(dataGroups);
  };

  console.log(groups);

  useEffect(() => {
    getGroups();
  }, []);

  return (
    <div id="grupo1" className="">
      {groups?.map((group, i) => (
        <div style={{ width: "50%" }}>
          <Accordion square={false} key={i} style={{ margin: "10px 0px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ minHeight: "5%", height: "2rem" }}
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
        </div>
      ))}
    </div>
  );
};

export default GroupFase;

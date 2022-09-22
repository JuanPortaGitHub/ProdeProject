import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Typography } from "@mui/material";

import { Match } from "./Match";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getFaseGroupMatches } from "../../services/getFaseGroupMatches";
import { GET_FASE_GROUP_MATCHES } from "../../graphql/queries/infoMatchesQueries";

const GroupFase: NextPage = () => {
  const [groups, setGroups] = useState([]);
  const { loading, error, data } = useQuery(GET_FASE_GROUP_MATCHES);
  const getGroups = async () => {
    const dataGroups = await getFaseGroupMatches();
    setGroups(dataGroups);
  };

  console.log(data ? data : null);
  useEffect(() => {
    if (groups == []) {
      console.log(groups);
      getGroups();
    }
  }, []);

  console.log(loading);

  return (
    <div id="grupo1">
      {groups?.map((group, i) => (
        <div key={i} style={{ width: "50%" }}>
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

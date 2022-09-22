import type { NextPage } from "next";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import { Match } from "../components/groupfase/Match";
import { getFaseGroupMatches } from "../services/getFaseGroupMatches";
import {
  StyledPaperContainer,
  StyledAccordionSummary,
  StyledAccordionDetails,
} from "../styles/groupfase";
import { GET_FASE_GROUP_MATCHES } from "../graphql/queries/infoMatchesQueries";
import { matchesGroupBuilder } from "../utils/matchesGroupBuilder";

const GroupFase: NextPage = () => {
  const [groups, SetGroups] = useState([]);
  const { loading, error, data } = useQuery(GET_FASE_GROUP_MATCHES);

  // let dataGroups = [];
  const getGroups = (data) => {
    // const dataGroups = await getFaseGroupMatches();
    const dataGroups = matchesGroupBuilder(data);
    console.log(dataGroups);
    SetGroups(dataGroups);
  };

  useEffect(() => {
    if (data) {
      getGroups(data.GetAllInfoPartidos);
    }
  }, [data]);

  console.log(loading);
  if (loading) return <h2 style={{ color: "white" }}>Loading...</h2>;

  return (
    // <div className="App">
    <StyledPaperContainer>
      {groups?.map((group, i) => (
        <Accordion
          // sx={{ height: 200, width: "50%" }}s
          key={i}
          // style={{ margin: "10px 0px", height: 200, width: "50%" }}
        >
          <StyledAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            // id="panel1a-header"
          >
            <Typography>
              {group.groupName}
              {group.badges.map((badge) => (
                <Image src={badge} alt="badge" width={25} height={25} />
              ))}
            </Typography>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            {group.matches.map((match, i) => (
              <Match
                key={i}
                homeTeam={match.homeTeam}
                flagHomeTeam={match.flagHomeTeamURL}
                awayTeam={match.awayTeam}
                flagAwayTeam={match.flagAwayTeamURL}
              />
            ))}
          </StyledAccordionDetails>
        </Accordion>
      ))}
    </StyledPaperContainer>
  );
};

export default GroupFase;

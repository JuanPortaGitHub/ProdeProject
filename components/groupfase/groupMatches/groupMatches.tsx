import { CircularProgress } from "@mui/material";
import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { Match } from "../Match";
import { StyledPaper, StyledMatchesContainer, StyledMatches } from "./styled";
import { GET_MATCHES_BY_GROUP } from "../../../graphql/queries/infoMatchesQueries";

const GroupMatches: NextPage = ({ group }) => {
  const [groups, setGroups] = useState([]);
  const { loading, error, data } = useQuery(GET_MATCHES_BY_GROUP, {
    variables: { grupo: group },
  });

  const getGroups = (matches) => {
    console.log(matches);
    setGroups(matches);
  };

  useEffect(() => {
    if (data) {
      getGroups(data.GetMatchesByGroup);
    }
  }, [data]);

  const flag =
    "https://www.thesportsdb.com/images/media/team/badge/rrxutp1455461072.png";

  return (
    <StyledMatchesContainer id="grupo1">
      <StyledPaper elevation={3}>
        {loading && <CircularProgress />}
        {!loading && (
          <StyledMatches>
            {groups?.map((group, i) => (
              <Match
                key={i}
                homeTeam={group.EquipoLocal.nombre_equipo}
                flagHomeTeam={flag}
                awayTeam={group.EquipoVisitante.nombre_equipo}
                flagAwayTeam={flag}
              />
            ))}
          </StyledMatches>
        )}
      </StyledPaper>
    </StyledMatchesContainer>
  );
};

export default GroupMatches;

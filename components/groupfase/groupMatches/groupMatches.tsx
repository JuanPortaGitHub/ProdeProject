import { CircularProgress } from "@mui/material";
import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { motion } from "framer-motion";

import { Match } from "../Match";
import { StyledMatchesContainer, StyledMatches, StyledMatch } from "./styled";
import { GET_MATCHES_BY_GROUPFASE_GROUP } from "../../../graphql/queries/infoMatchesQueries";
import { getFlagUrl } from "../../../utils/getFlagUrl";

const GroupMatches: NextPage = ({ teamsGroup, userGroup, userId }) => {
  const [groups, setGroups] = useState([]);
  const { loading, error, data } = useQuery(GET_MATCHES_BY_GROUPFASE_GROUP, {
    variables: { grupo: teamsGroup, userId: userId, grupoId: +userGroup },
  });

  const getGroups = (matches) => {
    setGroups(matches);
  };

  console.log(data);

  useEffect(() => {
    if (data) {
      getGroups(data.GetMatchesByGroup);
    }
  }, [data]);

  return (
    <StyledMatchesContainer id="grupo1">
      {loading && <CircularProgress />}
      {!loading && (
        <StyledMatches>
          {groups?.map((group, i) => (
            <StyledMatch
              key={i}
              as={motion.div}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Match
                key={i}
                homeTeam={group.EquipoLocal.nombre_equipo}
                flagHomeTeam={getFlagUrl(group.EquipoLocal.nombre_equipo)}
                awayTeam={group.EquipoVisitante.nombre_equipo}
                flagAwayTeam={getFlagUrl(group.EquipoVisitante.nombre_equipo)}
              />
            </StyledMatch>
          ))}
        </StyledMatches>
      )}
    </StyledMatchesContainer>
  );
};

export default GroupMatches;

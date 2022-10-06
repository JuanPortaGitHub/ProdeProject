import { CircularProgress } from "@mui/material";
import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { motion } from "framer-motion";

import { Match } from "../Match";
import {
  StyledMatchesContainer,
  StyledMatches,
  StyledMatch,
  StyledDate,
  StyledContainer,
  Styledh4,
  StyledButton,
  StyledButtonContainer,
} from "./styled";
import { GET_MATCHES_BY_GROUPFASE_GROUP } from "../../../graphql/queries/infoMatchesQueries";
import { CREATE_PRODES } from "../../../graphql/queries/prodesQueries";
import { getFlagUrl } from "../../../utils/getFlagUrl";
import { getArrayToSubmit } from "../../../utils/getArrayToSubmit";
import { useForm } from "react-hook-form";

const GroupMatches: NextPage = ({ teamsGroup, userGroup, userId }) => {
  const [groups, setGroups] = useState([]);
  const { handleSubmit, setFocus, register, control, formState } = useForm({
    shouldUnregister: true,
  });
  const { loading, error, data, refetch } = useQuery(
    GET_MATCHES_BY_GROUPFASE_GROUP,
    {
      variables: { grupo: teamsGroup, grupoId: +userGroup, userId: userId },
    }
  );
  const [create_Prodes, { error: createError }] = useMutation(CREATE_PRODES, {
    onCompleted(data) {
      console.log("data", data);
    },
    onError(error) {
      console.log("error", error);
    },
  });

  const getGroups = (matches) => {
    setGroups(matches);
  };

  // console.log(loading, data);

  const onSubmit = async (formData) => {
    const arrayToSubmit = getArrayToSubmit(groups, formData);

    await create_Prodes({
      variables: {
        userId: userId,
        grupoId: +userGroup,
        prodeMatchInfo: arrayToSubmit,
      },
    });

    await refetch();
  };

  useEffect(() => {
    if (data) {
      getGroups(data.GetMatchesByGroup);
    }
  }, [data]);

  return (
    <>
      <StyledContainer>
        <StyledMatchesContainer id="grupo1">
          {loading && <CircularProgress />}
          {!loading && (
            <StyledMatches>
              <form onSubmit={handleSubmit(onSubmit)}>
                {groups?.map((group: any, i) => (
                  <StyledMatch
                    key={i}
                    as={motion.div}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Match
                      id={group.id}
                      homeTeam={group.EquipoLocal.nombre_equipo}
                      flagHomeTeam={getFlagUrl(group.EquipoLocal.nombre_equipo)}
                      awayTeam={group.EquipoVisitante.nombre_equipo}
                      flagAwayTeam={getFlagUrl(
                        group.EquipoVisitante.nombre_equipo
                      )}
                      userHomeScore={group.Prode_Partido_Usuario?.Goles_Local}
                      userAwayScore={
                        group.Prode_Partido_Usuario?.Goles_Visitante
                      }
                      matchDate={group.DiaHora}
                      register={register}
                      control={control}
                    />
                  </StyledMatch>
                ))}
                <StyledButtonContainer>
                  {groups.length > 0 && (
                    <StyledButton type="submit">Enviar Prode</StyledButton>
                  )}
                </StyledButtonContainer>
              </form>
            </StyledMatches>
          )}
        </StyledMatchesContainer>
      </StyledContainer>
    </>
  );
};

export default GroupMatches;

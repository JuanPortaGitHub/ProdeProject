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
} from "./styled";
import { GET_MATCHES_BY_GROUPFASE_GROUP } from "../../../graphql/queries/infoMatchesQueries";
import { CREATE_PRODES } from "../../../graphql/queries/prodesQueries";
import { getFlagUrl } from "../../../utils/getFlagUrl";
import { getArrayToSubmit } from "../../../utils/getArrayToSubmit";
import { useForm } from "react-hook-form";

const GroupMatches: NextPage = ({ teamsGroup, userGroup, userId }) => {
  const [groups, setGroups] = useState([]);
  const {
    handleSubmit,
    setFocus,
    register,
    control,
    reset,
    watch,
    formState,
    getValues,
    setValue,
  } = useForm({ shouldUnregister: true });
  // const [focus, setFocus] = useState(false);
  const { loading, error, data } = useQuery(GET_MATCHES_BY_GROUPFASE_GROUP, {
    variables: { grupo: teamsGroup, grupoId: +userGroup, userId: userId },
  });
  const [create_Prodes, { error: createError }] = useMutation(CREATE_PRODES, {
    onCompleted(data) {
      console.log("data", data);
      // createUserHandler();
    },
    onError(error) {
      console.log("error", error);
    },
  });

  console.log(data);

  const getGroups = (matches) => {
    setGroups(matches);
  };

  const onSubmit = async (formData) => {
    const arrayToSubmit = getArrayToSubmit(groups, formData);

    console.log(userId, +userGroup, arrayToSubmit);

    // console.log(formData);

    await create_Prodes({
      variables: {
        userId: userId,
        grupoId: +userGroup,
        ProdeMatchInfo: arrayToSubmit,
      },
    });
  };

  const array = [
    {
      info_PartidosId: 1543883,
      Goles_Local: "2",
      Goles_Visitante: "2",
      Ganador: "",
      Tiempo_Extra: false,
      Penales: false,
    },
    {
      info_PartidosId: 1543881,
      Goles_Local: "3",
      Goles_Visitante: "3",
      Ganador: "",
      Tiempo_Extra: false,
      Penales: false,
    },
    {
      info_PartidosId: 1543894,
      Goles_Local: "5",
      Goles_Visitante: "6",
      Ganador: "",
      Tiempo_Extra: false,
      Penales: false,
    },
    {
      info_PartidosId: 1543895,
      Goles_Local: "5",
      Goles_Visitante: "6",
      Ganador: "",
      Tiempo_Extra: false,
      Penales: false,
    },
    {
      info_PartidosId: 1543907,
      Goles_Local: "5",
      Goles_Visitante: "9",
      Ganador: "",
      Tiempo_Extra: false,
      Penales: false,
    },
    {
      info_PartidosId: 1543908,
      Goles_Local: "5",
      Goles_Visitante: "2",
      Ganador: "",
      Tiempo_Extra: false,
      Penales: false,
    },
  ];

  useEffect(() => {
    if (data) {
      getGroups(data.GetMatchesByGroup);
    }
  }, [data]);

  const onClickFocusHandler = (name) => {
    console.log(name);
  };

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
                      // focus={focus}
                      setFocus={setFocus}
                      // autofocus={focus}
                    />
                  </StyledMatch>
                ))}
                <input type="submit" />
              </form>
            </StyledMatches>
          )}
        </StyledMatchesContainer>
      </StyledContainer>
    </>
  );
};

export default GroupMatches;

import { Avatar, CircularProgress } from "@mui/material";
import type { NextPage } from "next";
import React, { useState, useEffect, useContext } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { motion } from "framer-motion";

import { Match } from "../../Match";
import {
  StyledMatchesContainer,
  StyledMatches,
  StyledMatch,
  StyledDate,
  StyledContainer,
  Styledh4,
  StyledButton,
  StyledButtonContainer,
  StyledResultText,
} from "./styled";
import ToastContext from "../../../context/toastContext";
import { GET_MATCHES_BY_GROUPFASE_GROUP } from "../../../graphql/queries/infoMatchesQueries";
import { CREATE_PRODES } from "../../../graphql/queries/prodesQueries";
import { getFlagUrl } from "../../../utils/getFlagUrl";
import { getArrayToSubmit } from "../../../utils/getArrayToSubmit";
import { useForm } from "react-hook-form";
import PersonIcon from "@mui/icons-material/Person";
import Image from "next/image";
import LoadingIcon from "../../common/loadingIconFolder/loading";

interface Props {
  teamsGroup: string;
  userGroup: number;
  user: string;
  showDate: boolean;
  isEditing: boolean;
}
const Matches = ({
  teamsGroup,
  userGroup,
  user,
  showDate,
  isEditing,
}: Props) => {
  const [groups, setGroups] = useState([]);
  const toast = useContext(ToastContext);
  const [errorCreate, setErrorCreate] = useState("");
  const [dataCreated, setDataCreated] = useState("");
  const { handleSubmit, setFocus, register, control, formState } = useForm({
    shouldUnregister: true,
  });
  const { loading, error, data, refetch } = useQuery(
    GET_MATCHES_BY_GROUPFASE_GROUP,
    {
      variables: { grupo: teamsGroup, grupoId: +userGroup, userId: user?.id },
    }
  );
  const [
    create_Prodes,
    { error: createError, loading: createLoading, data: createdData },
  ] = useMutation(CREATE_PRODES, {
    onCompleted(data) {
      toast.success(`Prode para el ${teamsGroup} grupo enviado`);
    },
    onError(error) {
      console.log("error", error);
      toast.error(error.message);
    },
  });

  const getGroups = (matches) => {
    setGroups(matches);
  };

  const onSubmit = async (formData) => {
    const arrayToSubmit = getArrayToSubmit(groups, formData);

    await create_Prodes({
      variables: {
        userId: user.id,
        grupoId: +userGroup,
        prodeMatchInfo: arrayToSubmit,
      },
    });

    await refetch();
  };

  useEffect(() => {
    if (data) {
      getGroups(data.GetMatchesByGroup);
      setErrorCreate("");
      setDataCreated("");
    }
  }, [data]);

  const playerName =
    user?.name?.substring(0, user?.name?.indexOf(" ")) == ""
      ? user?.name
      : user?.name?.substring(0, user?.name?.indexOf(" "));

  return (
    <>
      <StyledContainer>
        <StyledMatchesContainer id="grupo1">
          {loading && <LoadingIcon />}
          {!loading && (
            <StyledMatches>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                {user?.name && (
                  <>
                    <Avatar>
                      {user.image ? (
                        <Image
                          src={user.image}
                          alt="avatar"
                          width={50}
                          height={50}
                        />
                      ) : (
                        <PersonIcon />
                      )}
                    </Avatar>

                    <h3 style={{ color: "white", alignSelf: "center" }}>
                      Prode de {` `}
                      {playerName}
                    </h3>
                  </>
                )}
              </div>
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
                      showDate={showDate}
                      isEditing={isEditing}
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
                  {groups.length > 0 && isEditing && (
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

export default Matches;

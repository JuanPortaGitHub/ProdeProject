import { Avatar, CircularProgress } from "@mui/material";
import type { NextPage } from "next";
import React, { useState, useEffect, useContext } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { motion } from "framer-motion";
import { Match } from "./Match/index";
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
import ToastContext from "../../context/toastContext";
import { GET_MATCHES_BY_GROUPFASE_GROUP } from "../../graphql/queries/infoMatchesQueries";
import { CREATE_PRODES } from "../../graphql/queries/prodesQueries";
import { getFlagUrl } from "../../utils/getFlagUrl";
import { getArrayToSubmit } from "../../utils/getArrayToSubmit";
import { filterNotStartedMatches } from "../../utils/filterNotStartedMatches";
import { useForm, useWatch } from "react-hook-form";
import PersonIcon from "@mui/icons-material/Person";
import Image from "next/image";
import LoadingIcon from "../common/loadingIconFolder/loading";
import { useRouter } from "next/router";

interface Props {
  instance: string;
  userGroup: number;
  user: {
    email: string;
    id: string;
    name?: string;
    image: string;
    nombreUsuario?: string;
  };
  showDate: boolean;
  isEditing: boolean;
}
const Matches = ({ instance, userGroup, user, showDate, isEditing }: Props) => {
  const [groups, setGroups] = useState([]);
  const { pathname } = useRouter();
  const toast = useContext(ToastContext);
  const [errorCreate, setErrorCreate] = useState("");
  const [dataCreated, setDataCreated] = useState("");

  const { handleSubmit, setFocus, setValue, register, control, formState } =
    useForm({
      shouldUnregister: true,
    });
  const watch = useWatch({
    control,
  });
  const loading = false;

  // const { loading, error, data, refetch } = useQuery(
  //   GET_MATCHES_BY_GROUPFASE_GROUP,
  //   {
  //     variables: { grupo: teamsGroup, grupoId: +userGroup, userId: user?.id },
  //   }
  // );

  const data = {
    GetMatchesByGroup: [
      {
        id: 123456,
        EquipoLocal: { nombre_equipo: "Argentina" },
        EquipoVisitante: { nombre_equipo: "Australia" },
        Prode_Partido_Usuario: {
          Goles_Local: "3",
          Goles_Visitante: "1",
          Ganador: "Argentina",
          Tiempo_Extra: false,
          Penales: false,
        },
        DiaHora: 1669943764,
      },
      {
        id: 123457,
        EquipoLocal: { nombre_equipo: "USA" },
        EquipoVisitante: { nombre_equipo: "Netherlands" },
        Prode_Partido_Usuario: {
          Goles_Local: "1",
          Goles_Visitante: "2",
          Ganador: "Netherlands",
          Tiempo_Extra: true,
          Penales: false,
        },
        DiaHora: 1669943764,
      },
    ],
  };

  const data2 = {
    GetMatchesByGroup: [
      {
        id: 123456,
        EquipoLocal: { nombre_equipo: "Argentina" },
        EquipoVisitante: { nombre_equipo: "Australia" },
        Prode_Partido_Usuario: {
          Goles_Local: "3",
          Goles_Visitante: "2",
          Ganador: "Australia",
          Tiempo_Extra: false,
          Penales: false,
        },
        DiaHora: 1669943764,
      },
      {
        id: 123457,
        EquipoLocal: { nombre_equipo: "USA" },
        EquipoVisitante: { nombre_equipo: "Netherlands" },
        Prode_Partido_Usuario: {
          Goles_Local: "2",
          Goles_Visitante: "2",
          Ganador: "Netherlands",
          Tiempo_Extra: true,
          Penales: false,
        },
        DiaHora: 1669943764,
      },
    ],
  };

  const [
    create_Prodes,
    { error: createError, loading: createLoading, data: createdData },
  ] = useMutation(CREATE_PRODES, {
    onCompleted(data) {
      toast.success(`Prode ${instance} enviado`);
    },
    onError(error) {
      console.log("error", error);
      toast.error(error.message);
    },
  });

  const getGroups = (matches) => {
    if (pathname == "/mi-prode/tabla-de-posiciones") {
      const notStartedMatches = filterNotStartedMatches(matches);
      setGroups(notStartedMatches);
    }
    if (pathname == "/mi-prode/eliminacion-directa") {
      setGroups(matches);
    }
  };

  const onSubmit = async (formData) => {
    console.log(formData);
    // const arrayToSubmit = getArrayToSubmit(groups, formData);

    // await create_Prodes({
    //   variables: {
    //     userId: user.id,
    //     grupoId: +userGroup,
    //     prodeMatchInfo: arrayToSubmit,
    //   },
    // });

    // await refetch();
  };

  useEffect(() => {
    if (data) {
      getGroups(data.GetMatchesByGroup);
      setErrorCreate("");
      setDataCreated("");
    }
  }, []);
  // }, [data]);

  let playerName =
    user?.name?.substring(0, user?.name?.indexOf(" ")) == ""
      ? user?.name
      : user?.name?.substring(0, user?.name?.indexOf(" "));

  if (playerName == undefined) {
    playerName =
      user?.nombreUsuario?.substring(0, user?.nombreUsuario?.indexOf(" ")) == ""
        ? user?.nombreUsuario
        : user?.nombreUsuario?.substring(0, user?.nombreUsuario?.indexOf(" "));
  }

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
                {user?.nombreUsuario && (
                  <>
                    <Avatar>
                      {user.imagenUsuario ? (
                        <Image
                          src={user.imagenUsuario}
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
                    key={group.id}
                    as={motion.div}
                    // whileHover={{ scale: 1.1 }}
                    // whileTap={{ scale: 0.95 }}
                  >
                    <Match
                      id={group.id}
                      register={register}
                      userGroup={+userGroup}
                      showDate={showDate}
                      isEditing={isEditing}
                      watch={watch}
                      setValue={setValue}
                      penales={group.Prode_Partido_Usuario?.Penales}
                      tiempoExtra={group.Prode_Partido_Usuario?.Tiempo_Extra}
                      ganador={group.Prode_Partido_Usuario?.Ganador}
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

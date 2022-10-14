import { useQuery } from "@apollo/client";
import { Avatar, CircularProgress, Grid } from "@mui/material";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useContext } from "react";
import { GET_MATCHES_BY_GROUPFASE_GROUP } from "../../graphql/queries/infoMatchesQueries";
import {
  StyledContainer,
  StyledDate,
  StyledMatch,
  StyledScore,
} from "../../styles/posicionesgrupo";
import PersonIcon from "@mui/icons-material/Person";
import { t } from "../../utils/dictionary";
import { getFlagUrl } from "../../utils/getFlagUrl";
import TeamContainer from "../common/teamContainer";
import ToastContext from "../../context/toastContext";

export const Matches = ({
  currentGroup,
  selectedPlayer,
  selectedUserGrupo,
}) => {
  const toast = useContext(ToastContext);
  const { loading, error, data, refetch } = useQuery(
    GET_MATCHES_BY_GROUPFASE_GROUP,
    // { onError: {toast.error('No se puede ver el prode')} },
    {
      variables: {
        grupo: currentGroup,
        grupoId: +selectedUserGrupo,
        userId: selectedPlayer.id,
      },
      onError: () => toast.error("No se puede ver el prode"),
    }
  );

  console.log("currentGroup", currentGroup);
  console.log("selectedPlayer", selectedPlayer);
  console.log("selectedUserGrupo", selectedUserGrupo);
  console.log("DATAAAA", data);

  return (
    <StyledContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Avatar>
          {selectedPlayer.image ? (
            <Image
              src={selectedPlayer.image}
              alt="avatar"
              width={50}
              height={50}
            />
          ) : (
            <PersonIcon />
          )}
        </Avatar>
        <h3 style={{ color: "white", alignSelf: "center" }}>
          Prode de{" "}
          {selectedPlayer.name.substring(0, selectedPlayer.name.indexOf(" "))}
        </h3>
      </div>

      {loading && <CircularProgress color="inherit" />}
      {data &&
        data.GetMatchesByGroup.map((match: any) => (
          <>
            <StyledMatch
              key={match.id}
              as={motion.div}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs={12} md={4.5}>
                  <TeamContainer
                    team={t(match.EquipoLocal.nombre_equipo)}
                    flag={getFlagUrl(match.EquipoLocal.nombre_equipo)}
                    home={true}
                  />
                </Grid>
                <Grid item xs={12} md={1}>
                  <StyledScore>
                    {match.Prode_Partido_Usuario.Goles_Local}
                  </StyledScore>
                </Grid>
                <Grid item xs={12} md={1}>
                  VS
                </Grid>
                <Grid item xs={12} md={1}>
                  <StyledScore>
                    {match.Prode_Partido_Usuario.Goles_Visitante}
                  </StyledScore>
                </Grid>
                <Grid item xs={12} md={4.5}>
                  <TeamContainer
                    team={t(match.EquipoVisitante.nombre_equipo)}
                    flag={getFlagUrl(match.EquipoVisitante.nombre_equipo)}
                    home={false}
                  />
                </Grid>
              </Grid>
            </StyledMatch>
          </>
        ))}
    </StyledContainer>
  );
};

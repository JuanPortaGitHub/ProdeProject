import React, { useState } from "react";
import {
  Avatar,
  CircularProgress,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  ListContainer,
  StyledItem,
  StyledListItem,
  StyledPlayerName,
  StyledPoints,
  StyledRanking,
  StyledTitle,
  StyledGroupDescription,
  StyledGroupAmount,
  StyledGroupName,
  StyledGridItem,
  StyledListAvatar,
  StyledAvatar,
} from "./styled";
import PersonIcon from "@mui/icons-material/Person";
import {
  GET_GROUP_DETAIL,
  GET_RANKING_GROUP,
} from "../../graphql/queries/groupQueries";

import { useQuery } from "@apollo/client";
import Image from "next/image";
import { motion } from "framer-motion";
import LoadingIcon from "../common/loadingIconFolder/loading";

export const GroupInfoDetails = ({ selectedGrupo, selectPlayerHandler }) => {
  const {
    loading: loadingDetails,
    error: errorDetails,
    data: dataDetails,
    refetch,
  } = useQuery(GET_RANKING_GROUP, {
    variables: { grupoId: +selectedGrupo },
  });

  refetch({ grupoId: +selectedGrupo });

  return (
    <>
      {loadingDetails && <LoadingIcon />}
      {errorDetails && <h3>No se pudo cargar detalles de grupo</h3>}
      {dataDetails && dataDetails.GetGrupoById !== null && (
        <ListContainer>
          <StyledTitle>POSICIONES</StyledTitle>
          <StyledGroupName>
            {dataDetails.GetRankingGroup.nombreGrupo}
          </StyledGroupName>
          <StyledGroupDescription>
            {dataDetails.GetRankingGroup.sloganGrupo}
          </StyledGroupDescription>
          <StyledGroupAmount>
            Monto a jugar: $ {dataDetails.GetRankingGroup.montoGrupo}
          </StyledGroupAmount>
          <StyledGridItem item xs={12} md={6}>
            <List>
              {dataDetails.GetRankingGroup.PosicionesUsuarios.map(
                (jugador: any, i) => (
                  <div
                    key={jugador.id}
                    onClick={() => selectPlayerHandler(jugador)}
                  >
                    <StyledItem
                      as={motion.div}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ListItem key={jugador.id}>
                        <StyledRanking>{i + 1}</StyledRanking>
                        <StyledListAvatar>
                          <StyledAvatar>
                            {jugador.imagenUsuario ? (
                              <Image
                                src={jugador.imagenUsuario}
                                alt={"foto-usuario"}
                                layout="fill"
                              />
                            ) : (
                              <PersonIcon />
                            )}
                          </StyledAvatar>
                        </StyledListAvatar>
                        <StyledListItem>
                          <StyledPlayerName>
                            {jugador.nombreUsuario}
                          </StyledPlayerName>
                          <StyledPoints>{jugador.sumaDePuntos} </StyledPoints>
                          <StyledPlayerName>Pts</StyledPlayerName>
                        </StyledListItem>
                      </ListItem>
                    </StyledItem>
                  </div>
                )
              )}
            </List>
          </StyledGridItem>
        </ListContainer>
      )}
    </>
  );
};

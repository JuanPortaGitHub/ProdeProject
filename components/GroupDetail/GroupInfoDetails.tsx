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
import { GET_GROUP_DETAIL } from "../../graphql/queries/groupQueries";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { motion } from "framer-motion";
import LoadingIcon from "../common/loadingIconFolder/loading";

export const GroupInfoDetails = ({ selectedGrupo, selectPlayerHandler }) => {
  const {
    loading: loadingDetails,
    error: errorDetails,
    data: dataDetails,
  } = useQuery(GET_GROUP_DETAIL, {
    variables: { getGrupoByIdId: selectedGrupo },
  });

  return (
    <>
      {loadingDetails && <LoadingIcon />}
      {errorDetails && <h3>No se pudo cargar detalles de grupo</h3>}
      {dataDetails && dataDetails.GetGrupoById !== null && (
        <ListContainer>
          <StyledTitle>POSICIONES</StyledTitle>
          <StyledGroupName>{dataDetails.GetGrupoById.nombre}</StyledGroupName>
          <StyledGroupDescription>
            {dataDetails.GetGrupoById.slogan}(los verdaderos puntos se
            actualizaran cuando comience el torneo)
          </StyledGroupDescription>
          <StyledGroupAmount>
            Monto a jugar: $ {dataDetails.GetGrupoById.monto}
          </StyledGroupAmount>
          <StyledGridItem item xs={12} md={6}>
            <List>
              {dataDetails.GetGrupoById.usuarios.map((jugador: any, i) => (
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
                          {jugador.image ? (
                            <Image
                              src={jugador.image}
                              alt={"foto-usuario"}
                              layout="fill"
                            />
                          ) : (
                            <PersonIcon />
                          )}
                        </StyledAvatar>
                      </StyledListAvatar>
                      <StyledListItem>
                        <StyledPlayerName>{jugador.name}</StyledPlayerName>
                        <StyledPoints>{40 - i} </StyledPoints>
                        <StyledPlayerName>Pts</StyledPlayerName>
                      </StyledListItem>
                    </ListItem>
                  </StyledItem>
                </div>
              ))}
            </List>
          </StyledGridItem>
        </ListContainer>
      )}
    </>
  );
};

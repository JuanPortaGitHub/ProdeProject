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
import { StyledItem } from "./styled";
import PersonIcon from "@mui/icons-material/Person";
import { GET_GROUP_DETAIL } from "../../graphql/queries/groupQueries";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { motion } from "framer-motion";

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
      {loadingDetails && <CircularProgress color="inherit" />}
      {errorDetails && <h3>No se pudo cargar detalles de grupo</h3>}
      {dataDetails && dataDetails.GetGrupoById !== null && (
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 2, mb: 2 }} variant="h6" component="div">
            Grupo: {dataDetails.GetGrupoById.nombre}
          </Typography>
          <Typography sx={{ mt: 2, mb: 2 }} variant="h8" component="div">
            &quot;{dataDetails.GetGrupoById.slogan}&quot;
          </Typography>
          <Typography sx={{ mt: 2, mb: 2 }} variant="h8" component="div">
            Monto a jugar: $ {dataDetails.GetGrupoById.monto}
          </Typography>
          <List dense={true}>
            {dataDetails.GetGrupoById.usuarios.map((jugador: any) => (
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
                    <ListItemAvatar>
                      <Avatar>
                        {jugador.image ? (
                          <Image
                            src={jugador.image}
                            alt={"foto-usuario"}
                            layout="fill"
                          />
                        ) : (
                          <PersonIcon />
                        )}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={jugador.name}
                      secondary={"Puntaje: 40 puntos"}
                    />
                  </ListItem>
                </StyledItem>
              </div>
            ))}
          </List>
        </Grid>
      )}
    </>
  );
};

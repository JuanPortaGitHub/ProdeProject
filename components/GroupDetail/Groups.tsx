import React from "react";
import {
  StyledGroupsSection,
  StyledMainComponent,
} from "../../styles/posicionesgrupo";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useQuery } from "@apollo/client";
import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { GET_USER_GROUPS } from "../../graphql/queries/userQueries";
import { GroupInfoDetails } from "./GroupInfoDetails";
import { motion } from "framer-motion";

export const Groups = ({
  selectPlayerHandler,
  selectedUserGrupo,
  setSelectedUserGrupo,
}) => {
  const { data: session } = useSession();

  const { loading, error, data } = useQuery(GET_USER_GROUPS, {
    variables: { getUserByIdId: session?.id },
  });

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedUserGrupo(event.target.value as string);
  };
  return (
    <StyledMainComponent>
      {loading && <CircularProgress color="inherit" />}
      {data && (
        <>
          <>
            <InputLabel>Mis grupos</InputLabel>
            <Select value={selectedUserGrupo} onChange={handleChange} fullWidth>
              {data.GetUserById.Grupos.map((grupo: any) => (
                <MenuItem key={grupo.id} value={grupo.id}>
                  {grupo.nombre}
                </MenuItem>
              ))}
            </Select>
          </>
        </>
      )}
      {error && <h3>{error.message}</h3>}
      {selectedUserGrupo && (
        <GroupInfoDetails
          selectedGrupo={selectedUserGrupo}
          selectPlayerHandler={selectPlayerHandler}
        />
      )}
    </StyledMainComponent>
  );
};

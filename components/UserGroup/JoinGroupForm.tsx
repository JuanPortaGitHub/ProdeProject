import { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { useMutation } from "@apollo/client";
import classes from "../auth/authform.module.css";
import { Button, CircularProgress, Input } from "@mui/material";
import { ADD_USER_GROUP } from "../../graphql/queries/groupQueries";
import {
  StyledButton,
  StyledControl,
  StyledInput,
  StyledInputLabel,
  StyledMainComponent,
  StyledCardTitle,
} from "./syled";

const JoinGroupForm = () => {
  const groupName = useRef();
  const groupPassword = useRef();

  const { data: session } = useSession();

  const [JoinUserToGroup, { data, loading, error }] = useMutation(
    ADD_USER_GROUP,
    {
      onCompleted(data) {
        console.log("dataaa", data);
        groupName.current.value = "";
        groupPassword.current.value = "";
      },
      onError(error) {
        console.log("errorrr", error);
      },
    }
  );
  async function submitHandler(event: { preventDefault: () => void }) {
    event.preventDefault();
    JoinUserToGroup({
      variables: {
        nombre: groupName.current.value,
        claveGrupo: groupPassword.current.value,
        idUser: session?.id,
      },
    });
  }

  return (
    <StyledMainComponent>
      <StyledCardTitle>Únete a un grupo ya creado</StyledCardTitle>
      <form onSubmit={submitHandler}>
        <StyledControl>
          <StyledInputLabel htmlFor="nombre">Nombre Grupo</StyledInputLabel>
          <StyledInput type="text" id="text" required ref={groupName} />
        </StyledControl>
        <StyledControl>
          <StyledInputLabel htmlFor="password">
            Contraseña Ingreso
          </StyledInputLabel>
          <StyledInput type="text" id="password" required ref={groupPassword} />
        </StyledControl>
        <div>
          {loading ? (
            <CircularProgress color="inherit" />
          ) : (
            <>
              <StyledButton>Unirse a grupo</StyledButton>
            </>
          )}
          {data && <h3>Te uniste al grupo {data.addUserToGrupo.nombre}!!</h3>}
          {error && <h3>{error.message}</h3>}
        </div>
      </form>
    </StyledMainComponent>
  );
};

export default JoinGroupForm;

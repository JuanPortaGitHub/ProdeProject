import { useRef, useState, useContext } from "react";
import { useSession } from "next-auth/react";
import { useMutation } from "@apollo/client";
import classes from "../auth/authform.module.css";
import { Button, CircularProgress, Input } from "@mui/material";
import { ADD_USER_GROUP } from "../../graphql/queries/groupQueries";
import ToastContext from "../../context/toastContext";
import {
  StyledButton,
  StyledControl,
  StyledInput,
  StyledInputLabel,
  StyledMainComponent,
  StyledCardTitle,
  StyledResultText,
} from "./syled";

const JoinGroupForm = () => {
  const [disableFields, setDisableFields] = useState(false);
  const toast = useContext(ToastContext);
  const groupName = useRef();
  const groupPassword = useRef();

  const { data: session } = useSession();

  const [JoinUserToGroup, { data, loading, error }] = useMutation(
    ADD_USER_GROUP,
    {
      onCompleted(data) {
        toast.success(`Te uniste al grupo ${data.addUserToGrupo.nombre}!`);
        setDisableFields(false);
        console.log("data", data);
        groupName.current.value = "";
        groupPassword.current.value = "";
      },
      onError(error) {
        toast.error(error.message);
        setDisableFields(false);
        console.log("error", error);
      },
    }
  );
  async function submitHandler(event: { preventDefault: () => void }) {
    event.preventDefault();
    setDisableFields(true);
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
      <StyledCardTitle>Unite a un grupo</StyledCardTitle>
      <form onSubmit={submitHandler}>
        <StyledControl>
          <StyledInputLabel htmlFor="nombre">Nombre Grupo</StyledInputLabel>
          <StyledInput
            disabled={disableFields}
            type="text"
            id="text"
            required
            ref={groupName}
          />
        </StyledControl>
        <StyledControl>
          <StyledInputLabel htmlFor="password">
            Contraseña Ingreso
          </StyledInputLabel>
          <StyledInput
            disabled={disableFields}
            type="text"
            id="password"
            required
            ref={groupPassword}
          />
        </StyledControl>
        <div id="CreateGroup">
          {loading ? (
            <CircularProgress color="inherit" />
          ) : (
            <>
              <StyledButton disabled={disableFields}>
                Unirse a grupo
              </StyledButton>
            </>
          )}
        </div>
      </form>
    </StyledMainComponent>
  );
};

export default JoinGroupForm;

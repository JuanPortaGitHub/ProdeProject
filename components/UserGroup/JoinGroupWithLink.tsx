import { useRef, useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { ADD_USER_GROUP } from "../../graphql/queries/groupQueries";
import ToastContext from "../../context/toastContext";
import {
  StyledControl,
  StyledInput,
  StyledInputLabel,
  StyledMainComponent,
  StyledCardTitle,
  StyledButtonWithLinkComp,
} from "./syled";
import { useRouter } from "next/router";
import { group } from "console";

interface Props {
  groupName: string;
  userId: string;
}

const JoinGroupFormWithLink = ({ groupName, userId }: Props) => {
  const [disableFields, setDisableFields] = useState(false);
  const toast = useContext(ToastContext);
  const router = useRouter();
  const groupPassword = useRef();

  console.log(groupName, userId);

  const [JoinUserToGroup, { data, loading, error }] = useMutation(
    ADD_USER_GROUP,
    {
      onCompleted(data) {
        toast.success(`Te uniste al grupo ${data.addUserToGrupo.nombre}!`);
        setDisableFields(false);
        router.push("/");
      },
      onError(error) {
        toast.error(error.message);
        setDisableFields(false);
      },
    }
  );

  async function submitHandler(event: { preventDefault: () => void }) {
    event.preventDefault();
    setDisableFields(true);
    JoinUserToGroup({
      variables: {
        nombre: groupName[0].trim(),
        claveGrupo: groupPassword.current.value.trim(),
        idUser: userId,
      },
    });
  }

  return (
    <StyledMainComponent>
      <StyledCardTitle>Unite al groupo</StyledCardTitle>
      <form onSubmit={submitHandler}>
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
              <StyledButtonWithLinkComp disabled={disableFields}>
                Unirse a grupo
              </StyledButtonWithLinkComp>
            </>
          )}
        </div>
      </form>
    </StyledMainComponent>
  );
};

export default JoinGroupFormWithLink;

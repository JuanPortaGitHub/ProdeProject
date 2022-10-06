import { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { useMutation } from "@apollo/client";
import { CircularProgress, SelectChangeEvent } from "@mui/material";
import { CREATE_GROUP } from "../../graphql/queries/groupQueries";
import Image from "next/image";
import {
  StyledButton,
  StyledControl,
  StyledInput,
  StyledInputLabel,
  StyledMainComponent,
  StyledCardTitle,
  StyledResultText,
  IconContainer,
  IconsGrid,
} from "./syled";
import { motion } from "framer-motion";

const CreateGroupForm = () => {
  const [logo, setLogo] = useState("/icons/1.png");
  const [disableFields, setDisableFields] = useState(false);
  const groupName = useRef();
  const groupPassword = useRef();
  const groupSlogan = useRef();
  const groupAmount = useRef();

  const { data: session } = useSession();

  const [CreateNewGroup, { data, loading, error }] = useMutation(CREATE_GROUP, {
    onCompleted(data) {
      setDisableFields(false);
      console.log("data", data);
      groupName.current.value = "";
      setLogo("/icons/1.png");
      groupPassword.current.value = "";
      groupSlogan.current.value = "";
      groupAmount.current.value = "";
    },
    onError(error) {
      setDisableFields(false);
      console.log("errorrr", error);
    },
  });
  async function submitHandler(event: { preventDefault: () => void }) {
    event.preventDefault();
    setDisableFields(true);
    CreateNewGroup({
      variables: {
        nombre: groupName.current.value,
        imagen: logo,
        claveGrupo: groupPassword.current.value,
        slogan: groupSlogan.current.value,
        monto: groupAmount.current.value,
        idUser: session?.id,
      },
    });
  }
  const icons = [
    {
      label: "Icono 1",
      src: "/icons/1.png",
      value: "icon1",
    },
    {
      label: "Icono 2",
      src: "/icons/2.png",
      value: "icon2",
    },
    {
      label: "Icono 3",
      src: "/icons/3.png",
      value: "icon3",
    },
  ];

  return (
    <StyledMainComponent>
      <StyledCardTitle>Crea un grupo y jugá con tus amigos</StyledCardTitle>
      <form onSubmit={submitHandler}>
        <StyledInputLabel htmlFor="logo">Logo</StyledInputLabel>
        <IconsGrid>
          {icons.map((icon, key) => (
            <motion.div key={key} onClick={() => setLogo(icon.src)}>
              <IconContainer
                as={motion.div}
                whileTap={{ scale: 0.95 }}
                style={{
                  scale: logo === icon.src ? 1.1 : 1,
                  border: logo === icon.src ? "2px solid white" : "none",
                }}
              >
                <Image src={icon.src} alt={icon.label} width={50} height={50} />
              </IconContainer>
            </motion.div>
          ))}
        </IconsGrid>
        <StyledControl>
          <StyledInputLabel htmlFor="nombre">Nombre</StyledInputLabel>
          <StyledInput
            disabled={disableFields}
            type="text"
            id="text"
            required
            ref={groupName}
          />
        </StyledControl>
        <StyledControl>
          <StyledInputLabel htmlFor="slogan">Frase de grupo</StyledInputLabel>
          <StyledInput
            disabled={disableFields}
            type="text"
            id="slogan"
            required
            ref={groupSlogan}
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
        <StyledControl>
          <StyledInputLabel htmlFor="monto">Monto a jugar</StyledInputLabel>
          <StyledInput
            disabled={disableFields}
            type="number"
            id="monto"
            required
            ref={groupAmount}
          />
        </StyledControl>
        <div>
          {loading ? (
            <CircularProgress color="inherit" />
          ) : (
            <>
              <StyledButton disabled={disableFields}>Crear grupo</StyledButton>
            </>
          )}
          {data && (
            <StyledResultText>
              Grupo {data.createGrupo.nombre} creado
            </StyledResultText>
          )}
          {error && <StyledResultText>{error.message}</StyledResultText>}
        </div>
      </form>
    </StyledMainComponent>
  );
};

export default CreateGroupForm;

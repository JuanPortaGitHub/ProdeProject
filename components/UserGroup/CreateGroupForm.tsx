import { useRef, useState, useContext } from "react";
import { useSession } from "next-auth/react";
import { useMutation } from "@apollo/client";
import { CircularProgress, SelectChangeEvent } from "@mui/material";
import { CREATE_GROUP } from "../../graphql/queries/groupQueries";
import ToastContext from "../../context/toastContext";
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
import { Avatar } from "@mui/material";

const CreateGroupForm = () => {
  const toast = useContext(ToastContext);
  const [logo, setLogo] = useState("/icons/1.png");
  const [disableFields, setDisableFields] = useState(false);
  const groupName = useRef();
  const groupPassword = useRef();
  const groupSlogan = useRef();
  const groupAmount = useRef();

  const { data: session } = useSession();

  const [CreateNewGroup, { data, loading, error }] = useMutation(CREATE_GROUP, {
    onCompleted(data) {
      toast.success(`Grupo ${data.createGrupo.nombre} creado`);
      setDisableFields(false);
      console.log("data", data);
      groupName.current.value = "";
      setLogo("/icons/1.png");
      groupPassword.current.value = "";
      groupSlogan.current.value = "";
      groupAmount.current.value = "";
    },
    onError(error) {
      toast.error(error.message);
      setDisableFields(false);
      console.log("errorrr", error);
    },
  });
  async function submitHandler(event: { preventDefault: () => void }) {
    event.preventDefault();
    setDisableFields(true);
    CreateNewGroup({
      variables: {
        nombre: groupName.current.value.trim(),
        imagen: logo,
        claveGrupo: groupPassword.current.value.trim(),
        slogan: groupSlogan.current.value.trim(),
        monto: groupAmount.current.value.trim(),
        idUser: session?.id,
      },
    });
  }
  const icons = [
    {
      label: "Icono 1",
      src: "/icons/scaloni.png",
      value: "icon1",
    },
    {
      label: "Icono 2",
      src: "/icons/eldiego.jpg",
      value: "icon2",
    },
    {
      label: "Icono 3",
      src: "/icons/messirve.jpg",
      value: "icon3",
    },
    {
      label: "Icono 4",
      src: "/icons/etonoecoca.jpg",
      value: "icon4",
    },
  ];

  return (
    <StyledMainComponent id="CreateGroup">
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
                <Avatar sx={{ width: 50, height: 50 }}>
                  <Image
                    src={icon.src}
                    alt={icon.label}
                    width={100}
                    height={100}
                  />
                </Avatar>
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
        <div id="CreateGroup">
          {loading ? (
            <CircularProgress color="inherit" />
          ) : (
            <>
              <StyledButton disabled={disableFields}>Crear grupo</StyledButton>
            </>
          )}
        </div>
      </form>
    </StyledMainComponent>
  );
};

export default CreateGroupForm;

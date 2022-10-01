import { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { useMutation } from "@apollo/client";
import {
  CircularProgress,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { CREATE_GROUP } from "../../graphql/queries/groupQueries";
import Image from "next/image";
import {
  StyledButton,
  StyledControl,
  StyledIconSelect,
  StyledInput,
  StyledInputLabel,
  StyledMainComponent,
  StyledCardTitle
} from "./syled";

const CreateGroupForm = () => {
  const groupName = useRef();
  const groupPassword = useRef();
  const groupSlogan = useRef();
  const groupAmount = useRef();

  const [logo, setLogo] = useState("/icons/1.png");

  const { data: session } = useSession();

  const [CreateNewGroup, { data, loading, error }] = useMutation(CREATE_GROUP, {
    onCompleted(data) {
      groupName.current.value = "";
      setLogo("/icons/1.png");
      groupPassword.current.value = "";
      groupSlogan.current.value = "";
      groupAmount.current.value = "";
    },
    onError(error) {
      console.log("errorrr", error);
    },
  });
  async function submitHandler(event: { preventDefault: () => void }) {
    event.preventDefault();
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
  const handleImageSelect = (event: SelectChangeEvent<unknown>) => {
    setLogo(event.target.value as string);
  };
  return (
    <StyledMainComponent>
      <StyledCardTitle>Crea un grupo para jugar con amigos</StyledCardTitle>
      <form onSubmit={submitHandler}>
        <StyledControl>
          <StyledInputLabel htmlFor="logo">Logo</StyledInputLabel>

          <StyledIconSelect
            label="Logo"
            defaultValue={"/icons/1.png"}
            onChange={handleImageSelect}
            value={logo}
          >
            {icons.map((option, key) => (
              <MenuItem
                value={option.src}
                key={key}
                style={{ placeContent: "center" }}
              >
                <Image
                  src={option.src}
                  alt={option.label}
                  width={50}
                  height={50}
                />
              </MenuItem>
            ))}
          </StyledIconSelect>
          <StyledInputLabel htmlFor="nombre">Nombre</StyledInputLabel>
          <StyledInput type="text" id="text" required ref={groupName} />
        </StyledControl>
        <StyledControl>
          <StyledInputLabel htmlFor="slogan">Frase de grupo</StyledInputLabel>
          <StyledInput type="text" id="slogan" required ref={groupSlogan} />
        </StyledControl>
        <StyledControl>
          <StyledInputLabel htmlFor="password">
            Contraseña Ingreso
          </StyledInputLabel>
          <StyledInput type="text" id="password" required ref={groupPassword} />
        </StyledControl>
        <StyledControl>
          <StyledInputLabel htmlFor="monto">Monto a jugar</StyledInputLabel>
          <StyledInput type="number" id="monto" required ref={groupAmount} />
        </StyledControl>
        <div>
          {loading ? (
            <CircularProgress color="inherit" />
          ) : (
            <>
              <StyledButton>Crear grupo</StyledButton>
            </>
          )}
          {data && <h3>GRUPO {data.createGrupo.nombre} CREADO</h3>}
          {error && <h3>{error.message}</h3>}
        </div>
      </form>
    </StyledMainComponent>
  );
};

export default CreateGroupForm;

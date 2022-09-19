import { ChangeEvent, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { useMutation } from "@apollo/client";
import classes from "../auth/authform.module.css";
import {
  Button,
  CircularProgress,
  Input,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { CREATE_GROUP } from "../../graphql/queries/groupQueries";
import { UploadFile } from "@mui/icons-material";
import icon1 from "/icons/1.png";
import Image from "next/image";

const CreateGroupForm = () => {
  const groupName = useRef();
  const groupImage = useRef();
  const groupPassword = useRef();
  const groupSlogan = useRef();
  const groupAmount = useRef();

  const [logo, setLogo] = useState("/icons/1.png");

  const { data: session } = useSession();
  console.log("session", session);

  const [CreateNewGroup, { data, loading, error }] = useMutation(CREATE_GROUP, {
    onCompleted(data) {
      console.log("dataaa", data);
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
    console.log("asdasd", groupImage);
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
  const handleImageSelect = (e: SelectChangeEvent) => {
    setLogo(e.target.value as string);
  };
  return (
    <>
      {/* {!session && ( */}
      <>
        <section className={classes.auth}>
          <h1>Crea un grupo para jugar con amigos</h1>
          <form onSubmit={submitHandler}>
            <div className={classes.control}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "20%" }}>
                  <Select
                    label="Logo"
                    onChange={handleImageSelect}
                    defaultValue={"/icons/1.png"}
                    value={logo}
                    IconComponent={() => null}
                  >
                    {icons.map((option, key) => (
                      <MenuItem
                        style={{ display: "flex", justifyContent: "center" }}
                        value={option.src}
                        key={key}
                      >
                        <Image
                          src={option.src}
                          alt={option.label}
                          width={50}
                          height={50}
                        />
                      </MenuItem>
                    ))}
                  </Select>
                </div>
                <div style={{ width: "80%", alignSelf: "center" }}>
                  <label htmlFor="nombre">Nombre</label>
                  <input type="text" id="text" required ref={groupName} />
                </div>
              </div>
            </div>

            <div className={classes.control}>
              <label htmlFor="slogan">Frase de grupo</label>
              <input type="text" id="slogan" required ref={groupSlogan} />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Contraseña Ingreso</label>
              <input type="text" id="password" required ref={groupPassword} />
            </div>
            <div className={classes.control}>
              <label htmlFor="monto">Monto a jugar</label>
              <input type="number" id="monto" required ref={groupAmount} />
            </div>
            <div className={classes.actions}>
              {loading ? (
                <CircularProgress color="inherit" />
              ) : (
                <>
                  <button>Crear grupo</button>
                </>
              )}
              {data && (
                <h3>GRUPO {data.createGrupo.nombre.toUpperCase()} CREADO</h3>
              )}
              {error && <h3>{error.message}</h3>}
            </div>
          </form>
        </section>
      </>
      {/* )} */}
    </>
  );
};

export default CreateGroupForm;

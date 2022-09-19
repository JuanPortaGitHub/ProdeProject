import { ChangeEvent, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { useMutation } from "@apollo/client";
import classes from "../auth/authform.module.css";
import { Button, CircularProgress, Input } from "@mui/material";
import { CREATE_GROUP } from "../../graphql/queries/groupQueries";
import { UploadFile } from "@mui/icons-material";

const CreateGroupForm = () => {
  const groupName = useRef();
  const groupImage = useRef();
  const groupPassword = useRef();
  const groupSlogan = useRef();
  const groupAmount = useRef();

  const [filename, setFilename] = useState("");

  const { data: session } = useSession();
  console.log("session", session);

  const [CreateNewGroup, { data, loading, error }] = useMutation(CREATE_GROUP, {
    onCompleted(data) {
      console.log("dataaa", data);
      groupName.current.value = "";
      groupImage.current.value = "";
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
        imagen: groupImage.current.value,
        claveGrupo: groupPassword.current.value,
        slogan: groupSlogan.current.value,
        monto: groupAmount.current.value,
        idUser: session?.id,
      },
    });
  }

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    const { name } = file;
    setFilename(name);
  };
  return (
    <>
      {/* {!session && ( */}
      <>
        <section className={classes.auth}>
          <h1>Crea un grupo para jugar con amigos</h1>
          <form onSubmit={submitHandler}>
            <div className={classes.control}>
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="text" required ref={groupName} />
            </div>
            <div className={classes.control}>
              <Button
                component="label"
                variant="outlined"
                startIcon={<UploadFile />}
                sx={{ marginRight: "1rem" }}
              >
                Subir Logo
                <input
                  type="file"
                  accept=".jpg || .jpeg || .gif"
                  hidden
                  onChange={handleFileUpload}
                  ref={groupImage}
                />
              </Button>
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

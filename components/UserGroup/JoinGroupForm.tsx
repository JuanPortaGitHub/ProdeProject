import { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { useMutation } from "@apollo/client";
import classes from "../auth/authform.module.css";
import { Button, CircularProgress, Input } from "@mui/material";
import { ADD_USER_GROUP } from "../../graphql/queries/groupQueries";

const JoinGroupForm = () => {
  const groupName = useRef();
  const groupPassword = useRef();

  const { data: session } = useSession();
  console.log("session", session);

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
    <>
      {/* {!session && ( */}
      <>
        <section className={classes.auth}>
          <h1>Únete a un grupo ya creado</h1>
          <form onSubmit={submitHandler}>
            <div className={classes.control}>
              <label htmlFor="nombre">Nombre Grupo</label>
              <input type="text" id="text" required ref={groupName} />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Contraseña Ingreso</label>
              <input type="text" id="password" required ref={groupPassword} />
            </div>
            <div className={classes.actions}>
              {loading ? (
                <CircularProgress color="inherit" />
              ) : (
                <>
                  <button>Unirse a grupo</button>
                </>
              )}
              <h3>
                {/* TE UNISTE AL GRUPO {data.JoinUserToGroup.nombre.toUpperCase()} */}
              </h3>
              {error && <h3>{error.message}</h3>}
            </div>
          </form>
        </section>
      </>
      {/* )} */}
    </>
  );
};

export default JoinGroupForm;

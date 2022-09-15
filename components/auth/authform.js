import { useState, useRef } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../graphql/queries/userQueries";
import classes from "./authform.module.css";
import { CircularProgress } from "@mui/material";

const AuthForm = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const { data: session } = useSession();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const [createNewUser, { data, loading, error }] = useMutation(ADD_USER);
  async function submitHandler(event) {
    event.preventDefault();

    const enteredFirstName = firstNameRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (!isLogin) {
      createNewUser({
        variables: {
          name: enteredFirstName,
          email: enteredEmail,
          recivedPassword: enteredPassword,
        },
      });
    } else {
    }
  }
  console.log("seess", session);
  return (
    <>
      {!session && (
        <>
          <section className={classes.auth}>
            <h1>{!isLogin ? "Registro" : "Ingresar"}</h1>
            <form onSubmit={submitHandler}>
              {!isLogin && (
                <>
                  <div className={classes.control}>
                    <label htmlFor="Nombre">Nombre</label>
                    <input
                      type="text"
                      id="Nombre"
                      required
                      ref={firstNameRef}
                    />
                  </div>
                </>
              )}
              <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required ref={emailInputRef} />
              </div>
              <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  required
                  ref={passwordInputRef}
                />
              </div>
              <div className={classes.actions}>
                {loading ? (
                  <CircularProgress color="inherit" />
                ) : (
                  <>
                    <button>{isLogin ? "Ingresar" : "Crear Cuenta"}</button>
                    <button style={{ marginTop: 10 }} onClick={() => signIn()}>
                      Inicia Sesión con Google
                    </button>
                    <button
                      type="button"
                      className={classes.toggle}
                      onClick={switchAuthModeHandler}
                    >
                      {isLogin ? "No tengo cuenta" : "Ya estoy registrado"}
                    </button>{" "}
                  </>
                )}
                {error && <h3>{error.message}</h3>}
              </div>
            </form>
          </section>
        </>
      )}
    </>
  );
};

export default AuthForm;

import { useState, useRef } from "react";
import { useSession, signIn } from "next-auth/react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../graphql/queries/userQueries";
import { CircularProgress } from "@mui/material";
import {
  StyledButton,
  StyledCardTitle,
  StyledControl,
  StyledInput,
  StyledInputLabel,
  StyledMainComponent,
} from "./styled";

const AuthForm = () => {
  const firstNameRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const { data: session } = useSession();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const [createNewUser, { data, loading, error }] = useMutation(ADD_USER, {
    onCompleted(data) {
      console.log("data", data);
    },
    onError(error) {
      console.log("error", error);
    },
  });
  async function submitHandler(event) {
    event.preventDefault();

    if (!isLogin) {
      const enteredFirstName = firstNameRef.current.value;
      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;
      createNewUser({
        variables: {
          name: enteredFirstName,
          email: enteredEmail,
          recivedPassword: enteredPassword,
        },
      });
    } else {
      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;
      await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      })
        .then((res) => {
          console.log("response", res);
        })
        .then(console.log("Session", session))
        .catch((error) => console.log(error));
    }
  }

  return (
    <StyledMainComponent>
      <StyledCardTitle>{!isLogin ? "Registro" : "Ingresar"}</StyledCardTitle>
      <form onSubmit={submitHandler}>
        {!isLogin && (
          <>
            <StyledControl>
              <StyledInputLabel htmlFor="Nombre">Nombre</StyledInputLabel>
              <StyledInput
                type="text"
                id="Nombre"
                required
                ref={firstNameRef}
              />
            </StyledControl>
          </>
        )}
        <StyledControl>
          <StyledInputLabel htmlFor="email">Email</StyledInputLabel>
          <StyledInput type="email" id="email" required ref={emailInputRef} />
        </StyledControl>
        <StyledControl>
          <StyledInputLabel htmlFor="password">Password</StyledInputLabel>
          <StyledInput
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </StyledControl>
        {loading ? (
          <CircularProgress color="inherit" />
        ) : (
          <>
            <StyledButton>{isLogin ? "Ingresar" : "Crear Cuenta"}</StyledButton>
            <StyledButton onClick={switchAuthModeHandler}>
              {isLogin ? "No tengo cuenta" : "Ya estoy registrado"}
            </StyledButton>
          </>
        )}
        {error && <h3>{error.message}</h3>}
      </form>
      <StyledButton onClick={() => signIn("google")}>
        Inicia Sesión con Google
      </StyledButton>
    </StyledMainComponent>
  );
};
export default AuthForm;

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
  StyledResultText,
} from "./styled";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [disableFields, setDisableFields] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [errorLogin, setErrorLogin] = useState();
  const firstNameRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const { data: session } = useSession();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const [createNewUser, { error }] = useMutation(ADD_USER, {
    onCompleted(data) {
      console.log("data", data);
    },
    onError(error) {
      console.log("error", error);
    },
  });
  async function submitHandler(event) {
    event.preventDefault();
    setErrorLogin(false);
    setLoadingLogin(true);
    setDisableFields(true);

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
          res.error && setErrorLogin(res.error);
        })
        .then(console.log("Session", session))
        .catch((error) => console.log(error));
    }
    setDisableFields(false);
    setLoadingLogin(false);
  }

  return (
    <StyledMainComponent>
      <StyledCardTitle>{!isLogin ? "Registro" : "Ingresar"}</StyledCardTitle>
      <form>
        {!isLogin && (
          <>
            <StyledControl>
              <StyledInputLabel htmlFor="Nombre">Nombre</StyledInputLabel>
              <StyledInput
                type="text"
                id="Nombre"
                required
                ref={firstNameRef}
                disabled={disableFields}
              />
            </StyledControl>
          </>
        )}
        <StyledControl>
          <StyledInputLabel htmlFor="email">Email</StyledInputLabel>
          <StyledInput
            type="email"
            id="email"
            style={{ textTransform: "lowercase" }}
            required
            ref={emailInputRef}
            disabled={disableFields}
          />
        </StyledControl>
        <StyledControl>
          <StyledInputLabel htmlFor="password">Password</StyledInputLabel>
          <StyledInput
            type="password"
            id="password"
            required
            ref={passwordInputRef}
            disabled={disableFields}
          />
        </StyledControl>
        {loadingLogin ? (
          <CircularProgress color="inherit" />
        ) : (
          <>
            <StyledButton onClick={submitHandler}>
              {isLogin ? "Ingresar" : "Crear Cuenta"}
            </StyledButton>
            <StyledButton
              disabled={disableFields}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "No tengo cuenta" : "Ya estoy registrado"}
            </StyledButton>
          </>
        )}
        {error && <StyledResultText>{error.message}</StyledResultText>}
        {errorLogin && <StyledResultText>{errorLogin}</StyledResultText>}
      </form>
      <StyledButton disabled={disableFields} onClick={() => signIn("google")}>
        Inicia Sesión con Google
      </StyledButton>
    </StyledMainComponent>
  );
};
export default AuthForm;

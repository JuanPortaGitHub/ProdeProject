import { useState, useRef, useContext } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../graphql/queries/userQueries";
import { CircularProgress } from "@mui/material";
import {
  StyledButton,
  StyledCardTitle,
  StyledControl,
  StyledInput,
  StyledInputLabel,
  StyledResultText,
} from "./styled";
import { motion } from "framer-motion";
import ToastContext from "../../context/toastContext";

const CreateUser = ({ createUserHandler }) => {
  const [loadingLogin, setLoadingLogin] = useState(false);
  const toast = useContext(ToastContext);
  const [errorLogin, setErrorLogin] = useState("");
  const firstNameRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordRepeatInputRef = useRef();

  const [createNewUser, { error }] = useMutation(ADD_USER, {
    onCompleted(data) {
      console.log("data", data);
      toast.success("Usuario Creado!");
      createUserHandler();
    },
    onError(error) {
      console.log("error", error);
      toast.error(error.message);
    },
  });
  const submitHandler = async (event) => {
    event.preventDefault();
    setErrorLogin("");
    setLoadingLogin(() => true);
    if (
      passwordInputRef.current.value !== passwordRepeatInputRef.current.value
    ) {
      setLoadingLogin(() => false);
      setErrorLogin("Las contraseñas no coinciden");
      return;
    }

    const enteredFirstName = firstNameRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    await createNewUser({
      variables: {
        name: enteredFirstName,
        email: enteredEmail,
        recivedPassword: enteredPassword,
      },
    });

    setLoadingLogin(() => false);
  };

  return (
    <>
      <StyledCardTitle>Registro</StyledCardTitle>
      <form onSubmit={submitHandler}>
        {loadingLogin ? (
          <CircularProgress color="inherit" />
        ) : (
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
            <StyledControl>
              <StyledInputLabel htmlFor="email">Email</StyledInputLabel>
              <StyledInput
                type="email"
                id="email"
                style={{ textTransform: "lowercase" }}
                required
                ref={emailInputRef}
              />
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
            <StyledControl>
              <StyledInputLabel htmlFor="password">
                Repetir contraseña
              </StyledInputLabel>
              <StyledInput
                type="password"
                id="repeatpassword"
                required
                ref={passwordRepeatInputRef}
              />
            </StyledControl>
            <StyledButton
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Crear Cuenta
            </StyledButton>
            {errorLogin && <StyledResultText>{errorLogin}</StyledResultText>}
          </>
        )}
      </form>
    </>
  );
};
export default CreateUser;

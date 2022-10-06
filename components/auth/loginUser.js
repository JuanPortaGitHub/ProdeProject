import { useState, useRef } from "react";
import { signIn } from "next-auth/react";
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

const LoginUser = () => {
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [errorLogin, setErrorLogin] = useState();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();
    setErrorLogin(false);
    setLoadingLogin(true);

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
      .catch((error) => console.log(error));
    setLoadingLogin(false);
  }

  return (
    <>
      <StyledCardTitle>Ingresar</StyledCardTitle>
      <form onSubmit={submitHandler}>
        {loadingLogin ? (
          <CircularProgress color="inherit" />
        ) : (
          <>
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
            <StyledButton
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Ingresar
            </StyledButton>
            {errorLogin && <StyledResultText>{errorLogin}</StyledResultText>}
          </>
        )}
      </form>
    </>
  );
};
export default LoginUser;
